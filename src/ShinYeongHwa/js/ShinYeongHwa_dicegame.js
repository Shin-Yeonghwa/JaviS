// 주사위 게임

// ul 생성
var elment_ul = document.createElement('ul');
elment_ul.id = '_cellList';
document.getElementById('_form').append(elment_ul);

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
var diceCount = 0; // 주사위 돌리는 카운트
var tricks; //지뢰 변수 지정

// 지뢰 지정 함수
function randomTrick(){
    tricks = []; // 빈 배열 - 여기에 random한 세가지 숫자가 들어감
    var pickNumbers = 3; // 지뢰 셀 갯수
    for(i = 0; i < pickNumbers ; i += 1){
        tricks[i] = Math.floor(Math.random() * 30) + 6;
        document.querySelectorAll('li')[tricks[i]-1].classList.add('trick');
        console.log(tricks);
        // 중복 여부 체크
        for(f = 0; f < i; f += 1){
            // 첫번째 수와 세번째 수의 중복도 막기위해 tricks[i-3] == tricks[f]를 추가함.
            if(tricks[i] == tricks[f] || tricks[i-3] == tricks[f]){
                i -= 1; //중복 된다면 i이전 번째에 다시 값이 들어가도록 함
                break; // 종료 문구
            }
        }
    }
}
// 지뢰 지정 함수 호출
randomTrick();

// 트릭 내용
function cellTrick(){
    if(diceSum === tricks[0]){
        diceSum = diceSum -3;
        var trick_p = document.createElement('p');
        document.getElementById('_form').append(trick_p);
        trick_p.textContent = '지뢰 당첨!!! 뒤로 3칸 이동';
    }else if(diceSum === tricks[1]){
        diceSum = diceSum + 3;
        var trick_p = document.createElement('p');
        document.getElementById('_form').append(trick_p);
        trick_p.textContent = '행운 당첨!!! 앞으로 3칸 이동';
    }else if(diceSum === tricks[2]){
        diceSum = diceSum -3;
        var trick_p = document.createElement('p');
        document.getElementById('_form').append(trick_p);
        trick_p.textContent = '지뢰 당첨!!! 뒤로 3칸 이동';
    }
}

// 말 표시 해제 함수 - 'on' class 제거 
function cellClear(){
    var clear = document.querySelectorAll('li.on');
    for (var i = 0; i < clear.length; i += 1){
        clear[i].classList.remove('on');
    } 
}


// 초기화 버튼
function resetButton(){
    document.getElementById('_form').reset();
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

    // 주사위 합이 35가 넘어서 게임 종료 될경우 (게임 이김)
    if (diceSum > 35){
        gameButton.setAttribute('disabled', '');        
        // 결과 창
        var elment_p = document.createElement('p');
        document.getElementById('_form').append(elment_p);
        elment_p.textContent = '너가 Win!!!!!!!';
        cellClear();
    // 주사위 합이 35미만이라서 게임중일때
    }else{  
        cellClear();
        cellTrick(); // trick 추가 인수 = 셀 Number
        var targetCell = document.querySelectorAll('li')[diceSum-1];
        targetCell.classList.add('on');
        
    }
    
    // 주사위 던지는 갯수 실패와 합이 35미만일 경우
    if(diceCount >= 5 && diceSum < 35 ){
        gameButton.setAttribute('disabled', '');
        var elment_p2 = document.createElement('p');
        document.getElementById('_form').append(elment_p2);
        elment_p2.textContent = 'GameOver';       
    }

}

// 주사위 돌리기 호출
gameButton.addEventListener('click', diceGame);
