const container = document.querySelector(".banner .slider");
const controlItems = document.querySelectorAll(".control-item");
/*có tối đa 3 nút controlItems*/
/*click 1/3 nút sẽ phát động sự kiên*/
controlItems.forEach(item => {
    item.addEventListener("click", (e) => {
        /*Đây là một arrow function được gọi khi sự kiện "click", (e) là đối tượng sự kiện (MouseEvent).*/
        /*đo kích thước chiều rộng của từng slider*/
        const WIDTH = document.querySelectorAll(".item")[0].clientWidth;
        console.log(e);
        /*active có tác dụng nổi bật cho 1/3 nút trong cùng 1 lúc*/
        const active = document.querySelector(".active");
        active.classList.remove("active");
        e.target.classList.add("active");
        /*dịch chuyển các slider với chính xác kích thước 1 slider*/
        container.style.transform
            = `translate(-${Number(e.target.attributes[0].value) * WIDTH}px)`;
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
window.addEventListener("load", revealOnScroll);