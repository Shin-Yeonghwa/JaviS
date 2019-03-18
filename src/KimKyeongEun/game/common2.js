var cardGame = (function(){
    var card = [1,1,2,2,3,3,4,4,5,5,6,6];
    var time,   //게임시간초
        cardBox,    //카드 리스트 담는 배열
        rotateCount,    //뒤집어진 카드 개수
        complateCard,   //짝 맞춰진 카드 개수
        checkedCard,    //현재 뒤집은 카드와 그전 카드 index
        setTimeFunc,    // settimeout 을 담기 위한 변수
        gameStep = 0,
        startTime,
        endTime;

    //초기화
    var init = function(cardlist){
        //카드 리스트 가져옴
        cardBox = cardlist || cardBox ;

        //시간초기화
        time = {
            minute : 0,
            second : 0
        };
        //
        rotateCount = 0;
        complateCard = 0;
        checkedCard = [];   

        startTime = {
            wrap : document.querySelector('.time_area'),
            miniteText : document.querySelector('.time_area .minute'),
            secondText : document.querySelector('.time_area .second'),
        },
        endTime = {
            wrap : document.querySelector('.success_wrap'),
            miniteText : document.querySelector('.success_wrap .minute'),
            secondText : document.querySelector('.success_wrap .second'),
        };
    }

    var start = function(cardlist){
        init(cardlist);
        randomCard();
    }

    //end
    var end = function(){
        endTime.miniteText.textContent = time.minute;
        endTime.secondText.textContent = time.second;
        endTime.wrap.style.display = "block";

        if(gameStep == 2){
            document.getElementById('btnNext').style.display = "none";
        }
    }

    var next = function(){
        ++gameStep;
        document.getElementsByTagName('body')[0].className = "step2";

        var cardLength = card.length/2 +1;
        card.push(cardLength);
        card.push(cardLength);

        cardBox.forEach(function(item){
            item.className = '';
        });


        endTime.wrap.style.display = "none";

        document.querySelector('.cardlist').insertAdjacentHTML('beforeend','<li><span class="front"></span><span class="back"></span></li><li><span class="front"></span><span class="back"></span></li>');
        
        setTimeout(function(){
            start(document.querySelectorAll('.cardlist li'));
        },1000);
    }

    //시간초 함수
    var timer = function(){
        setTimeFunc = setInterval(function(){
            if(time.second == 59){
                time.second = 0;
                startTime.miniteText.textContent = ++time.minute;
            }

            startTime.secondText.textContent = ++time.second;
        },1000);
    }

    //카드 섞기
    var randomCard = function(){
        for(var i = card.length-1;i >0 ;i--){
            var randomNum = Math.floor(Math.random() * i);
            var preCard = card[i];
            card[i] = card[randomNum];
            card[randomNum] = preCard;
        }

        for(var i = 0; i < card.length;i++){
            cardBox[i].querySelector('.front').style.backgroundImage = "url('img/"+ card[i] +".png')";
            cardBox[i].setAttribute('data-index',i);
        }

        show();
    }

    var checkCard = function(targetli){
        //카드를 뒤집어.
        targetli.className = 'rotate';
        //그런다음 지금 뒤집은 카드를 배열에 넣어 (뒤에 뒤집은거와 체크하려면)
        checkedCard[rotateCount++] = targetli;

        //그래서 카드를 2개 뒤집었을때
        if(rotateCount === 2){
            //card배열의 값을 가지고 올건데, 그 index는 위에서 뒤집은 카드를 넣은 배열에서 뒤집은 li의 data-index를 가지고 오는거제
            //그래서 뒤집은 li들의 data-index값을 card[] 배열 index로 넣고 해당 card의 값과 같으면 둘이 똑같은 카드임
            var openCard1 = card[checkedCard[0].dataset.index];
            var openCard2 = card[checkedCard[1].dataset.index];
            //만약에 두 카드가 같으면
            if(openCard1 == openCard2){
                complateCard++; //짝맞은 카드 개수 ++

                //뒤집힌 카드가 2개면 다른카드는 0.5초후에 뒤집을 수 있음.
                setTimeout(function(){
                    rotateCount = 0;
                },500);
                
            }else{
                //두 카드가 맞지 않으면 다시 rotate 시킴 (rotate클래스 제거)
                setTimeout(function(){                    
                    checkedCard[0].className ='';
                    checkedCard[1].className ='';
                    rotateCount = 0;
                },600);
            }
        }

        //짝 맞는 카드가 다 뒤집히면 시간초 멈추고 end함수 호출
        if(complateCard == card.length/2){
            clearInterval(setTimeFunc);
            end();
        }
    }

    var show = function(){
        cardBox.forEach(function(item){
            item.className = 'rotate';
        });

        setTimeout(function(){
            cardBox.forEach(function(item){
                item.className = '';
            });

            if(gameStep == 0){
                document.getElementsByClassName( 'cardlist' )[0].addEventListener( 'click', function( e ) {
                    if( e.target && e.target.nodeName == 'LI' ) {
                        if(rotateCount == 2){
                            e.preventDefault();
                        }else checkCard(e.target);
                    }
                }, false );
            }

            
            timer();
        },2000);
    }

    return {
        gameStart : start,
        nextStage : next
    }


})();