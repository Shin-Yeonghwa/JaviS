//음료 리스트
const drink = [
    {
        name : '포카리스웨트',
        price : 400,
        number : 10
    },
    {
        name : '데미소다 애플' ,
        price: 300,
        number : 10},
    {
        name : '컨피던스' ,
        price: 200,
        number : 1},
    {
        name : '오란씨 파인',
        price : 300,
        number : 10},
    {
        name :'오란씨 깔라만씨' ,
        price: 300,
        number : 10},
    {
        name :'오라떼 피치',
        price: 350,
        number : 10},
    {
        name: '코카콜라' ,
        price: 400,
        number : 10},
    {
        name :'스프라이트' ,
        price: 400,
        number : 10},
    {
        name:'핫식스' ,
        price: 500,
        number : 5},
    {
        name :'미닛메이드 망고',
        price: 300,
        number : 5},
    {
        name : '암바사' ,
        price: 300,
        number : 10},
    {
        name: '조지아 캔커피',
        price : 200,
        number : 10},
    {
        name : '탄산수',
        price : 400,
        number : 10},
    {
        name : '비타파워 드링크',
        price : 200,
        number : 30},
    {
        name: '물',
        price: 1000,
        number : 10
    }
];

//dom
var machine = document.getElementById('drink_list'),
    drinkBtnList = machine.getElementsByClassName('drinkBtn'),
    inputMoney = document.getElementById('money'),
    money = 0,
    change = 0;

//음료 리스트를 뿌려준다.
machine.innerHTML = loopContent(drink, function(drink,i){
    return '<li><button class="drinkBtn" data-index='+ i +'>'+  drink.name + '<span class="price">' + drink.price+'</span></button></li>'
});

//loop list
function loopContent(arr, fn){
    let text ='';
    for(var i in arr){
        text += fn(arr[i],i);
    }
    return text;
}


//돈을 넣는다.(넣은 돈을 읽어온다.)
function getMoney(input){
    return input.value;
}

//현재 금액에서 선택할 수 있는 음료는 활성화 한다.
function activeDrink(drinkList, money){
    for(var i = 0 ;i < drinkList.length; i++){
        if(money >= drinkList[i].price){
            drinkBtnList[i].classList.add = 'on';
        }
    }
}

//음료를 선택한다.(음료 가격 return)
function getPrice(drinkList,index){
    return drinkList[index].price;
}


//잔액을 표시한다. (잔액 return)
function getChange(money, price){
    return money - price;
}

//잔액에서 선택할 수 있는 음료를 활성화 한다.
////activeDrink(list, change)

//음료의 최소값보다 작으면 잔돈을 배출한다.
function checkMoeny(money){
    return money < 200 ? false : true;
}

//잔돈 배출
function output(inchange){
    alert('잔돈 :' + inchange);
    return inchange = 0;
}

//도중에 잔돈 버튼 클릭시 잔돈을 배출한다.

//잔돈 배출 후 reset 상태로 되돌린다.
function reset(){

}


//돈 확인
document.querySelector('.btn_money').addEventListener("click",function(){
    money = Number(getValue(inputMoney));
    btnMoney.style.display = 'none';
    inputMoney.style.display = 'none';
    changeTxt.textContent = money;
    onEvent = true;

    activeDrink(drink , money);
});


//음료 버튼 이벤트
machine.addEventListener("click",function(event){
    if(onEvent && event.target.tagName == 'BUTTON'){
        money = getChange(drink, getPrice(drink, event.target.getAttribute('data-index')));
        changeTxt.textContent = money;

    }
});

