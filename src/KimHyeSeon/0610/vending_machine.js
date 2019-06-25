//숫자만 입력
function onlyNumber() {
    var key = window.event.keyCode;
    if((key < 48) || (key > 57)) { //숫자키
        if((key != 8) || (key != 13)) { //backspace, enter
            return false;
        }
    }    
}

//반환
function btn_reset() {
    document.getElementById("reset").style.display="block";
    document.getElementById("reset_price").innerHTML = nowpriceSum;

    //잔액 초기화
    nowpriceSum = 0;
    document.getElementById("now").innerHTML = 0;

    //주문리스트 초기화
    choiceArray = [];
    document.getElementById("result").style.display="none";
    document.getElementById("result_list").innerHTML = '';

    priceCompare();
}

//현재 금액 확인
var nowprice = ""; //입력받은 금액
var nowpriceSum = ""; //잔액

function btn_price() {    
    nowprice = parseInt(document.getElementById("input_price").value);
    nowpriceSum = parseInt(document.getElementById("now").innerHTML);
    nowpriceSum += nowprice; //잔액에 입력받은 금액을 더함
    document.getElementById("now").innerHTML = nowpriceSum; //잔액 노출
    document.getElementById("reset").style.display="none"; //반환금액 미노출  

    btnDisabled();
    priceCompare();
}

//현재금액과 선택한 메뉴의 가격을 비교
var choiceArray = [];
var choiceMenu = "";
var choicePrice = "";

function btnMenu(e) { //e는 이벤트가 발생하게 되면 발생된 이벤트에 대한 정보를 가지고 있는 객체
    choiceMenu = e.dataset['menu']; 
    choicePrice = e.dataset['price']; 
    choiceArray.unshift ({menu : choiceMenu, price : choicePrice}); //선택한 메뉴의 상품명과 가격을 배열에 객체로 저장

    nowpriceSum = nowpriceSum - choicePrice;
    document.getElementById("now").innerHTML = nowpriceSum;       

    //주문리스트 노출
    document.getElementById("result").style.display="block";
    document.getElementById("result_list").innerHTML += '<li>' + (choiceArray.length) + '. ' + choiceArray[0].menu + ' ' + choiceArray[0].price + '원</li>';
    
    priceCompare();
}

//메뉴의 갯수와 가격을 저장
var canMenuNumber = document.getElementById("menu").getElementsByTagName("button"); //메뉴의 갯수를 저장
var canMenuPrice = [] //메뉴별 가격을 저장할 배열 생성

//잔액보다 메뉴 가격이 큰 경우 버튼 활성
function btnDisabled() {
    for(var i = 0; i < canMenuNumber.length; i++) {
        canMenuPrice.push(parseInt(document.getElementById("menu").children[i].dataset.price)); //가격을 배열에 저장
        if(nowpriceSum >= canMenuPrice[i]) { //잔액과 메뉴의 가격을 비교
            document.getElementById("menu").children[i].disabled = false; //잔액이 더 크면 버튼 활성
        }
    }    
}

//잔액보다 메뉴 가격이 적은 경우 버튼 비활성
function priceCompare() {
    for(var i = 0; i < canMenuNumber.length; i++) {
        console.log(nowpriceSum);
        if(nowpriceSum < canMenuPrice[i]) { //잔액과 메뉴의 가격을 비교
            document.getElementById("menu").children[i].disabled = true; //잔액이 더 작으면 버튼 비활성
            console.log(nowpriceSum);
        }
    }    
}