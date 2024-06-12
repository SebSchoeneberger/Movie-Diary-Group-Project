// Start Felipes Js part

// End Felipes Js part


// Start Sebastians Js part

// End Sebastians Js part


// Start Amarbayars Js part
//
//
let page = 1;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWY1ODhiNDQ3MDc1MDQxN2FlMWExMTRmYzhmZjgyYyIsInN1YiI6IjY2NjYxODRmZjE1OTlhZWQyNzYyYjkxZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JTzNe9K6zUQWUYhqnM8Re8sqtM8aK9TLVzmGq0dCH0c",
  },
};
//
// fetch popular movies for the home page
fetch(
  `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
  options
)
  .then((response) => response.json())
  .then((response) => {
    appendMovies(response.results);
  })
  .catch((err) => console.error(err));
//
// Append movies for home page
  
  function appendMovies(movies) {
    console.log(movies);
    const movieList = document.getElementById("movie-list");
    movieList.innerHTML = "";

    movies.forEach((movie) => {
// item
      const movieItem = document.createElement("div");
      movieItem.classList.add("bg-white", "p-4", "rounded-lg", "shadow-md");
// poster
      const moviePoster = document.createElement("img");
      moviePoster.src = `https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`;    
      moviePoster.alt = movie.title;
      moviePoster.classList.add("w-full", "h-auto", "rounded-lg");
// title
      const movieTitle = document.createElement("h2");
      movieTitle.textContent = movie.title;
      movieTitle.classList.add("text-xl", "font-bold", "mb-2");
// pverview
      const movieOverview = document.createElement("p");
      movieOverview.textContent = movie.overview;
      movieOverview.classList.add("text-gray-700", "mt-2", "text-[10px]");


      movieItem.appendChild(moviePoster);
      movieItem.appendChild(movieTitle);
      movieItem.appendChild(movieOverview);

      movieList.appendChild(movieItem);
    });
  }

// End Amarbayars Js part