
var scroll_y = window.scrollY;

document.getElementById('box').style.height = window.innerHeight + 'px';
document.body.style.paddingTop = window.innerHeight * 2 + 'px';

function boxReSize() {
    document.getElementById('box').style.height = window.innerHeight + 'px';
    document.body.style.paddingTop = window.innerHeight * 2 + 'px';
}

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();


// handle event
window.addEventListener("optimizedResize", function() {
    boxReSize();
});

//스크롤 이벤트

var last_known_scroll_position = 0;
var ticking = false;

function scrollEvent() {
  document.getElementById('box').style.marginTop = - last_known_scroll_position + 'px';

  var boxOpacity = last_known_scroll_position / 250;

  if(boxOpacity <= 1) {
    document.getElementById('box3').style.opacity = boxOpacity;
  } else {
    document.getElementById('box3').style.opacity = 1;
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      scrollEvent(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


// 화면에서 변화가 발생할 때 개발자는 브라우저에서 정확한 시간(프레임 시작 시)에 작업을 수행해야 매끄러운 움직임을 수행할 수 있습니다.
// 이 메소드는 실제 화면이 갱신되어 표시되는 주기에 따라 함수를 호출해주기 때문에 자바스크립트가 프레임 시작 시 실행되도록 보장합니다.
// 보통 1초에 60회 정도 실행이 되지만 대부분의 브라우저는 W3C 권장사항에 따라 디스플레이 주사율과 일치하도록 실행됩니다.
// setTimeout(), setInterval()은 보이지 않은 곳에서도 수행되지만, requestAnimationFrame()는 현재 창에 표시 되지 않으면 애니메이션을 중지하여 배터리 수명과 성능향상에 도움이 됩니다
// 즉, requestAnimationFrame()을 사용하면 브라우저가 리소스 사용을 더욱 최적화하고 애니메이션을 더욱 부드럽게 만들 수 있습니다.