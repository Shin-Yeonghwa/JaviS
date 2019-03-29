var createTable = function(){
    var v = {
        codeHtml : '',
        codeContent : document.querySelector('.table_code'),
        captionInput : document.getElementsByName('caption'),
        thPosition : document.getElementsByName('thPosition'),
        captionText : document.getElementById('captionText'),
        colCount : document.getElementById('colCount'),
        colWidthInput : document.getElementsByName('colWidth'),
        colWidthSame : document.getElementById('colWidthSame'),
        colWidthDif : document.getElementById('colWidthDif'),
        colBox : document.querySelector('.colbox'),
        btnCreate : document.getElementsByClassName('btn_create')[0],
        colunit : document.getElementsByName('colUnit'),
        colunitCheck : '',
        coldiffr : false
    }

    //option check
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

    function thOpCheck(){
        var  thChecked = null;

        v.thPosition.forEach(function(item){
            if(item.checked == true){
                thChecked = item.getAttribute('id');
            }
        });

        return thChecked;
    }

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

    function captionContent(caption){
        captionText = v.captionText.value;

        switch(caption){
            case 'captionShow' :
                v.codeHtml += '<caption>';
            break;
            case 'captionHide' :
                v.codeHtml += '<caption class="blind">';
            break;
            case null : alert("caption 상태 체크해주세요.");
                return false;
            break;
        }

        return v.codeHtml += captionText + '</caption>';
    }

    function colWidthCheck(colSetCheck){

        if(colSetCheck[0] == 'colWidthSame'){
            document.querySelector('.unit').style.display = 'none';
        }else{
            document.querySelector('.unit').style.display = 'block';

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

    function colWidthHandler(){
        var colCurrentCheck = Number(document.getElementById('colCount').value);

        if(colCurrentCheck !== 0){
            var colString ='<ol class="col_list">';

            for(var i = 0; i < colCurrentCheck ;i++){
                colString += '<li><input type="number" min="0" class="inp_col_width"></li>';
            }

            colString += '</ol>'

            v.colBox.innerHTML = colString;
        }else{
            alert("열 갯수 체크 좀");
            document.getElementById('colCount').focus();
        }
    }

    function createTableHandler(){

        var captionChecked = captionOpCheck();
        var thChecked = thOpCheck();
        var countCheck = tdCountOpCheck();
        var colSetCheck = colSetOpCheck();

        if(captionChecked && thChecked && countCheck && colSetCheck){

            v.codeHtml = '<table>';
            captionContent(captionChecked);
            colWidthCheck(colSetCheck);
            // v.codeHtml += this.colWidthCheck();

            rowCount = countCheck[0];
            colCount = countCheck[1];

            if(rowCount && colCount){

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
                v.codeHtml += '</table>'
            }
            v.codeContent.innerHTML = v.codeHtml;
        }
    }


    return function(){
        v.colWidthDif.addEventListener("click",function(){colWidthHandler()}.bind(this),false);
        v.colWidthSame.addEventListener("click",function(){document.querySelector('.unit').style.display = 'none';});
        v.btnCreate.addEventListener("click",function(){createTableHandler()}.bind(this),false);
        v.colCount.addEventListener("change",function(){colWidthHandler()}.bind(this),false);
    }
}



