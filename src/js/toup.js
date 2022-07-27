window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.up');
    scroll.classList.toggle("activity", window.scrollY > 800)
})
function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
     })
 }