// 시계 함수
// function Clock(){
// 
//     var today = new Date();
// 
//     var hours = today.getHours();  // 시
//     var minutes = today.getMinutes(); // 분
//     var seconds = today.getSeconds(); // 초
//     var milliseconds = Math.floor(today.getMilliseconds()/10); // 밀리초
// 
//     document.getElementById('_hour').textContent = hours;
//     document.getElementById('_mm').textContent = minutes;
//     document.getElementById('_sec').textContent = seconds;
//     document.getElementById('_msec').textContent = milliseconds;
// }
// 
// // 시계 함수 호출
// function init() {
//     setInterval(Clock, 10);
// }
// init();


// 스톱워치

// mmsec 변수 지정 (직접 카운트 되는 변수)
var mmsec = 0;
// milliseconds 변수
var msec = 0;
// 초 변수
var sec = 0;
// 분 변수
var min = 0;
// 시 변수
var hour = 0;
// 기록 카운트
var RecordCount = 0; 

// ul 생성
var elment_ul = document.createElement('ul');
elment_ul.id = '_List';
document.getElementById('_Record_list').append(elment_ul);




// 스톱워치 함수
function Timer(){
    //0.0001 초 증가
    mmsec += 1;
    // milliseconds 0.00 지정
    msec = mmsec % 100;
    // 초 계산
    sec = Math.floor((mmsec % 6000)/100);
    // 분 계산
    min = Math.floor((mmsec % 360000)/6000);
    // 시 계산
    hour = Math.floor((mmsec % 21600000)/360000);
    // 00 분을 나타내기 위한 조건
    
    if(min < 10){
        min = '0' + min;
    }
    
    // 00 초를 나타내기 위한 조건
    if(sec < 10){
        sec = '0' + sec;
    }
    
    // 00 시간를 나타내기 위한 조건
    if(hour < 10){
        hour = '0' + hour;
    }

    document.getElementById('_mm').textContent = min;
    document.getElementById('_sec').textContent = sec;
    document.getElementById('_msec').textContent = msec;
    document.getElementById('_hr').textContent = hour;

}

// 기록 함수
function Record(){
    // 초기화 방지
    event.preventDefault();
    // li 생성
    var elment_li = document.createElement('li');
    document.getElementById('_List').append(elment_li);
    // li에 시간 기입
    elment_li.textContent = hour+' : '+min+' : '+sec+' : '+msec
    // 기록 10갸까지 진행
    RecordCount += 1;
    if(RecordCount >= 10){
        document.getElementById('_Record_btn').setAttribute('disabled', '');
    }
}


// 초기화 버튼
function resetButton(){
    document.getElementById('_form').reset();
}


function init() {
    setInterval(Timer, 10);
}
init();
