var codeContent = document.querySelector('.table_code'),
    captionRadio = document.getElementsByName("caption"),
    thRadio = document.getElementsByName('thPosition'),
    colRadio = document.getElementsByName('colWidth'),
    captionText = document.getElementById('captionText'),
    rowCount = document.getElementById('rowCount'),
    colCount = document.getElementById('colCount'),
    colbox = document.querySelector('.colbox'),
    colUnit = document.getElementsByName('colUnit'),
    allInput = document.querySelectorAll('.inpt'),
    colWidthInput =null,
    colCurrentCheckPre = 0;

var unitText = {
    colPercent : '%',
    colPx : 'px'
}
var captionText = {
    captionShow : '<caption>',
    captionHide : '<caption class="caption_blind">'
}


//모든 input값 체크, 빈값이면 alert
function allInputValue(inputTag){
    for(var i = 0; i < inputTag.length ; i++){
        if(!inputTag[i].value){
            alert("input 값 써주세요");
            inputTag[i].focus();
            return false;
        }
    }
    return true;
}

// 선택된 label값을 가져온다.
function OpRadioCheck(radioName){
    for(var i =0 ; i < radioName.length; i++){
        if(radioName[i].checked) return radioName[i].getAttribute('id');
    }
}

//모든 input에 값이 있다는 가정하에(allInputValue() 함수 실행하기때문) input 값을 리턴한다..
function getValue(input){
    return input.value;
}


/**
 * caption html 을 만든다
 * @param {Object} radioValue
 * @param {String} captionInptext
 * @return {String} return capion tag String
 */
function captionContent(radioValue,captionInptext){
    var text = '';

    switch(radioValue){
        case 'captionShow' :
            text += '<caption>';
        break;
        case 'captionHide' :
            text += '<caption class="caption_blind">';
        break;
    }

    return text + captionInptext + '</caption>';
}


//colgroup html 만들기
function colWidthContents(list,unit){
    var text = '<colgroup>';

    for(var i = 0; i < list.length; i++){
        if(list[i].value === ''){
            text += "<col>"
        }else{
            text += "<col style=width:" + list[i].value + unit +">";
        }
    }

    return text += '</colgroup>';
}

/**
 * 행 열 (tbody) html 만들기
 * @param {string} row
 * @param {string} col
 * @param {string} th
 * @return {String} return tr/td tag String
 */
function tbodyContent(row, col,th){
    var text = '';

    for(var i = 0; i < Number(row); i++ ){
        text += '<tr>'

        for(var j =0; j < Number(col); j++){
            text += thPositionFun(th,i,j);
        }
        text += '</tr>'
    }

    return text;
}

/**
 * th or td 선택
 * @param {string} th
 * @param {Number} i 번째
 * @param {Number} j 번째
 * @return {String} return tr/td tag String
 */
function thPositionFun(th,i,j){
    var thtag='';

    if((th === 'thLeft' && j == 0) || (th === 'thTop' && i === 0)){
        thtag = '<th></th>';
    }else thtag ='<td></td>';

    return thtag;
}

//열 input 체크
//열 input 값 만큼 input 만들기.
function loopContents(colCount,contents){
    var text ='';
    for(var i =0 ; i < colCount; i++){
        text += contents;
    }

    return text;
}

/**
 *
 * @param {*} inText
 * @param {*} obj
 */
function changeText(inText, obj){
    return obj[inText];
}




/**
 * html 합하기
 * @param {string} captionHtml
 * @param {string} tbodyhtml
 * @return {String} return table code String
 */
function createTableHandler2(captionHtml,colgrouphtml,tbodyhtml){
    return '<table>' + captionHtml + tbodyhtml + '</table>';
}


//생성 버튼 클릭 이벤트
document.querySelector('.btn_create').addEventListener("click",function(){
    var tablehtmlCode='';

    //caption input에 값이 있는지 체크
    if(allInputValue(allInput)){
        tablehtmlCode = createTableHandler2(
            captionContent(OpRadioCheck(captionRadio),getValue(captionText)),
            colWidthContents(colWidthInput),
            tbodyContent(getValue(rowCount),getValue(colCount),OpRadioCheck(thRadio))
        );
        codeContent.innerHTML = tablehtmlCode;
        document.getElementById('htmlCode').textContent = tablehtmlCode
    }
});


//col 다르게 나누기 radio 버튼 이벤트
document.getElementById('colsetBox').addEventListener("click",function(e){
    event.stopPropagation();

    if(e.target.nodeName == 'LABEL' || e.target.nodeName == 'INPUT'){
        if(e.target.id !== 'colWidthSame'){
            document.querySelector('.unit').style.display = 'block';
        }else {
            document.querySelector('.unit').style.display = 'none';
        }
    }

    var unit = changeText(OpRadioCheck(colUnit),unitText);
    colbox.innerHTML = loopContents(getValue(colCount),'<div><input type="number" min="0" class="inp_col_width">'+unit+'</div>');
    colWidthInput = document.querySelectorAll('.inp_col_width');
});

//열 input change event
// colCount.addEventListener("change",function(e){
//     var unit = OpRadioCheck(colUnit) == 'colPercent' ? '%' : 'px';
//     loopContents(getValue(colCount),'<div><input type="number" min="0" class="inp_col_width">'+unit+'</div>')
//     colWidthInput = document.querySelectorAll('.inp_col_width');
// });
