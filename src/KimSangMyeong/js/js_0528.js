
var time = 0; //시간함수
var running = 0; //스탑워치 동작관련 함수
var clicknum = 0; //10번동작 기록 함수

function plusFun() {
    var plusUl = document.createElement('ul');
    plusUl.innerHTML =  "<li>"+output.innerHTML + "</li>";
    document.getElementById('result').appendChild(plusUl);
}

//START 함수
function start(){
    clicknum++;
    if(clicknum > 10){
        alert('기록끝');
        preventDefault();
    }
    if(running == 0){
        running = 1;
        increment();
    }
}

//stop 동작함수
function stop(){
    if(running != 0){
        running = 0;
    }
    plusFun();
    console.log(output.innerHTML);
}

function reset(){
    running = 0;
    clicknum= 0;
    document.getElementById('output').innerHTML = "00:00:00:00";
    $('#result').children('ul').remove();
}

function increment(){
    if(running == 1){
        setTimeout(function(){
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10%60);
            var hours = Math.floor(time/10/60/60);
            var tenth = time%10;
            if(mins < 10){
                mins = "0" + mins;
            }
            if(secs < 10){
                secs = "0" + secs;
            }
            if(hours < 10){
                hours = "0" + hours;
            }
            document.getElementById('output').innerHTML = hours + ":" + mins + ":" + secs + ":" + tenth
            + "0";
            increment();
        },10);

    }
}
