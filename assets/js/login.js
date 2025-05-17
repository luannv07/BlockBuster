function revealOnScroll() {
  // tạo đối tượng chứa các phần tử class/ ID tên: animated-element
  const animatedElements = document.querySelectorAll(".animated-element");
  //vòng lặp từ 0-> n phần tử trong animatedElements
  for (let i = 0; i < animatedElements.length; i++) {
    //tạo đối tượng chứa kích thước 100% của trang web
    const windowHeight = window.innerHeight;
    // tạo đối tượng đo kích thước các phần tử thuộc class/ ID: animated-element
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
/* hàm thay đổi mật khẩu mã hóa/ ko mã hóa*/
function change() {
  const passwordInput = document.querySelector('.password');
  const toggleIcon = document.querySelector('.on_off');
  // nếu icon nhấn vào đã bị mã hóa, chuyển sang "text" và ngược lại
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "🔓";
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "🔐";
  }
}