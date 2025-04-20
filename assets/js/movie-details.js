const randomElementOfArray = arr => arr[Math.floor(Math.random() * arr.length)];

document.addEventListener("DOMContentLoaded", () => {
  const underlineNav = document.querySelector(".active-btn-movie-details-details");
  const movieDetailsNavAll = [...document.querySelectorAll(".movie-details-details-nav li button")];
  underlineNav.style.width = `${movieDetailsNavAll[0].clientWidth}px`;

  const tabDetailsContent = document.querySelectorAll(".movie-details-details-content>li");

  movieDetailsNavAll
    .forEach(item => item
      .addEventListener("click", (e) => toggleMoveUnderline(e, underlineNav, movieDetailsNavAll, tabDetailsContent)));
  const movieDetailsTab = document.querySelectorAll(".movie-details-details-content-page");
  // console.log(movieDetailsTab[0].children[0].children);
  // console.log(movieDetailsTab[1].children[0].children);
  // console.log(movieDetailsTab[2].children[0].children);
  const animationsName = ["showAndMoveX", "showAndMoveY", "showAndMoveXR", "showAndMoveYR"];
  console.log(randomElementOfArray(animationsName));

  movieDetailsTab.forEach(element => {
    let duration = 0.25;
    [...element.children].forEach(item => {
      [...item.children].forEach(subItem => {
        subItem.style.animation = `${randomElementOfArray(animationsName)} ${duration}s ease-out`;
        duration *= 1.1;
      })
    })
  })
});

const toggleMoveUnderline = (e, underlineNav, movieDetailsNavAll, tabDetailsContent) => {
  const GAP = 20;
  const currentIndex = movieDetailsNavAll.indexOf(e.target);
  document.querySelector(".active-tab-movie-details").classList.remove("active-tab-movie-details");
  tabDetailsContent[currentIndex].classList.add("active-tab-movie-details");
  underlineNav.style.width = `${e.target.clientWidth}px`;

  let offset = 0;
  for (let i = 0; i < currentIndex; i++) {
    offset += movieDetailsNavAll[i].clientWidth + GAP;
  }
  underlineNav.style.transform = `translateX(${offset}px)`;

  document.querySelector(".movie-details-details-nav li button.yellow-color")
    .classList.remove("yellow-color");
  e.target.classList.add("yellow-color");
}

const addAnimationForAllSubItem = (listItem) => {

}