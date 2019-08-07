function scrollMove() {

    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; //현재 스크롤 위치값을 저장
    var lastScroll = 0; //마지막 스크롤 위치값을 저장하기 위한 변수
    var BoxHeight = window.innerHeight; //각 div의 크기를 저장

    //첫번째
    if (currentScroll > 0 && lastScroll <= currentScroll){ //스크롤 위치가 0보다 크고, 현재 위치값보다 작거나 같을 때
        lastScroll = currentScroll;
        title.classList.remove('move_up'); //스크롤 내리면 move_up 삭제
        title.classList.add('move_down'); //스크롤 내리면 move_down 추가
    } else {
        lastScroll = currentScroll;
        title.classList.remove('move_down'); //스크롤 올리면 move_down 삭제
        title.classList.add('move_up'); //스크롤을 올리면 move_up 추가, 3초 뒤 class 삭제
        setTimeout(function() {
            title.classList.remove('move_up');
        },3000);
    }
    
    //두번째
    var boxRotation = document.getElementById("square");
    var boxRotation2 = document.getElementById("small_square");
    
    if(currentScroll > BoxHeight && currentScroll < BoxHeight * 2) {
        lastScroll = currentScroll;
        boxRotation.classList.add('rotation');
        boxRotation2.classList.add('rotation');
    } else {
        lastScroll = currentScroll;
        boxRotation.classList.remove('rotation');
        boxRotation2.classList.remove('rotation');
    }
    
    //세번째
    var boxDown = document.getElementById("circle");    
    
    if(currentScroll > BoxHeight * 2 && currentScroll < BoxHeight * 3) {
        lastScroll = currentScroll;

        var boxPosition = 10; 

        var id = setInterval(frame, 5);
        function frame() {
            if(boxPosition == BoxHeight) {
                clearInterval(id);
            } else {
                boxPosition++;
                boxDown.style.top = boxPosition + 'px';
                boxDown.style.left = boxPosition + 'px';
            }
        }
    } else {
        lastScroll = currentScroll;
        boxDown.style.top = 10 + 'px';
        boxDown.style.left = 10 + 'px';
    }

    //네비게이션
    nav();
};


//네비게이션 적용
function nav() {
    var windowScroll = document.documentElement.scrollTop || document.body.scrollTop; //body의 스크롤 위치값을 실시간으로 계산   
    var navHeight = window.innerHeight; //각 div 높이값을 계산

    var element = document.getElementById("nav");

    for(var i = 0; i < 5; i++) {
        if(windowScroll >= 0 && windowScroll <= navHeight * 0.5) { //첫 배경
            element.children[i].classList.remove('on');   
            element.children[0].classList.add('on');
        }
        else if(windowScroll > navHeight * 0.5 && windowScroll <= navHeight * 1.5) { //두번째 배경
            element.children[i].classList.remove('on');   
            element.children[1].classList.add('on');    
        }
        else if(windowScroll > navHeight * 1.5 && windowScroll <= navHeight * 2.5) { //세번째 배경
            element.children[i].classList.remove('on');   
            element.children[2].classList.add('on');
        }
        else if(windowScroll > navHeight * 2.5 && windowScroll <= navHeight * 3.5) { //네번째 배경
            element.children[i].classList.remove('on');   
            element.children[3].classList.add('on');
        }
        else { //다섯번째 배경
            element.children[i].classList.remove('on');   
            element.children[4].classList.add('on');
        } 
    }
}