//음료
const drink = {
    '포카리스웨트' : 400,
    '데미소다 애플' : 300,
    '컨피던스' : 200,
    '오란씨 파인' : 300,
    '오란씨 깔라만씨' : 300,
    '오라떼 피치' : 350,
    '코카콜라' : 400,
    '스프라이트' : 400,
    '핫식스' : 500,
    '미닛메이드 망고' : 300,
    '암바사' : 300,
    '조지아 캔커피' : 200,
    '탄산수' : 400,
    '비타파워 드링크' : 200,
    '물' : 1000
}

var machine = document.getElementById('drink_list'),
    machineList = machine.getElementsByTagName('li'),
    machineButton = machine.getElementsByTagName('button');

var money = 0;


function loopContent(count, contents, )






function getValue(com){
    return com.value;
}

//돈을 넣으면 선택가능한 음료에만 불이 들어온다./ 아니면 alert 창
function inputMoney(mo){
    if(mo < 200){
        error('선택할 수 있는 음료가 없습니다.');
    }else{
        let index = 0;
        for( prop in drink){
            if(drink[prop] < mo){
                machineList[index].className = "on";
            }else machineButton[index].setAttribute("disabled","disabled");
            index++;
        }
    }
}



//음료 선택
function selectDrink(mo,target){
    var change = mo - drink[target.textContent];
    return change > 0 ? inputMoney(change) : error("No");
}

function error(msg){
    return alert(msg);
}

//음료 선택 후 다시 음료를 고를수 있는 잔돈이 있다면 다시 선택가능한 음료에 불이 들어온다.

//잔돈이 별로 없다면 남은 돈 output


//돈 확인
document.querySelector('.btn_money').addEventListener("click",function(){
    money = Number(getValue(document.getElementById('money')));
    document.getElementById('money').style.display = 'none';
    document.querySelector('.change').textContent = money;

    inputMoney(money);
})

machine.addEventListener('click',function(e){
    if(e.target && e.target.nodeName == 'BUTTON'){
        money = selectDrink(money , e.target);
        document.querySelector('.change').textContent = money;
    }
})

