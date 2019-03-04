


function Array(){
	function isArray(){

	}
}
Array.prototype.sort = function(){

}
var arr = new Array()
arr.sort();

var country = ["korea", "USA", "Japan", "China"];
document.write("before = " + country + "<br>");
//Array : 내장객체가 가지고 있는 메소드. 메소드란 : 함수(=메소드)+변수(=프로퍼티) => 객체

country.sort(function (left, right) {
    var left2 = left.toLowerCase();//string->소문자로 변환.toLowerCase() : String이 갖고 있는 메소드.
    var right2 = right.toLowerCase();
    if (left2 < right2) return -1;
    if (left2 > right2) return 1;//교체.알파벳 오름차순으로 정렬.
    return 0;
});
country.sort();

//country.sort();
document.write("after = " + country + "<br>");


//2.5 순회 메소드
var score = [82, 96, 54, 76, 9, 100, 69, 88];
var sum = 0;
//length : 프로퍼티,속성.
for (var i =0; i < score.length; i++) {
    sum += score[i];
}
document.write("sum  = " + sum + "<br>");

sum = 0;
for(var i in score){
    sum += score[i];
}
document.write("sum  = " + sum + "<br>");

sum = 0;
score.forEach(function(value) {
    sum += value;
});
sum = 0;
for (var value of score) {
  sum += value;
}

document.write("sum  = " + sum + "<br>");

/*
for in문은 배열의 첨자를 순회하는데 비해 forEach 메소드는 배열의 요소값을 직접 읽어준다는 점이 다르다.

forEach 메소드는 배열을 순회하며 요소를 읽기만 할 뿐 변경하지는 않는다.
이에 비해 map 메소드는 기존의 배열로부터 새로운 배열을 만든다. map의 인수로 전달되는 함수는 원본 배열의 요소 값을 받아 새로운 값을 만들어 리턴하며 이 리턴값을 요소로 가지는 새로운 배열이 만들어진다.
*/


var score = [82, 96, 54, 76, 9, 100, 69, 88];//score2 = [164, 192, 108, 152, 18, 200, 132, 176]
var score2 = score.map(function(value) {
    return value * 2;
});
document.write("score2  = " + score2 + "<br>");


//map은 새로운 배열을 만들 뿐 원본 배열을 건드리지는 않는다.

//filter 메소드는 조건에 맞는 요소만 골라 새로운 부분 배열을 만든다. 사용 형식은 map과 비슷하되 조건에 따라 진위형을 리턴한다는 점이 다르다.

var score = [82, 96, 54, 76, 9, 100, 69, 88];
var score2 = score.filter(function(value) {//[82, 96, 100, 88]
    return value >= 80;
});
document.write("score2  = " + score2 + "<br>");




/*
1. 함수의 형식
1.1 함수의 정의
function 함수명(인수목록){//인자, 인수, 파라미터.
본체;
}
*/


//함수 호출시, 함수명(인수목록);

function add(a, b) {
 return a + b; //
}

document.write("2 + 3 = " + add(2, 3) + "<br>");
document.write("java + script = " + add("java", "script") + "<br>");

/*
1.2 인수
function add(a,b){
return a+b;
}
add() 함수의 a,b는 형식인수.

var result = add(2,3);
외부에서 add()함수 호출시 파라미터 2,3 을 인자로 주면 형식인수로 순서대로 대입되어 함수 본체에서 사용된다.
즉, a=2, b=3이 복사된다.

인수의 타입이나 개수에 제약이 없다.
실인수가 남으면 무시되고 모자라면 undefined인 상태가 된다.
add(2,3); //5
add(2,3,4); //5
add(2); //NaN

인수가 전달되지 않았을때 디폴트값을 설정하고 싶다면, ecma6 : (b = 1)
fuction add(a,b=1){
	return a+b;
}
add(10);

function sum(n){
    if(n==undefined)
        n = 100;
}

sum();


자바스크립트의 함수는 명시적인 형식 인수외에 암시적으로 arguments라는 인수의 배열을 전달받는다.

arguments는 호출원에서 전달한 모든 인수의 목록을 가지는 일종의 배열이다. length속성으로 실인수의 개수를 알 수
있으며 첨자로 각 실인수를 읽는다.
*/

function total() {
    var s = 0;
    for (var i = 0; i < arguments.length; i++) {
        s += arguments[i];
    }
    return s;
}
document.write(total(2, 5, 3) + "<br>");
document.write(total(1, 5, 8, 8, 12, 14) + "<br>");


