
let moviesList = data;
const MAX_WORDS_DESCRIPTION = 20;
const THUMB_IMG_HEIGHT = 300;
const MAX_ITEMS_PER_PAGE = 10;
let currentPage = 1;

const formatDescription = (str) => {
  arr = str.split(" ");
  output = "";
  for (let i = 0; i < MAX_WORDS_DESCRIPTION; ++i) output += arr[i] + " ";
  output += "...";
  return output;
}
const renderPage = (count, currentPage) => {
  return `
    <li>
      <a data-page="${count}" class="${count == currentPage ? "active-pagination-link" : ""}" href="#">${count}</a>
    </li>
  `;
};

const renderPagination = (totalItems) => {
  const pagContainer = document.querySelector(".pagination ul");
  pagContainer.innerHTML = "";

  let totalPages = Math.ceil(totalItems / MAX_ITEMS_PER_PAGE);

  if (totalPages <= 1) {
    return;
  }

  const maxPagesToShow = 5;
  const halfMaxPages = Math.floor(maxPagesToShow / 2);

  let startPage = currentPage - halfMaxPages;
  let endPage = currentPage + halfMaxPages;

  if (startPage <= 0) {
    startPage = 1;
    endPage = maxPagesToShow > totalPages ? totalPages : maxPagesToShow;
  }

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = totalPages - maxPagesToShow + 1 > 0 ? totalPages - maxPagesToShow + 1 : 1;
  }

  for (let count = startPage; count <= endPage; count++) {
    pagContainer.innerHTML += renderPage(count, currentPage);
  }

  if (startPage > 1) {
    pagContainer.innerHTML = renderPage(1, currentPage) + '<li><span>...</span></li>' + pagContainer.innerHTML;
  }

  if (endPage < totalPages) {
    pagContainer.innerHTML += '<li><span>...</span></li>' + renderPage(totalPages, currentPage);
  }

  document.querySelectorAll(".pagination ul a").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const page = btn.getAttribute("data-page");
      currentPage = parseInt(page);

      renderMovieList(moviesList);
    });
  });
};



const renderMovieList = (moviesList) => {
  window.scrollTo({
    behavior: "smooth",
    left: 0,
    top: 0
  });
  renderPagination(moviesList.length);

  const startIndex = (currentPage - 1) * MAX_ITEMS_PER_PAGE;
  const endIndex = startIndex + MAX_ITEMS_PER_PAGE;
  const movies = moviesList.slice(startIndex, endIndex);
  const movieContainer = document.querySelector(".movie-list");
  movieContainer.innerHTML = "";

  movies.forEach(phim => {
    movieContainer.innerHTML += `
    <li>
                <div style="height: 100%;">
                  <a style="display: block; height: 100%;" href="../pages/movie-details.html"><img src="../assets/${phim.img}"
                      width="100%" style="border-radius: 10px; height: ${THUMB_IMG_HEIGHT}px;" alt="${phim.title}"></a>
                </div>
                <div class="movie-content-box" style="overflow: hidden;">
                  <a href="../pages/movie-details.html" >
                    <h2 style="font-size: 18px; font-weight: bold;">${phim.title} (${phim.year})</h2>
                  </a>
                  <span>⭐${phim.rating}/10</span>
                  <p>${formatDescription(phim.description)}</p>
                  <small style="opacity: .6 !important; color: #fff">${phim.release}</small>
                  <hr style="margin: 8px 0;">
                  <div style="opacity: .8 !important; color: #fff" class="movie-date-runtime">Run time: ${phim.runtime}</div>
                  <span style="opacity: .8 !important; color: #fff; padding: 10px 0;" class="movie-director">Director: <a href="#" style="color: #3D78B4;">${phim.director}</a></span>
                </div>
              </li>`
  })
}
document.addEventListener("DOMContentLoaded", () => {
  moviesList = sortedArray(moviesList, "rating", "asc");
  renderMovieList(moviesList);
  document.querySelector(".founded-movies").innerHTML = "Founded: " + data.length + " movies";

  const rightBoxForm = document.querySelector(".right-box form");
  rightBoxForm.addEventListener("submit", (e) => filterMoviesByOptions(e));

  const optionsList = document.querySelector(".commons select");
  optionsList.addEventListener("change", e => {
    const byAndSortType = e.target.value.split("_");
    moviesList = sortedArray(moviesList, byAndSortType[0], byAndSortType[1]);
    renderMovieList(moviesList);
    handleToggleAnimation();
  })
  handleToggleAnimation();
  document.addEventListener("scroll", () => handleToggleAnimation());

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
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
  e.preventDefault();
  const name = document.querySelector("#name").value.trim().toLowerCase();
  const rating = 0 || Number(document.querySelector("#rating").value);
  const fromYear = 0 || Number(document.querySelector("#date-from").value);
  const toYear = 0 || Number(document.querySelector("#date-to").value);

  const filtered = data.filter(movie => {
    const matchName = name != "" ? movie.title.toLowerCase().includes(name) : true;
    const matchRating = rating != 0 ? movie.rating >= rating && movie.rating <= rating + 3 : true;
    const matchFromYear = fromYear != 0 ? movie.year >= fromYear : true;
    const matchToYear = toYear != 0 ? movie.year <= toYear : true;

    return matchName && matchRating && matchFromYear && matchToYear;
  });
  moviesList = filtered;
  currentPage = 1;
  document.querySelector(".founded-movies").innerHTML = "Founded: " + moviesList.length + " movies";
  renderMovieList(moviesList);
  handleToggleAnimation();
}

const handleToggleAnimation = () => {
  const a = window.scrollY + window.innerHeight;
  const movieListElement = document.querySelectorAll(".movie-list li");
  movieListElement.forEach(obj => {
    if (obj.offsetTop < a) {
      obj.classList.add("active-animation");
    } else {
      obj.classList.remove("active-animation");
    }
  })
}
