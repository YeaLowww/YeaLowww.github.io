// Получаем кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показать кнопку, когда прокрутка больше 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Прокрутка вверх при нажатии на кнопку
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавная прокрутка
    });
});
