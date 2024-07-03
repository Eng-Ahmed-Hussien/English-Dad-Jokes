 const jokeEl = document.getElementById("joke");
      const jokeBtn = document.getElementById("jokeBtn");

      jokeBtn.addEventListener("click", generateJokeUsingThen);

      // generateJokeUsingAsync()
      generateJokeUsingThen();

      // Using async/await
      // async function generateJokeUsingAsync() {
      //   try {
      //     const config = {
      //       headers: {
      //         Accept: 'application/json',
      //       },
      //     }

      //     const res = await fetch('https://icanhazdadjoke.com', config)
      //     const data = await res.json()

      //     jokeEl.innerHTML = data.joke
      //   } catch (error) {
      //     jokeEl.innerHTML = 'Oops! Something went wrong. Try again later.'
      //     console.error('Error fetching joke:', error)
      //   }
      // }

      // Using .then() method
      function generateJokeUsingThen() {
        const config = {
          headers: {
            Accept: "application/json",
          },
        };

        fetch("https://icanhazdadjoke.com", config)
          .then((res) => res.json())
          .then((data) => {
            jokeEl.innerHTML = data.joke;
          })
          .catch((error) => {
            jokeEl.innerHTML = "Oops! Something went wrong. Try again later.";
            console.error("Error fetching joke:", error);
          });
      }