//for/in 문을 활용하면 배열 전체를 더 쉽게 순회할 수 있다.


for(var i in arguments){
	arguments[i]
}

/*
1.3 call by value / call by reference
*/

function byvalue(a) {//값이 복사.
    a = 9999;
}
function byref(a) {//주소값이 복사.
    a[0] = 9999;
}

var int = 1000;//기본형.
var ar = [1000, 2000, 3000];

document.write("int = " + int + ", ar[0] = " + ar[0] + "<br>");
byvalue(int);
byref(ar);
document.write("int = " + int + ", ar[0] = " + ar[0] + "<br>");

var v1 = 100;
var v2 = [10,20,30];
function change1(a){//a=100
	a = 200;
}
function change2(b){
	b[0] = 50;
}

console.log(v1);
console.log(v2[0]);

change1(v1);
change2(v2);

console.log(v1);
console.log(v2[0]);


/*
기본자료형 데이터를 함수 인자로 넘기면 값이 복사되고, 객체형의 데이터를 함수 인자로 넘기면 주소값이 넘어간다.
*/

/*
1.4 리턴값

return 값;
return;

함수에 return이 없는데 받으려고 하거나 return; 으로 수행하면 받는 쪽에서는 undefined값이 할당된다.
*/


function sum(n) {
    if (n < 0) return;
    var s = 0;
    for (var i = 0; i <= n; i++) {
        s += i;
    }
    return s;
}
document.write("1~100 = " + sum(100) + "<br>");
document.write("1~-5 = " + sum(-5) + "<br>");


/*
2. 함수고급

2.1 내부함수

다른 함수 안에 정의되는 함수를 내부 함수 또는 중첩함수라고 한다. 지역 변수의 개념에 대응되는
지역 함수인 셈이다.

함수가 동작에 필요한 모든 기능을 내부에 자체적으로 포함하는 것이다.
*/

function sum(n) {
    function add(a, b) {
        return a + b;
    }

    var s = 0;
    for (var i = 0; i <= n; i++) {
        s = add(s, i);
    }
    return s;
}

document.write("1~100 = " + sum(100) + "<br>");
//document.write("2 + 3 = " + add(2 + 3) + "<br>");        // 에러


/*
함수내부에 선언된 함수를 호출할 수는 없다.

내부함수의 본체에서는 자신이 포함된 외부 함수의 모든 지역변수를 자유롭게 참조할 수 있다.

지역 함수와 지역 변수는 형제 관계이며 생존 기간이 같기 때문이다. 그러나 반대로 외부 함수는 내부 함수의 지역 변수를 읽을 수 없다.
*/


function outer() {
    var outvalue = 5678;
    function inner() {
        var invalue = 1234;
        document.write("outvalue = " + outvalue + "<br>");
    }
    inner();
    //document.write("invalue = " + invalue + "<br>");        // 에러
}
outer();

/*
2.2 익명함수

자바스크립트에서는 함수도 하나의 데이터 타입이며 일종의 객체이다. 함수에 이름을 주고 선언할 수도 있지만

변수에 값을 대입하듯이 정의할 수도 있다. 변수를 초기화할 때 = 다음에 리터럴을 초기값으로 지정하듯이

함수도 함수 리터럴로 초기화한다. 함수 리터럴의 형식은 다음과 같다.

function(인수목록){본체}

이렇게 정의한 함수리터럴은 이름이 없으므로 익명함수라고 하고 변수에 대입된다.
*/

var v3 = 10;//숫자 리터럴
var v4 = {
	a1 : 10,
	a2 : 20
};//객체리터럴


var add = function(a, b) {
    return a + b;
};//함수 리터럴	(=값)

document.write("2 + 3 = " + add(2, 3));

/*
변수에 대입되므로 끝에는 세미콜론이 필요하다.

호출은 변수명을 통해 호출된다.

선언적으로 함수를 정의하는 것과 변수에 함수 리터럴을 대입하는 형태는 차이점이 있다.
*/


document.write("2 + 3 = " + add1(2, 3) + "<br>");
//document.write("4 + 5 = " + add2(4, 5) + "<br>");            // 에러

function add1(a, b) { return a + b; }
var add2 = function(a, b) { return a + b; };

