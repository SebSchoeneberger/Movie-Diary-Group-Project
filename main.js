// Start Felipes Js part

// End Felipes Js part

// Start Sebastians Js part
const searchInput = document.querySelector("[data-search]");

searchInput.addEventListener('input', e => { 
    const value = e.target.value.toLowerCase();

    allMovies.forEach(movie => {
        const movieId = document.getElementById(movie.id);
        if (movie.title.toLowerCase().includes(value)) {
            movieId.classList.remove("hidden");
        } else {
            movieId.classList.add("hidden");
        }
    });
});

function showAllMovies() {
    allMovies.forEach(movie => {
        const movieId = document.getElementById(movie.id);
        movieId.classList.remove("hidden");
    });
}

const genreAction =document.querySelector('#action');
genreAction.addEventListener('click', e => {
    allMovies.forEach(movie => {
        const movieId = document.getElementById(movie.id);
        if (movie.genre_ids.length == 3) {
            movieId.classList.remove("hidden");
        } else {
            movieId.classList.add("hidden");
        }
    })
} )

const genreDrama =document.querySelector('#drama');
genreDrama.addEventListener('click', e => {
    allMovies.forEach(movie => {
        const movieId = document.getElementById(movie.id);
        if (movie.genre_ids.length == 4) {
            movieId.classList.remove("hidden");
        } else {
            movieId.classList.add("hidden");
        }
    })
} )

const genreComedy =document.querySelector('#comedy');
genreComedy.addEventListener('click', e => {
    allMovies.forEach(movie => {
        const movieId = document.getElementById(movie.id);
        if (movie.genre_ids.length == 5) {
            movieId.classList.remove("hidden");
        } else {
            movieId.classList.add("hidden");
        }
    })
} )

const genreSciFi =document.querySelector('#sciFi');
genreSciFi.addEventListener('click', e => {
    allMovies.forEach(movie => {
        const movieId = document.getElementById(movie.id);
        if (movie.genre_ids.length == 3) {
            movieId.classList.remove("hidden");
        } else {
            movieId.classList.add("hidden");
        }
    })
} )

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', e => {
    showAllMovies();
});

let allMovies = [];
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
    allMovies = response.results;
    appendMovies(allMovies);
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
    movieItem.id = movie.id;
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
    // favorite button
    const favoriteButton = document.createElement("button");
    favoriteButton.textContent = "Add to Favorites";
    favoriteButton.classList.add(
      "bg-green-500",
      "text-white",
      "p-2",
      "rounded",
      "mt-2"
    );
    favoriteButton.addEventListener("click", () => addToFavorites(movie));

    movieItem.appendChild(moviePoster);
    movieItem.appendChild(movieTitle);
    movieItem.appendChild(movieOverview);
    movieItem.appendChild(favoriteButton);

    movieList.appendChild(movieItem);
  });
}
// favorites button function
function addToFavorites(movie) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.some((favorite) => favorite.id === movie.id)) {
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    alert(`${movie.title}" is already in favorites.`);
  }
}

// End Amarbayars Js part
