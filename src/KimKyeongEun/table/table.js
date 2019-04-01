var createTable = function(){
    var v = {
        codeHtml : '',
        codeContent : document.querySelector('.table_code'),
        captionText : document.getElementById('captionText'),
        colCount : document.getElementById('colCount'),
        colsetBox : document.getElementById('colsetBox'),
        colBox : document.querySelector('.colbox'),
        resultWrap : document.getElementsByClassName('result_wrap')[0],
        btnCreate : document.getElementsByClassName('btn_create')[0],
        colunit : document.getElementsByClassName('unit')[0],
        thPositionBox : document.getElementById('thPositionBox'),
        captionBox : document.getElementById('captionBox'),
        htmlCode : document.getElementById('htmlCode'),
        codeBtn : document.getElementById('codeBtn'),
        colunitCheck : '',
        colWidthOpCheck : 'colWidthSame',
        colUnitOpCheck : 'colPercent',
        thChecked : 'thLeft',
        captionChecked : 'captionShow',
        colCurrentCheckPre : 0
    }

    //option check
    //td 행/열 개수 체크
    function tdCountOpCheck(){
        var rowCount = document.getElementById('rowCount'),
            colCount = document.getElementById('colCount');

        if(!rowCount.value){
            alert("행 갯수 ㄱㄱㄱ");
            rowCount.focus();
        }
        if(!colCount.value){
            alert("열 갯수 ㄱㄱㄱ");
            colCount.focus();
        }

        if(rowCount.value && colCount.value){
            return [rowCount.value,colCount.value];
        }else return false;
    }

    //col width (동등 or 다르게) 체크  + 다르게 일때 단위 선택 체크
    function colSetOpCheck(){
        if(v.colWidthOpCheck == 'colWidthDif'){
            return [v.colWidthOpCheck ,v.colUnitOpCheck];
        }else return [v.colWidthOpCheck];  //동등하게 나눌때 return
    }

    //caption 상태값 체크
    function captionOpCheck(t){
        v.captionChecked = t.getAttribute('for');
    }

    //th 위치 값 체크
    function thOpCheck(t){
        v.thChecked = t.getAttribute('for');
    }

    function colWidthChange(t){
        v.colWidthOpCheck = t.getAttribute('for');
    }
    function colUnitChange(t){
        v.colUnitOpCheck = t.getAttribute('for');
    }

    //col width담을 input 생성
    function colWidthHandler(){
        var colCurrentCheck = Number(document.getElementById('colCount').value);

        if(v.colWidthOpCheck === 'colWidthDif'){
            if(colCurrentCheck !== 0 && (v.colBox.innerHTML == '')){

                var colString ='<ol class="col_list">';
    
                for(var i = 0; i < colCurrentCheck ;i++){
                    colString += '<li><input type="number" min="0" class="inp_col_width"></li>';
                }
    
                colString += '</ol>'
    
                v.colBox.innerHTML = colString;
            }else if(colCurrentCheck !== 0 && v.colBox.innerHTML !== ''){

                var count = document.querySelector('.col_list').getElementsByTagName('li');

                if(v.colCurrentCheckPre < colCurrentCheck){
                    var remainder = colCurrentCheck -v.colCurrentCheckPre;
                    for(var i = 0; i < remainder; i++){
                        var liNode = document.createElement("li");
                        liNode.innerHTML = '<input type="number" min="0" class="inp_col_width">';
                        document.querySelector('.col_list').appendChild(liNode);
                    }
                }else if(v.colCurrentCheckPre > colCurrentCheck){
                    var remainder = v.colCurrentCheckPre - colCurrentCheck;
                    for(var i = 0; i < remainder; i++){
                        document.querySelector('.col_list').removeChild(count[colCurrentCheck-1]);
                    }
                }

            }else if(colCurrentCheck == 0){
                alert("열 갯수 체크 좀");
                document.getElementById('colCount').focus();
            }
            v.colCurrentCheckPre = colCurrentCheck;
        }
    }

    
    //html 추가 코드
    //caption html 추가
    function captionContent(){
        captionText = v.captionText.value;

        switch(v.captionChecked){
            case 'captionShow' :
                v.codeHtml += '<caption>';
            break;
            case 'captionHide' :
                v.codeHtml += '<caption class="caption_blind">';
            break;
        }

        return v.codeHtml += captionText + '</caption>';
    }

    // colgorup html 추가
    function colWidthCheck(colSetCheck){

        if(colSetCheck[0] !== 'colWidthSame'){
        
            var colUnitCheck = colSetCheck[1] == 'colPercent' ? '%' : 'px';

            var colInputCount = v.colBox.getElementsByTagName('input');
            var colWStrig ='<colgroup>';

            for(var i = 0; i < colInputCount.length; i++){
                if(colInputCount[i].value === ''){
                    colWStrig += "<col>"
                }else{
                    colWStrig += '<col style="width:' + colInputCount[i].value + colUnitCheck + '">';
                }
            }

            colWStrig += '</colgroup>';

            return v.codeHtml += colWStrig;
        }
    }

    //최종 table 생성
    function createTableHandler(){

        //상태값 체크
        var countCheck = tdCountOpCheck();
        var colSetCheck = colSetOpCheck();

        // 모두 값이 있으면 table 생성
        if(countCheck && colSetCheck){

            v.codeHtml = '<table>';
            captionContent();
            colWidthCheck(colSetCheck);

            rowCount = countCheck[0];
            colCount = countCheck[1];

            for(var i = 0; i < rowCount; i++ ){
                v.codeHtml += '<tr>'

                for(var j =0; j < colCount; j++){

                    if(v.thChecked === 'thTop' && i === 0){
                        v.codeHtml += '<th></th>'
                    }else if(v.thChecked === 'thLeft' && j === 0){
                        v.codeHtml += '<th></th>'
                    }else{
                        v.codeHtml += '<td></td>';
                    }
                }
                v.codeHtml += '</tr>'
            }
            v.codeHtml += '</table>';

            v.codeContent.innerHTML = v.codeHtml;

            v.htmlCode.textContent = v.codeHtml;
        }
    }


    return function(){
        v.colsetBox.addEventListener("click",function(e){
            if(e.target && e.target.nodeName == 'LABEL'){
                if(e.target.htmlFor !== 'colWidthSame'){
                    document.querySelector('.unit').style.display = 'block';
                    document.querySelector('.colbox').style.display = 'block';
                }else {
                    document.querySelector('.unit').style.display = 'none';
                    document.querySelector('.colbox').style.display = 'none';
                }

                colWidthChange(e.target);
                colWidthHandler();
            }
        }.bind(this),false);


        v.captionBox.addEventListener("click",function(e){
            if(e.target && e.target.nodeName == 'LABEL'){
                captionOpCheck(e.target);
            }
        });

        v.thPositionBox.addEventListener("click",function(e){
            if(e.target && e.target.nodeName == 'LABEL'){
                thOpCheck(e.target);
            }
        });

        v.colunit.addEventListener("click",function(e){
            if(e.target && e.target.nodeName == 'LABEL'){
                colUnitChange(e.target);
            }
        });

        //bind 사용
        v.btnCreate.addEventListener("click",function(){createTableHandler(); v.resultWrap.className = 'result_wrap'}.bind(this),false);
        v.colCount.addEventListener("change",function(e){
            colWidthHandler()
        }.bind(this),false);
        v.codeBtn.addEventListener("click",function(e){
            if(!this.parentNode.classList.contains("hide")){
                this.parentNode.className += ' hide';
            }else{
                this.parentNode.className = 'result_wrap';
            }
        });
    }
}



