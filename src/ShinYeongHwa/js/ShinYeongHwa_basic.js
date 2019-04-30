//끝말 잊


var body = document.body;

var word = document.createElement('div');
word.textContent = '신영화';
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
    if(word.textContent[word.textContent.length - 1] === inputText.value[0]){
		// 맞앗을때
        alert('딩동댕!!');
        word.textContent = inputText.value;
        inputText.value = '';
        inputText.focus();
	}else{
        alert('땡!!');
        inputText.value = '';
        inputText.focus();
    }
}); 




// // 첫 제시어
// var word = '신영화';
// 
// // 내가 입력하는 글
// 
// for (var word = '신영화'; true;) {
// 	var answer = prompt('첫 제시어 : ' + word + '\n' +'끝말잊기 해주세요');
// 	if(word[word.length - 1] === answer[0]){
// 		// 맞앗을때
// 		word = answer;
// 	}else{
// 		// 틀렸을대
// 		alert('땡!');
// 	}
// };
