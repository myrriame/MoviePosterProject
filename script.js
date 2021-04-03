var API_KEY = '157f3a2b'



var button = document.getElementById("submitButton");

button.addEventListener("click", function (event) {
    // prevents page from refreshing so we could see the console
    event.preventDefault()
    // search bar input from user
    var movieName = document.getElementById("movieInput").value;
    console.log(movieName);
    // accounts for if the user typed a movie with more than one word then adds + sign between
    var replaced = movieName.split(' ').join('+');
    console.log(replaced)

    var addPoster = (data) => {
        // console.log(data) to get object

        // **previous method**
        // var poster = document.createElement("img")
        // poster.src = data.Poster
        // console.log(poster) to check if url is appearing
        // document.body.appendChild(poster) didn't work: this adds to the previous movie poster
        // **previous method**

        var moviePoster = document.getElementById("movieImage")
        moviePoster.src = data.Poster
        moviePoster.style.display = "block";
    }


    fetch("http://www.omdbapi.com/?apikey=" + API_KEY + "&t=" + replaced)
        // .then(reply => console.log(reply)) used to check status
        .then(reply => reply.json())
        // .then(data => console.log(data)) to get url info
        .then(data => addPoster(data))
        .catch(err => console.log("Poster Not Available"));
});
