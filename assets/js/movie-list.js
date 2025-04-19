const data = [
  {
    title: "into the wild",
    year: 2022,
    rating: 5,
    description: "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...",
    runtime: "2h21’",
    release: "5 July 2022",
    director: "Anthony Russo, Joe Russo",
    img: "images/movies-thumbnail/2.jpg"
  },
  {
    title: "blade runner",
    year: 2024,
    rating: 2,
    description: "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...",
    runtime: "2h21’",
    release: "22 November 2024",
    director: "Peyton Reed",
    img: "images/movies-thumbnail/3.jpg"
  },
  {
    title: "Mulholland pride",
    year: 2025,
    rating: 8,
    description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    runtime: "2h21’",
    release: "17 February 2025",
    director: "Shane Black",
    img: "images/movies-thumbnail/4.jpg"
  },
  {
    title: "oblivion",
    year: 2021,
    rating: 9,
    description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...",
    runtime: "2h21’",
    release: "12 March 2021",
    director: "Joss Whedon",
    img: "images/movies-thumbnail/1.jpg"
  },
  {
    title: "skyfall: evil of boss",
    year: 2023,
    rating: 10,
    description: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    runtime: "2h21’",
    release: "9 October 2023",
    director: "Alan Taylor",
    img: "images/movies-thumbnail/5.jpg"
  }
];
let moviesList = data;
const MAX_WORDS_DESCRIPTION = 20;

const formatDescription = (str) => {
  arr = str.split(" ");
  output = "";
  for (let i = 0; i < MAX_WORDS_DESCRIPTION; ++i) output += arr[i] + " ";
  output += "...";
  return output;
}
const renderMovieList = (moviesList) => {
  const movieListElement = document.querySelector(".movie-list");
  movieListElement.innerHTML = "";
  moviesList.forEach(phim => {
    movieListElement.innerHTML += `
    <li>
                <div style="height: 100%;">
                  <a style="display: block; height: 100%;" href=""><img src="../assets/${phim.img}"
                      width="100%" style="border-radius: 10px;" alt="1"></a>
                </div>
                <div>
                  <a href="#">
                    <h2 style="font-size: 18px; font-weight: bold;">${phim.title} (${phim.year})</h2>
                  </a>
                  <span>⭐${phim.rating}/10</span>
                  <p>${formatDescription(phim.description)}</p>
                  <small style="opacity: .6; color: #fff">${phim.release}</small>
                  <hr style="margin: 8px 0;">
                  <div class="movie-date-runtime">Run time: ${phim.runtime}</div>
                  <span class="movie-director">Director: <a href="#" style="color: #3D78B4;">${phim.director}</a></span>
                </div>
              </li>`
  })
}
document.addEventListener("DOMContentLoaded", () => {
  moviesList = sortedArray(moviesList, "rating", "asc");
  renderMovieList(moviesList);

  const rightBoxForm = document.querySelector(".right-box form");
  rightBoxForm.addEventListener("submit", (e) => filterMoviesByOptions(e));

  const optionsList = document.querySelector(".commons select")
  optionsList.addEventListener("change", e => {
    const byAndSortType = e.target.value.split("_");
    moviesList = sortedArray(moviesList, byAndSortType[0], byAndSortType[1]);
    renderMovieList(moviesList);
  })


})

const sortedArray = (arr, by, sortType) => {
  return arr.sort((x, y) => {
    if (by === "rating")
      return sortType === "asc" ? x[by] - y[by] : y[by] - x[by];
    if (by === "title")
      return sortType === "asc" ? x[by].localeCompare(y[by]) : y[by].localeCompare(x[by]);
    return 0;
  });
}
const filterMoviesByOptions = e => {
  e.preventDefault();
  const name = document.querySelector("#name").value.trim().toLowerCase();
  const rating = 0 || Number(document.querySelector("#rating").value);
  const fromYear = 0 || Number(document.querySelector("#date-from").value);
  const toYear = 0 || Number(document.querySelector("#date-to").value);

  // renderMovieList()
  const filtered = data.filter(movie => {
    const matchName = name != "" ? movie.title.toLowerCase().includes(name) : true;
    const matchRating = rating != 0 ? movie.rating >= rating && movie.rating <= rating + 3 : true;
    const matchFromYear = fromYear != 0 ? movie.year >= fromYear : true;
    const matchToYear = toYear != 0 ? movie.year <= toYear : true;

    return matchName && matchRating && matchFromYear && matchToYear;
  });
  moviesList = filtered;
  document.querySelector(".founded-movies").innerHTML = "Founded: " + moviesList.length + " movies"
  renderMovieList(moviesList);
}