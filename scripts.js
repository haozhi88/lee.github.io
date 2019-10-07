const pMessage = document.getElementById("display-message");
const pImage = document.getElementById("gif-img");

/* Get a random joke from Chuck Norrs website using AJAX */
function getChuckNorrisJokeAJAX() {
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    success: function(result) {
      console.log("AJAX (Joke):" + result.value);
      pMessage.innerText = result.value;
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
}

/* Get a random joke from Chuck Norrs website using Javascript */
function getChuckNorrisJokeJS() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log("JS (Joke):" + data.value);
      pMessage.innerText = data.value;
    });
}

/* Get a random GIF from GIPHY website using AJAX */
function getGIFAJAX() {
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/random?api_key=Z97fBLFzEJAca8LXr1jxWriW4K6SL7bT&tag=star",
    method: "GET",
    success: function(result) {
      console.log("AJAX (GIF):");
      console.log(result);
      // pImage.src = "star.jpg";
      pImage.src = result.data.image_url;
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
}

/* Get a random GIF from GIPHY website using JS */
function getGIFJS() {
  fetch(
    "https://api.giphy.com/v1/gifs/random?api_key=Z97fBLFzEJAca8LXr1jxWriW4K6SL7bT"
  )
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log("JS (GIF):");
      console.log(data);
      pImage.src = data.data.image_url;
    });
}
