/* này là file xử lí logic chung, ko được sửa, nhớ import vào các pages của mình */
const movies = [];
const blogs = [];
const minActiveHeader = 400;

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const activeNavBtn = document.querySelector(".nav-only-md .list-bar")

  activeNavBtn.addEventListener("click", activeItemCollapse);

  document.addEventListener("scroll", () => setTinyHeader(window.scrollY, window.innerWidth, header));

  window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    console.log("Window Width:", currentWidth);
  });
});
const setTinyHeader = (yAxis, wScreen, element) => {
  // console.log(yAxis + " " + wScreen);

  if (yAxis > minActiveHeader && wScreen > 1240)
    element.classList.add("tiny");
  else
    element.classList.remove("tiny");
}
const activeItemCollapse = () => {
  const containerCollapse = document.querySelector(".container-collapse")
  containerCollapse.classList.toggle("active-nav-collapse");

}