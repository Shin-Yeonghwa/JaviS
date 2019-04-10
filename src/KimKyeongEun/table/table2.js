var createTable = function(){
    var v = {
        // codeHtml : '',
        codeContent : document.querySelector('.table_code'),
        captionRadio : document.getElementsByName("caption"),
        thRadio : document.getElementsByName('thPosition'),
        colRadio : document.getElementsByName('colWidth'),
        colCurrentCheckPre : 0
    }

    //radio check value 값.
    var optionValue = {
        captionRValue : 'captionShow',   //caption 값
        captionTextValue : '',
        thChecked : 'thLeft',
        rowCount : 0,
        colCount : 0,
        colWidthOpCheck : 'colWidthSame',
        colUnitOpCheck : 'colPercent'
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
    function captionContent(radioValue,captiontext){
        var text = '';
        captionText = captiontext;

        switch(radioValue){
            case 'captionShow' :
                text += '<caption>';
            break;
            case 'captionHide' :
                text += '<caption class="caption_blind">';
            break;
        }

        return text + captionText + '</caption>';
    }

    // colgorup html 추가
    function colWidthCheck(radioValue, unit){
        var text ='';

        if(radioValue !== 'colWidthSame'){
        
            var colUnitCheck = unit == 'colPercent' ? '%' : 'px';

            var colInputCount = document.querySelector('.colbox').getElementsByTagName('input');
            text = '<colgroup>';

            for(var i = 0; i < colInputCount.length; i++){
                if(colInputCount[i].value === ''){
                    text += "<col>"
                }else{
                    text += '<col style="width:' + colInputCount[i].value + colUnitCheck + '">';
                }
            }

            text += '</colgroup>';

            // return v.codeHtml += colWStrig;
        }

        return text;
    }

    //최종 table 생성
    function createHtml(row,col,th){
        var text = '';

        for(var i = 0; i < row; i++ ){
            text += '<tr>'

            for(var j =0; j < col; j++){

                if(th === 'thTop' && i === 0){
                    text += '<th></th>'
                }else if(th === 'thLeft' && j === 0){
                    text += '<th></th>'
                }else{
                    text += '<td></td>';
                }
            }
            text += '</tr>'
        }
        text += '</table>';


        return text;
    }


    function OptionCheck(radioName){
        radioName.forEach(function(item, index) {
            if(item.checked) return item.getAttribute('id');
        });
    }

    function createTableHandler2(){
        var codeHtml = '<table>';
        optionValue.captionRValue = OptionCheck(v.captionRadio);
        optionValue.thChecked = OptionCheck(v.thRadio);
        optionValue.colWidthOpCheck = OptionCheck(v.colRadio);
        optionValue.rowCount = document.getElementById('rowCount');
        optionValue.colCount = document.getElementById('colCount');

        codeHtml += captionContent(optionValue.captionRValue,document.getElementById('captionText'));

        codeHtml += colWidthCheck(optionValue.colWidthOpCheck, optionValue.colUnitOpCheck);

        codeHtml += createHtml(optionValue.rowCount,optionValue.colCount, optionValue.thChecked)

        v.codeContent.innerHTML = codeHtml;
        document.getElementById('htmlCode').textContent = codeHtml;
    }
    


    return function(){
        document.getElementById('colsetBox').addEventListener("click",function(e){
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


        document.getElementById('captionBox').addEventListener("click",function(e){
            if(e.target && e.target.nodeName == 'LABEL'){
                captionOpCheck(e.target);
            }
        });

        document.getElementById('thPositionBox').addEventListener("click",function(e){
            if(e.target && e.target.nodeName == 'LABEL'){
                thOpCheck(e.target);
            }
        });

        document.getElementsByClassName('unit')[0].addEventListener("click",function(e){
            if(e.target && e.target.nodeName == 'LABEL'){
                colUnitChange(e.target);
            }
        });

        //bind 사용
        document.getElementsByClassName('btn_create')[0].addEventListener("click",function(){createTableHandler2(); document.getElementsByClassName('result_wrap')[0].className = 'result_wrap'}.bind(this),false);
        v.colCount.addEventListener("change",function(e){
            colWidthHandler()
        }.bind(this),false);
        document.getElementById('codeBtn').addEventListener("click",function(e){
            if(!this.parentNode.classList.contains("hide")){
                this.parentNode.className += ' hide';
            }else{
                this.parentNode.className = 'result_wrap';
            }
        });
    }
}



