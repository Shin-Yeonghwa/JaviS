/*
    1. 주어진 오목판에 검은색 돌과 흰색 돌을 번갈아 가며 둘 수 있어야 한다.
    2. 주어진 오목판에 마우스를 클릭하면 한 색의 돌이 놓인다.
    3. 가로로 같은 색의 돌이 5개가 연속되면 게임이 종료되면서 이긴 팀을 말해준다.
    4. 세로 및 각 대각선으로 같은 색의 돌이 5개가 연속되면 게임이 종료되면서 이긴 팀을 말해준다.
*/

/* 전역변수 */
let checkerboardUser = 'black';
const blackClass = document.querySelector('.black');
const checkerboardGrid = document.querySelectorAll('.col');

const blackArrayNumber = [];
const whiteArrayNumber = [];

/* 승리 조건 데이터 */
const victoryConditionData = {
    leftRightVictory : [1, 2, 3, 4],
    upDownVictory : [15, 30, 45, 60],
    leftDiagonal : [14, 28, 42, 56],
    rightDiagonal : [16, 32, 48, 64]
}

checkerboardGrid.forEach(function (el, index) {
    el.addEventListener('click', e => {
        if (checkerboardUser === 'black'){
            el.classList.add('black');
            checkerboardUser = 'white';
            blackArrayNumber.push(index);
            console.log(blackArrayNumber);
            victoryConditionFormula();
            return;
        }

        if (checkerboardUser === 'white'){
            el.classList.add('white');
            checkerboardUser = 'black';
            whiteArrayNumber.push(index);
            console.log(whiteArrayNumber);
            victoryConditionFormula();
            return;
        }
    });      
});

/* user 데이터에 따라 돌을 두면 클래스 추가되고 해당 index넘버가 빈 배열로 추가되는 로직 */
function clickBoardLogig() {

}


function victoryConditionFormula() {
    for(let i = 0; i < blackArrayNumber.length; i++){
        if (blackArrayNumber.includes(blackArrayNumber[i] + 1) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 2) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 3) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 4))
        return alert('좌우 검정 승리!');

        if (blackArrayNumber.includes(blackArrayNumber[i] + 15) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 30) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 45) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 60))
        return alert('상하 검정 승리!');

        if (blackArrayNumber.includes(blackArrayNumber[i] + 14) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 28) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 42) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 56))
        return alert('왼쪽 대각선 검정 승리!');

        if (blackArrayNumber.includes(blackArrayNumber[i] + 16) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 32) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 48) &&
            blackArrayNumber.includes(blackArrayNumber[i] + 64))
        return alert('오른쪽 대각선 검정 승리!');
    }
};

function duplicateStoningFormulaCheck() {
    if (checkerboardUser === 'black' || checkerboardUser === 'white') return alert('놓을수 없습니다.');
    return;
};
