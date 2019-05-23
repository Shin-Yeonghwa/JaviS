// 야구 게임


var body = document.body;

// 랜덤 야구 숫자 생성  함수 생성
var num;
var arryNum;
function getNum(){
    num = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 1 ~ 9 까지 숫자 배열
    arryNum = []; // var num에서 뽑은 임의의 숫자 배열 
    for (var i = 0; i < 4 ; i += 1){
        var resultNum = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        arryNum.push(resultNum);        
    }
}

getNum();
console.log(arryNum);

// 결과
var result = document.createElement('h1');
body.append(result);

// form 엘리먼트 생성
var form = document.createElement('form');
document.body.append(form);

// 숫자 입력 input 엘리먼트 생성
var inputText = document.createElement('input');
inputText.type = 'text'
inputText.maxLength = 4;
form.append(inputText);

// 버튼 엘리먼트 생성
var button = document.createElement('button');
button.textContent = '입력';
form.append(button);

// 틀린횟수 체크 변수
var errorCount = 0;


// 콜백 함수
form.addEventListener('submit', function setNumber(event){
    event.preventDefault();
    var answer = inputText.value;
    
    if(answer === arryNum.join('')){  // 정답을경우
        result.textContent = '오!!홈런!! 정답!!!';
        inputText.value = '';
        inputText.focus();
        getNum();
        errorCount = 0;
    }else{ 
        var answerArry = answer.split('');
        var strike = 0;
        var ball = 0;
        errorCount += 1;
        
        // 틀린획수 체크
        if(errorCount > 9){
            result.textContent = '넌 기회를 다 썼어!! 답은..'+ arryNum +'임요';
            inputText.value = '';
            inputText.focus();
            getNum();
        }else{
            for(var i = 0; i <3; i += 1){
                if(Number(answerArry[i]) === arryNum[i]){ //같은 자리인지 확인
                    strike += 1; 
                }else if(arryNum.indexOf(Number(answerArry[i])) > -1){  //같은 자리는 아니지만, 숫자가 있는지 확인
                    ball += 1;
                }
            }
            result.textContent = strike + '스트라이크!!   ' + ball + '볼!!';
            inputText.value = '';
            inputText.focus();
            
        };
    }
});
