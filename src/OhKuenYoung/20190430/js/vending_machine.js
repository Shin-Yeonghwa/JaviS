var coin_array = new Array();

document.getElementById('Input_amount').onsubmit = function() {
    var insert_coin = document.getElementById('money_inlet');
    var create_log = document.createElement('div');
    var log_text = insert_coin.value;
    var coin_num = parseInt(insert_coin.value);
    var coin_sum = (accumulator, currentValue) => accumulator + currentValue;

    create_log.className = "coin_log";
    create_log.innerHTML = "<span class='coin'>" + log_text + "</span>" + "원을 넣었습니다.";

    if(insert_coin.value <= 0) {
        alert('0원 이상을 입력해 주세요.')
    }
    else {
        coin_array.push(coin_num);
        document.getElementById('Coin_log').appendChild(create_log);
    };

    document.getElementById('Current_amount').innerText = coin_array.reduce(coin_sum);
}
