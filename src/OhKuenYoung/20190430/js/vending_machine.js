//동전 삽입 로그 + 현재금액
var CoinSum = 0;

//동전 투입
function CashInsert(Price) {
    var Coin = Price.innerHTML.replace(/[^0-9]/g,"");
    var CreateLog = document.createElement('div');

    CoinSum += parseInt(Coin);

    CreateLog.className = "coin_log";
    CreateLog.innerHTML = "<span class='coin'>" + Coin + "</span>" + "원을 넣었습니다.";
    document.getElementById('Coin_log').appendChild(CreateLog);
    document.getElementById('Current_amount').innerHTML = CoinSum;

    DrinkCheck()
}

//음료수 선택
function BuyDrink(Drink) {
    var DrinkPrice = Drink.innerHTML.replace(/[^0-9]/g,"");
    var CreateLog = document.createElement('div');
    var DrinkKind = Drink.parentNode.getElementsByTagName('strong')[0];

    if(DrinkPrice > CoinSum) {
        alert('금액이 모자랍니다.');
    } else if (DrinkPrice < CoinSum) {
        CoinSum -= DrinkPrice;
        document.getElementById('Current_amount').innerHTML = CoinSum;

        CreateLog.className = "coin_log";
        CreateLog.innerHTML = "<span class='coin'>" + DrinkPrice + "원을 사용하여 " + DrinkKind.innerText + "를 뽑았습니다." + "</span>";
        document.getElementById('Coin_log').appendChild(CreateLog);

    };

    DrinkCheck()
};


//반환
function ReturnCash() {

    var CurrentAmount = CoinSum;
    CoinSum -= CurrentAmount;

    document.getElementById('Current_amount').innerHTML = 0;

    var CreateLog = document.createElement('div');
    CreateLog.innerHTML = "<span class='coin'>" + "현재 금액을 반환 하였습니다." + "</span>";
    document.getElementById('Coin_log').appendChild(CreateLog);

    DrinkCheck()
}

function DrinkCheck() {
    var DrinkList = document.getElementsByClassName('drinkprice');
    var Money = document.getElementById('Current_amount');

    Money.innerHTML;

    for(var i = 0 ; i < DrinkList.length ; i++){
        if(DrinkList[i].innerHTML.replace(/[^0-9]/g,"") <= CoinSum ){
            DrinkList[i].disabled = false;
        } else {
            DrinkList[i].disabled = true;
        }
    }
}
