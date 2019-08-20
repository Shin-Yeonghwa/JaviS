//예제 속성 제거
function codeClear() {
    $('.ex_code *').css('color','');
    $('.ex_code *').css('background-color','');
}

//자손선택자
$('#btnSelector').click(function() {
    codeClear();
    $('.selector_code > *').css('color','red');
});

//후손선택자
$('#btnSelector2').click(function() {
    codeClear();
    $('.selector_code *').css('color','red');
});

//속성 선택자
$('#btnSelector3').click(function() {
    codeClear();
    $('[id="title"]').css('background-color','#ff0');
});

$('#btnSelector4').click(function() {
    codeClear();
    $('input[title|="Tomorrow"]').css('background-color','#ff0');
});

$('#btnSelector5').click(function() {
    codeClear();
    $('input[name~="nation"]').css('background-color','#ff0');
});

$('#btnSelector6').click(function() {
    codeClear();
    $('input[name^="nation"]').css('background-color','#ff0');
});

$('#btnSelector7').click(function() {
    codeClear();
    $('a[href$=".net"]').css('background-color','#ff0');
});

$('#btnSelector8').click(function() {
    codeClear();
    $('input[name*="nation"]').css('background-color','#ff0');
});

//필터 선택자
$('#btnSelector9').click(function() {
    codeClear();
    var value = $('select > option:selected').val(); //val()를 매개변수 없이 사용하면 vlaue 속성을 알아낼 수 있음
    alert(value);
});

$('#btnSelector10').click(function() {
    codeClear();
    $('.selector_code:eq(0) li:even').css('background-color','#ff0');
});