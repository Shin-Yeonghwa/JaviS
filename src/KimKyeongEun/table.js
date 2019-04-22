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
var captionHtml = {
    captionShow : '<caption>',
    captionHide : '<caption class="caption_blind">'
}

//obj get
function _get(obj, key){
    return obj == null ? undefined : obj[key];
}

//input 값을 리턴한다..
function getValue(input){
    return input.value;
}

// 선택된 label값을 가져온다.
function OpRadioCheck(radioName){
    for(var i =0 ; i < radioName.length; i++){
        if(radioName[i].checked ) return radioName[i].getAttribute('id');
    }
}


//loop contents
function loopContents(count,contents,fn){
    var text ='';
    var countLength = ( (typeof count === 'number') ? count : count.length);

    for(var i = 0 ; i < countLength; i++){
        text += (fn == null ? contents : (typeof count === 'number' ? fn(i) : fn(count[i])));
    }

    return text;
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


//th or td 선택
function thPositionFun(th,i,j){
    var thtag='';

    if((th === 'thLeft' && j == 0) || (th === 'thTop' && i === 0)){
        thtag = '<th></th>';
    }else thtag ='<td></td>';

    return thtag;
}

function resetInput(input){
    for(var i =0 ;i <input.length ; i++){
        input[i].value = '';
    }
}


//생성 버튼 클릭 이벤트
document.querySelector('.btn_create').addEventListener("click",function(){
    var tablehtmlCode='';

    //caption input에 값이 있는지 체크
    if(allInputValue(allInput)){
        codeContent.innerHTML = '<table>'
        + _get(captionHtml , OpRadioCheck(captionRadio)) + getValue(captionText) + '</caption>'
        + '<colgroup>'
        + loopContents(colWidthInput, null , function(list){
            return list.value == '' ? "<col>" : "<col style=width:" + list.value + _get(unitText , OpRadioCheck(colUnit)) +">";
         })
        + '</colgroup>'
        + loopContents(Number(getValue(rowCount)), null , function(val){
            var text = '<tr>';

            text += loopContents(Number(getValue(colCount)), null,function(j){
                return thPositionFun(OpRadioCheck(thRadio),val,j);
            });
            return text += '</tr>'
          })
        + '</table>';
        // document.getElementById('htmlCode').textContent = tablehtmlCode
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
            resetInput(colWidthInput);
        }
    }
});

//열 input change event
colCount.addEventListener("change",function(e){
    colbox.innerHTML = loopContents(Number(getValue(colCount)),'<div><input type="number" min="0" class="inp_col_width"></div>',null);;
    colWidthInput = document.querySelectorAll('.inp_col_width');
});
