    
const container = document.querySelector(".banner .slider");
const controlItems = document.querySelectorAll(".control-item");

const WIDTH = document.querySelectorAll(".item")[0].clientWidth;
console.log(WIDTH)
controlItems.forEach(item => {
    item.addEventListener("click", (e) => {
        console.log(e);
        const active = document.querySelector(".active");
        active.classList.remove("active");
        e.target.classList.add("active");
        container.style.transform 
        = `translate(-${Number(e.target.attributes[0].value)*WIDTH}px)`;
    })
})
document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector(".container-collapse");
    const toggleBtn = document.querySelector(".list-bar");

    toggleBtn.addEventListener("click", function () {
        menu.classList.toggle("active-nav-collapse");
    });
});

