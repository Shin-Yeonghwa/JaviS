// 주사위 게임

// ul 생성
var elment_ul = document.createElement('ul');
elment_ul.id = '_cellList';
document.body.append(elment_ul);

// 칸 엘리먼트 생성 - li
for(var i = 1; i < 36; i += 1){
    var element_li = document.createElement('li'); // li 생성
    element_li.textContent = i;
    elment_ul.append(element_li);
}


// 변수 지정
var diceNum; // 첫번째 주사위
var diceNum2; // 두번째 주사위
var diceSum = 0; // 주사위 총합
var gameButton = document.getElementById('_gameButton'); //게임시작 버튼
var diceCount = 0;


// 말 표시 해제 함수 - 'on' class 제거 
function cellClear(){
    var clear = document.querySelectorAll('li.on');
    for (var i = 0; i < clear.length; i += 1){
        clear[i].classList.remove('on');
    } 
}

// game 함수
function diceGame(){
    event.preventDefault();
    elment_ul.classList.add('_start');
    
    // 주사위 첫번째 랜덤
    diceNum = Math.ceil(Math.random() * 6);
    document.getElementById('_diceNum').textContent = diceNum;
    
    // 주사위 두번째
    diceNum2 = Math.ceil(Math.random() * 6);
    document.getElementById('_diceNum2').textContent = diceNum2;

    // 주사위 합
    diceSum = diceSum + diceNum + diceNum2;
    document.getElementById('_diceSum').textContent = diceSum;

    // 주사위 카운트
    diceCount += 1;
    document.getElementById('_diceCount').textContent = diceCount;

    // 주사위 합이 35가 넘어서 이길경우
    if (diceSum > 35){
        gameButton.setAttribute('disabled', '');        
        // 결과 창
        var elment_p = document.createElement('p');
        document.body.append(elment_p);
        elment_p.textContent = '너가 Win!!!!!!!';
        cellClear();
    }else{
        cellClear();
        var targetCell = document.querySelectorAll('li')[diceSum-1];
        targetCell.classList.add('on');
        
    }
    
    if(diceCount >= 5 && diceSum < 35 ){
        gameButton.setAttribute('disabled', '');
        var elment_p2 = document.createElement('p');
        document.body.append(elment_p2);
        elment_p2.textContent = 'GameOver';       
    }

}




// 주사위 돌리기 호출
gameButton.addEventListener('click', diceGame);
