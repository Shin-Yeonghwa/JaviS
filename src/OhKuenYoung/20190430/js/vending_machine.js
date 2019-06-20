//동전 삽입 로그 + 현재금액
var CoinSum = 0;

function CashInsert(Price) {
    var Coin = Price.innerHTML.replace(/[^0-9]/g,"");
    var CreateLog = document.createElement('div');

    CoinSum += parseInt(Coin);

    CreateLog.className = "coin_log";
    CreateLog.innerHTML = "<span class='coin'>" + Coin + "</span>" + "원을 넣었습니다.";
    document.getElementById('Coin_log').appendChild(CreateLog);
    document.getElementById('Current_amount').innerHTML = CoinSum;
}

function BuyDrink(Drink) {
    var DrinkPrice = Drink.innerHTML.replace(/[^0-9]/g,"");

    if(DrinkPrice > CoinSum) {
        alert('금액이 모자랍니다.');
    } else if (DrinkPrice < CoinSum) {
        CoinSum -= DrinkPrice;
        document.getElementById('Current_amount').innerHTML = CoinSum;

        MachineLog.DrinkBuyLog();

    };
};

var MachineLog = {

    BuyDrink: function (Drink) {
        DrinkPrice;
    },

    DrinkBuyLog: function() {
        var CreateLog = document.createElement('div');
        CreateLog.className = "coin_log";
        CreateLog.innerHTML = "<span class='coin'>" + DrinkPrice + "</span>" + "원을 사용하였습니다";
        document.getElementById('Coin_log').appendChild(CreateLog);
    }
};


