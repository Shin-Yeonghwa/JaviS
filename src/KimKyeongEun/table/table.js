var createTable = function(){
    var v = {
        codeHtml : '',
        codeContent : document.querySelector('.table_code'),
        captionInput : document.getElementsByName('caption'),
        captionText : document.getElementById('captionText'),
        colCount : document.getElementById('colCount'),
        colWidthInput : document.getElementsByName('colWidth'),
        colWidthSame : document.getElementById('colWidthSame'),
        colWidthDif : document.getElementById('colWidthDif'),
        colBox : document.querySelector('.colbox'),
        btnCreate : document.getElementsByClassName('btn_create')[0],
        colunit : document.getElementsByName('colUnit'),
        thPosition : document.getElementsByName('thPosition'),
        colunitCheck : '',
        colWidthOpCheck : '',
        colCurrentCheckPre : 0
    }

    //option check

    //caption 상태값 체크
    function captionOpCheck(){
        var captionChecked =  null;

        v.captionInput.forEach(function(item){
            if(item.checked == true){
                captionChecked = item.getAttribute('id');
            }
        });

        if(captionChecked === null){
            alert("caption 상태 체크해주세요.");
            return false;
        }else return captionChecked;
    }

    //th 위치 값 체크
    function thOpCheck(){
        var  thChecked = null;

        v.thPosition.forEach(function(item){
            if(item.checked == true){
                thChecked = item.getAttribute('id');
            }
        });

        return thChecked;
    }

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
        var colSet =  null,
            colunitCheck =null;

        v.colWidthInput.forEach(function(item){
            if(item.checked == true){
                colSet = item.getAttribute('id');
            }
        });

        if(colSet == 'colWidthDif'){
            v.colunit.forEach(function(item){
                if(item.checked == true){
                    colunitCheck = item.getAttribute('id');
                }
            });

            if(colunitCheck == null){
                alert("col 단위선택좀");
                return false;
            }else return [colSet,colunitCheck];
        }else return [colSet];  //동등하게 나눌때 return
    }
    
    function colWidthChange(e){
        v.colWidthOpCheck = e.id;
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
    function captionContent(caption){
        captionText = v.captionText.value;

        switch(caption){
            case 'captionShow' :
                v.codeHtml += '<caption>';
            break;
            case 'captionHide' :
                v.codeHtml += '<caption class="blind">';
            break;
        }

        return v.codeHtml += captionText + '</caption>';
    }

    // colgorup html 추가
    function colWidthCheck(colSetCheck){

        if(colSetCheck[0] !== 'colWidthSame'){
        
            var colUnitCheck = colSetCheck[1] == 'colPercent' ? '%' : 'px';

            if(v.colBox.innerHTML !== ''){
                var colInputCount = v.colBox.getElementsByTagName('input');
                var colWStrig ='<colgroup>';

                for(var i = 0; i < colInputCount.length; i++){
                    if(colInputCount[i].value === ''){
                        colWStrig += "<col>"
                    }else{
                        colWStrig += "<col style=width:" + colInputCount[i].value + colUnitCheck +">";
                    }
                }

                colWStrig += '</colgroup>';

                return v.codeHtml += colWStrig;

            }else{
                return false;
            }
        }
    }

    //최종 table 생성
    function createTableHandler(){

        //상태값 체크
        var captionChecked = captionOpCheck();
        var thChecked = thOpCheck();
        var countCheck = tdCountOpCheck();
        var colSetCheck = colSetOpCheck();

        // 모두 값이 있으면 table 생성
        if(captionChecked && thChecked && countCheck && colSetCheck){

            v.codeHtml = '<table>';
            captionContent(captionChecked);
            colWidthCheck(colSetCheck);

            rowCount = countCheck[0];
            colCount = countCheck[1];

            if(rowCount && colCount){

                for(var i = 0; i < rowCount; i++ ){
                    v.codeHtml += '<tr>'

                    for(var j =0; j < colCount; j++){

                        if(thChecked === 'thTop' && i === 0){
                            v.codeHtml += '<th></th>'
                        }else if(thChecked === 'thLeft' && j === 0){
                            v.codeHtml += '<th></th>'
                        }else{
                            v.codeHtml += '<td></td>';
                        }
                    }
                    v.codeHtml += '</tr>'
                }
                v.codeHtml += '</table>'
            }
            v.codeContent.innerHTML = v.codeHtml;
        }
    }


    return function(){
        v.colWidthDif.addEventListener("click",function(e){
            document.querySelector('.unit').style.display = 'block';
            document.querySelector('.colbox').style.display = 'block';
            colWidthChange(e.target);
            colWidthHandler();
        }.bind(this),false);
        v.colWidthSame.addEventListener("click",function(){
            document.querySelector('.unit').style.display = 'none';
            document.querySelector('.colbox').style.display = 'none';
            colWidthChange(e);
        });

        //bind 사용
        v.btnCreate.addEventListener("click",function(){createTableHandler()}.bind(this),false);
        v.colCount.addEventListener("change",function(e){
            console.log(e.target.value);
            colWidthHandler()
        }.bind(this),false);
    }
}



