    
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
function revealOnScroll() {
    // tạo đối tượng chứa các phần tử class/ ID tên: animated-element
    const animatedElements = document.querySelectorAll(".animated-element");
    //vòng lặp từ 0-> n phần tử trong animatedElements
    for (let i = 0; i < animatedElements.length; i++) {
        //tạo đối tượng chứa kích thước 100% của trang web
        const windowHeight = window.innerHeight;
        // tạo đối tượng đo kích thước của từng phần tử class/ ID: animated-element
        const elementTop = animatedElements[i].getBoundingClientRect().top;
        const elementVisible = 70; // Di chuột khoảng cách 70px để xuất hiện/ biến mất
        //nếu scroll vào kích thước của elementTop
        //tạo/ xóa class: appear bên trong thẻ class/ ID: animated-element trong HTML
        //class: appear là đối tượng thực hiện animation
        if (elementTop < windowHeight - elementVisible) {
            animatedElements[i].classList.add("appear");
        } else {
            animatedElements[i].classList.remove("appear");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);

