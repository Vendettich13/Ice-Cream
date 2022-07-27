window.addEventListener('scroll', function () {
    var scroll = document.querySelector('.up');
    scroll.classList.toggle("activity", window.scrollY > 500)
})
function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
     })
}
   $(document).ready(function(){
    $("#toup").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});