/*
먼저, 정의형 함수는 정의/구현부가 호출부 밑에 있어도 잘 호출되지만 변수 할당형 함수는 호출부가 함수리터럴이
변수에 할당되는 구문 위에 있을 경우 에러가 난다.

자바스크립트는 페이지를 로드할 때 선언된 함수를 미리 읽어 해석해 놓기 때문에 add1은 아무데서나 호출가능하다.

하지만 익명함수를 대입받는 변수는 이런 규칙이 적용되지 않으므로 반드시 호출전에 정의가 먼저 와야 한다.

함수 리터럴은 별도의 변수에 대입할 필요없이 수식내에서 사용할 수 있다.
*/

document.write("2 + 3 = " + function(a, b) { return a + b; }(2, 3));


/*
함수 리터럴의 값 복사
*/
var add = function(a, b) {
    return a + b;
}
var plus = add;
document.write("4 + 5 = " + plus(4, 5));


/*
함수 리터럴을 다른 함수의 인자로 전달
*/

var add = function(a, b) {
    return a + b;
}
var multi = function(a, b) {
    return a * b;
}
function calc(a, b, f) {
    return f(a, b);//multi(2,3)=>6
}
document.write("2 + 3 = " + calc(2, 3, add) +"<br>");
document.write("2 * 3 = " + calc(2, 3, multi) +"<br>");

//2.3 클로저

function outer() {
    var value = 1234;
    function inner() {
        document.write("value = " + value + "<br>");
    }
    inner();
}
outer();

//내부 함수는 내부 변수를 참조할 수 있다.


function outer() {
    var value = 1234;
}
outer();
document.write("value = " + value + "<br>");



//내부 변수는 외부에서 사용할 수 없다.


function outer() {
    var value = 1234;
    function inner() {
		value++;
	   document.write("value = " + value + "<br>");
    }
    return inner;
}
var outin = outer();//누군가가 내부함수를 참조하고 있으면 내부함수는 삭제되지 못한다.
outin();
outin();
outin();
outin();

/*
함수의 내부 변수를 외부에서 사용할 수 있게끔 해주는 기법.

이런 기법은 이벤트 핸들러를 등록할 때 핸들러에서 지역변수를 자유롭게 참조할 수 있어야 하기에 필요하다.
스크립트 실행기는 지역 변수를 참조한느 함수가 외부에서 호출될 수 있다는 것을 인식하고 이 함수가 존재하는 한은 지역 변수를 없애지 않는다.
outin이 남아 있는 한 inner가  실행되기 위한 환경이 유지된다.
*/


function outcount() {
    var count = 0;
    //setInterval은 내부에 시계를 설치해서, 1초마다 호출.
    var timerid = setInterval(function() {
        count++;
        document.write(count + "초 지났습니다." + "<br>");
    }, 1000);
}
outcount();



//2.4 동적함수
//new는 인스턴스를 생성할때 쓰는 연산자.
var 변수 = new Function("인수1", "인수2", ... ,"함수내부본무내용");



//함수객체를 동적으로 생성해서 변수에 할당하는 기법.


var add = new Function("a", "b", "return a + b;");
//function(a,b){return a+b;}
document.write("2 + 3 = " + add(2, 3) +"<br>");



//동적 함수의 본체(마지막 인자)는 바꿔칠 수 있다.

var body;
if (confirm("더할래, 곱할래") == true) {
    body = "return a + b;";
} else {
    body = "return a * b;";
}
var add = new Function("a", "b", body);
document.write("result = " + add(2, 3) +"<br>");


/*
2.5 재귀호출

재귀 호출은 함수가 자기 자신을 다시 호출하는 특수한 형태이다.
*/

function fact(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fact(n-1);
    }
}
document.write("5! = " + fact(5) + "<br>"); //120


/*
if(n==1)을 만족하면 함수가 종료된다. 재귀 호출 함수는 무한루프를 조심해야 한다.

callee,caller

모든 함수에게 암시적으로 전달되는 인수 배열인 arguments는 두 개의 추가 속성을 가진다.

caller속성은 이 함수를 호출한 함수이며 callee속성은 호출을 당한 함수 자신이다.

대개의 경우 함수는 이름으로 참조할 수 있지만 이름이 없는 익명 함수는 callee속성으로 참조해야 한다.
*/

document.write("5! = " + function(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * arguments.callee(n-1);
    }
}(5) + "<br>");

----------------------------------2.23여기까지.
