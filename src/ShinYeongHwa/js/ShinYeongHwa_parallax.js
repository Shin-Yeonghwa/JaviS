var log = document.getElementById('log');
var clientHeight = document.body.clientHeight;
console.log(clientHeight);
window.onscroll = function scrollPosition(){
    var scrollY = window.scrollY;
    log.textContent = "Scroll position : " + scrollY;
}
