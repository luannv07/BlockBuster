const userFavoriteGrid = [
  {
    title: "oblivion",
    year: 2010,
    rating: 3.2,
    description:
      "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...",
    runtime: "2h21’",
    release: "12 March 2010",
    director: "Joss Whedon",
    img: "images/movies-thumbnail/1.jpg",
  },
  {
    title: "into the wild",
    year: 2012,
    rating: 6.5,
    description:
      "As Steve Rogers struggles to embrace his role in the modern world, he teams up with a fellow Avenger and S.H.I.E.L.D agent, Black Widow, to battle a new threat...",
    runtime: "2h21’",
    release: "5 July 2012",
    director: "Anthony Russo, Joe Russo",
    img: "images/movies-thumbnail/2.jpg",
  },
  {
    title: "blade runner",
    year: 2015,
    rating: 8.0,
    description:
      "Armed with a super-suit with the astonishing ability to shrink in scale but increase in strength, cat burglar Scott Lang must embrace his inner hero and help...",
    runtime: "2h21’",
    release: "22 November 2015",
    director: "Peyton Reed",
    img: "images/movies-thumbnail/3.jpg",
  },
  {
    title: "Mulholland pride",
    year: 2018,
    rating: 9.3,
    description:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    runtime: "2h21’",
    release: "17 February 2018",
    director: "Shane Black",
    img: "images/movies-thumbnail/4.jpg",
  },
  {
    title: "skyfall: evil of boss",
    year: 2020,
    rating: 10.0,
    description:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    runtime: "2h21’",
    release: "9 October 2020",
    director: "Alan Taylor",
    img: "images/movies-thumbnail/5.jpg",
  },
  {
    title: "skyfall: evil of boss",
    year: 2020,
    rating: 10.0,
    description:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    runtime: "2h21’",
    release: "9 October 2020",
    director: "Alan Taylor",
    img: "images/movies-thumbnail/5.jpg",
  },
  {
    title: "skyfall: evil of boss",
    year: 2020,
    rating: 10.0,
    description:
      "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    runtime: "2h21’",
    release: "9 October 2020",
    director: "Alan Taylor",
    img: "images/movies-thumbnail/5.jpg",
  },
];

const userFavoriteGridElement = document.querySelector(".userFavoriteGrid");
userFavoriteGrid.forEach((phim) => {
  userFavoriteGridElement.innerHTML += `
    <li style="display: flex; align-items: flex-start; gap: 20px; margin-bottom: 20px;">
      <div style="flex-shrink: 0;">
       <img src="../assets/${phim.img}" style="border-radius: 10px;" alt="${phim.title}">
      </div>
      <div style="color: white;">
        <h2 style="font-size: 18px; font-weight: bold; color: white; margin: 0 0 8px;">${phim.title}</h2>
        <span style="display: block; margin-bottom: 5px;">⭐${phim.rating}/10</span>
        <p class="description" style="margin: 0 0 8px;">${phim.description}</p>
        <small style="opacity: .6;">${phim.release}</small>
        <div style="opacity: .8;">Run time: ${phim.runtime}</div>
        <hr style="margin: 8px 0;">
        <span>Director: <a href="#" style="color: #3D78B4;">${phim.director}</a></span>
      </div>
    </li>
  `;
});
document.addEventListener("DOMContentLoaded", () => {
  const movieList = document.getElementById("movieList");
  const listViewBtn = document.getElementById("listViewBtn");
  const gridViewBtn = document.getElementById("gridViewBtn");

  function renderMovies() {
    movieList.innerHTML = "";
    userFavoriteGrid.forEach((phim) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
          <div>
            <h2 style="color: white;">${phim.title}</h2>
            <p style="color: white;">${phim.description}</p>
            <small style="color: white;">${phim.release}</small>
            <hr>
            <span style="color: white;">Director: <a href="#" style="color: #3D78B4;">${phim.director}</a></span>
          </div>
        `;
      movieList.appendChild(listItem);
    });
  }

  listViewBtn.addEventListener("click", () => {
    movieList.classList.remove("grid-view");
    movieList.classList.add("list-view");
  });

  gridViewBtn.addEventListener("click", () => {
    movieList.classList.remove("list-view");
    movieList.classList.add("grid-view");
  });

  renderMovies();
});
