/**
 * 각 바둑 라인(div) 클릭이벤트를 넣는다
 * 검은색 바둑 먼저 시작한다.
 * 한번 클릭시 다른색 바둑으로 변경된다.
 * 클릭한 자리에 오목이 그려진다(해당 div에 black/white 클래스 적용)
 * 클릭시 상하 좌우 바둑 체크한다.
 * 체크시 5개 바둑돌이 잡히면 해당 바둑돌 색 승리
 * **/

 const omokBoard = document.querySelector('.board');
 const omokBoardCell = Array.from(document.querySelectorAll('.col'));

 let currentStoneState = 'black';
 let placedBlackStone = [];
 let placedWhiteStone = [];

/* 바둑 라인 div에 클릭이벤트 적용 */
omokBoard.addEventListener("click", onClickBoardCell);

/* 바둑 라인 div 클릭 이벤트 함수 */
function onClickBoardCell(event){

    if(event.target.matches("div.col")){
        //클릭한 자리에 오목 그려짐 black/white
        event.target.classList.add(currentStoneState);
        let stoneIndex = omokBoardCell.indexOf(event.target);

        if(currentStoneState == 'black'){
            placedBlackStone.push(stoneIndex);
            //checkAllStonePosition
            checkAllStonePosition(placedBlackStone);
        }else{
            placedWhiteStone.push(stoneIndex);
            //checkAllStonePosition
            checkAllStonePosition(placedWhiteStone);
        }
        console.log(currentStoneState,stoneIndex)

        //바둑돌 다른색으로 변경
        currentStoneState = (currentStoneState == 'black') ? 'white' : 'black';
    }
}

function checkAllStonePosition(currentStronArray){
    // currentStronArray.sort(function(a,b){return a-b;});

    for(let i = 0, length  = currentStronArray.length; i < length; i++){
        let loopCurrentIndex = currentStronArray[i];
        if(currentStronArray.includes(loopCurrentIndex + 1) &&
            currentStronArray.includes(loopCurrentIndex + 2) &&
            currentStronArray.includes(loopCurrentIndex + 3) &&
            currentStronArray.includes(loopCurrentIndex + 4))
            {
                alert(currentStoneState + '승 + 1');
                omokBoard.removeEventListener("click", onClickBoardCell);
                return;
            }

        if(currentStronArray.includes(loopCurrentIndex + 15) &&
            currentStronArray.includes(loopCurrentIndex + 30) &&
            currentStronArray.includes(loopCurrentIndex + 45) &&
            currentStronArray.includes(loopCurrentIndex + 60))
            {
                alert(currentStoneState+'승 +15');
                omokBoard.removeEventListener("click", onClickBoardCell);
                return;
            }

        if(currentStronArray.includes(loopCurrentIndex + 16) &&
            currentStronArray.includes(loopCurrentIndex + 32) &&
            currentStronArray.includes(loopCurrentIndex + 48) &&
            currentStronArray.includes(loopCurrentIndex + 64))
            {
                alert(currentStoneState+'승 +16');
                omokBoard.removeEventListener("click", onClickBoardCell);
                return;
            }

        if(currentStronArray.includes(loopCurrentIndex + 14) &&
            currentStronArray.includes(loopCurrentIndex + 28) &&
            currentStronArray.includes(loopCurrentIndex + 42) &&
            currentStronArray.includes(loopCurrentIndex + 56))
            {
                alert(currentStoneState+'승 +14');
                omokBoard.removeEventListener("click", onClickBoardCell);
                return;
            }

    }
}