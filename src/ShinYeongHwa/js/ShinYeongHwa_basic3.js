// 구구단 게임


// 구구단 랜덤 첫째자리
var num1 = Math.ceil(Math.random() * 9);
// 구구단 랜덤 두째자리
var num2 = Math.ceil(Math.random() * 9);
// 구구단 결과
var result = num1 * num2;


var body = document.body;
var word = document.createElement('div');
word.textContent = String(num1) + ' X ' + String(num2) + ' ????';
document.body.append(word);


var form = document.createElement('form');
document.body.append(form);


var inputText = document.createElement('input');
form.append(inputText);

var button = document.createElement('button');
button.textContent = '입력';
form.append(button);


form.addEventListener('submit',function(event){
    event.preventDefault();
    
    if(result === Number(inputText.value)){
		alert('오!! 정답');
        num1 = Math.ceil(Math.random() * 9);
        // 구구단 랜덤 두째자리
        num2 = Math.ceil(Math.random() * 9);
        // 구구단 결과
        result = num1 * num2;
        
        word.textContent = String(num1) + ' X ' + String(num2) + ' ????';
        inputText.value = '';
        inputText.focus();
        
	} else{
		alert('땡!!');
		inputText.value = '';
	}
}); 

// 
// // 임의의 변수
// var a = true;
// 
// // 반복 실행문
// while (a) {
// 	// 사용자 입력 
// 	var answer = prompt(String(num1) + 'X' + String(num2));
// 
// 	if(result === Number(answer)){
// 		alert('오!! 정답');
// 	} else{
// 		alert('땡!!');
// 		a = true;
// 	}
// }
