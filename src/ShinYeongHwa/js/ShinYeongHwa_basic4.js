// 틱택톡 게임

// 배열안에 배열을 넣는 것을 활용한다. = 이차원 배열
// var arryBox = [
//     [0,1,2],
//     [0,1,2],
//     [0,1,2],    
// ];

var line = []; // 줄 수 변수
var cell = []; // 셀 수 변수


var game = function (event){     
    var lineTarget = line.indexOf(event.target.parentNode);
    console.log('너의 줄수는 = ' + lineTarget);
     
 };


var cell = document.getElementsByTagName('td');
for (var i = 0; i < cell.length; i += 1){
    cell[i].addEventListener('click', game);
    
}
