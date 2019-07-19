var log = document.getElementById('log');

window.onscroll = function scrollPosition(){
    var scrollY = window.pageYOffset;
    log.textContent = "Scroll position : " + scrollY;
}
