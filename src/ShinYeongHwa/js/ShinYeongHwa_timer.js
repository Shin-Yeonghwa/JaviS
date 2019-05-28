// 스톱워치


function Clock(){
    
    var today = new Date();
    
    var hours = today.getHours();  // 시
    var minutes = today.getMinutes(); // 분
    var seconds = today.getSeconds(); // 초
    var milliseconds = Math.floor(today.getMilliseconds()/10); // 밀리초
    
    document.getElementById('_hour').textContent = hours;
    document.getElementById('_mm').textContent = minutes;
    document.getElementById('_sec').textContent = seconds;
    document.getElementById('_msec').textContent = milliseconds;
}

function init() {
    Clock();
    // 최초에 함수를 한번 실행시켜주고 
    setInterval(Clock, 10);
}



init();
