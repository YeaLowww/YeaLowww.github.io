// �������� ������
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// �������� ������, ����� ��������� ������ 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// ��������� ����� ��� ������� �� ������
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // ������� ���������
    });
});
