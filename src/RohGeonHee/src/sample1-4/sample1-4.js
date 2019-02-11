var num = prompt('구구단 몇단을 알아볼까요?')

if (num === '' || isNaN(num)) {
  alert('올바른 값을 입력하세요'); // 숫자만 들어갈 수 있도록 해주는 소스

  } else if (num < 1 || num > 10){ // 1단 ~ 9단을 해주는 소스
    alert('1~9 까지 입력하세요');
  } else{
    for (var i = 1; i < 10; i++){
      document.write(num + '*' + i + '=' + num * i + '<br>');
    }
  }
