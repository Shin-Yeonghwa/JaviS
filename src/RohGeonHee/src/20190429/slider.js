//변수 지정
var sliderWrapper = document.getElementsByClassName('container'),
    sliderContainer = document.getElementsByClassName('slider-container'),
    slides = document.getElementsByClassName('slide'),
    slideCount = slides.length,
    currenIndex = 0, // 처음 페이지 확인하는 변수
    topHeight = 0, //슬라이드 높이 지정하는 변수

    navPrev = document.getElementById('prev'),
    navNext = document.getElementById('next');

    // console.log(slideCount);

//슬라이드 높이 확인하여 부모의 높이로 지정하기

function calculateTallestSlide(){

    for(var i = 0;i < slideCount;i++){
        if(slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }

    }
    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height = topHeight + 'px';
}

calculateTallestSlide();

//슬라이드가 있으면 가로로 배열하기

    for(var i = 0; i < slideCount; i++){
        slides[i].style.left = i * 100 + '%';
    }

//슬라이드 이동 함수
function goToSlide(idx){
    sliderContainer[0].style.left = idx * -100 + '%';
    currenIndex = idx;
}

goToSlide(1);

//버튼기능 업데이트 함수

//버틀 클릭하면 슬라이드 이동시키기
