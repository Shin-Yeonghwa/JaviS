/*


3. 내장함수
3.1 타입변환

Number(value) : 문자를 숫자로 바꿔준다. Number("10a") => 10, NaN, parseInt()
String(value) : 숫자를 문자로 바꿔준다. String(10)->"10", 10+""
Boolean(value) : Boolean(10) -> true
//false 바뀌는 값들 : '',"", 0, undefined,null, NaN

숫자변환 고급함수

parseInt(value, radix)

parseFloat(value)
*/

document.write('Number("1234") : ' + Number("1234") + "<br>");
document.write('Number("12개") : ' + Number("12개") + "<br>");
document.write('parseInt("12개") : ' + parseInt("12개") + "<br>");
document.write('Number("3.1415") : ' + Number("3.1415") + "<br>");
document.write('Number("3.14원주율") : ' + Number("3.14원주율") + "<br>");
document.write('parseFloat("3.14원주율") : ' + parseFloat("3.14원주율") + "<br>");


/*
진법추가 기능.


var hex = "0x1a"
document.write("0x1a = " + parseInt(hex, 16) + "<br>");
document.write("0x1a = " + parseInt(hex) + "<br>");
document.write("0x1a = " + Number(hex) + "<br>");

var decimal = "12"
document.write("12(10) = " + parseInt(decimal, 10) + "<br>");
document.write("12(16) = " + parseInt(decimal, 16) + "<br>");


var hex = 0x1a;

document.write("hex = " + hex + "<br>");
document.write("hex = " + hex.toString(16) + "<br>");
document.write("hex = " + hex.toString(2) + "<br>");



3.2 값의 상태 점검

isFinite(value)

isNaN(value)

*/

var a = 2 / 0;
document.write(a);//무한대값.Infinity 한계가 없다.
//한계가 있냐? => 무한대라서 한계가 없다.

//isFinite:유한하냐?
if (isFinite(a) == false) {//무한대라면.
    document.write("무한대값입니다." + "<br>");
}

var b = 0 / 0;//NaN
document.write(b);

if (isNaN(b)) {//b가 NaN이냐?
    document.write("올바른 숫자가 아닙니다." + "<br>");
}


/*
무한대를 나타내는 상수 Infinity가 정의되어 있으므로 a가 무한대인지 보려면 isFinite함수를 호출하는 대신
Infinity 상수를 바로 비교 해도 된다.
if(a == Infinity)


3.3 인코딩
naver.com?query=%AC

인코딩이란 문자열을 표기 가능한 부호 형태로 변환하는 것이다.
인터넷 URL에는 사용할 수 있는 문자에 제약이 있어 한글이나 특수 기호를 포함할 수 없다.
이런 문자를 주소에 포함시키려면 인코딩해야 한다.

인터넷 주소 표기는 주로 UTF-8을 사용하는데 한글 한글자는 3자리의 16진수가 되며 각 숫자를 %기호 다음에 16진수로 표기한다.
한글 뿐만 아니라 :이나 /, &, ? 등의 특수 기호도 주소창에 바로 쓸 수 없으므로 인코딩해야 한다. 인코딩한 문자열을 원래 문자열로 되돌리는 것을 디코딩이라고 한다.

웹 페이지는 수시로 웹 서버와 자료를 주고 받으며 인터넷으로 통신할 때는 인코딩, 디코딩할 일이 아주 흔하다.
그래서 자바스크립트는 인코딩, 디코딩 함수를 전역으로 제공하며 다음 세 벌의 함수가 준비되어 있다.


 escape(string)
 unescape(string)
 * @ - _ + . / 를 제외한 모든 특수 문자를 인코딩한다.

 encodeURI(uri)
 decodeURI(uri)
 , / ? : @ & = + & # 을 제외한 모든 특수 문자를 인코딩한다.

 encodeURIComponent(uri)

 decodeURIComponent(uri)
 거의 대부분의 특수 문자를 인코딩한다. 알파벳과 숫자 정도만 원래대로 남는다.
 UTF-8로 인코딩된다.
*/

var s = "소/녀:시@대";
document.write("원본 = " + s + "<br>");
var e = encodeURIComponent(s);
document.write("인코딩 = " + e + "<br>");
var u = decodeURIComponent(e);
document.write("디코딩 = " + u + "<br>");

/*
3.4 eval

eval 함수는 문자열로 된 자바스크립트 코드를 해석하여 실행한다.
eval(string)
*/

eval("var a=2, b=3;document.write(a + b, '<br>')");
document.write("a = " + a);

//eval안에서 변수 뿐만 아니라 함수를 정의하고 외부에서 호출할 수도 있다.
eval("function add(a, b) { return a + b; }");
document.write("2 + 3 = " + add(2, 3));
