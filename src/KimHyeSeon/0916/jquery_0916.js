$(document).ready(function() {
    //예제 속성 제거
    function codeClear() {
        $('.ex_code *').css('color','');
        $('.ex_code *').css('background-color','');
        $('.ex_code *').css('border','');
    }

    //기본 이벤트와 이벤트 전달
    //예제 1-1
    $('#ex1-1').click(function() {
        codeClear();
        $('#ex1 a').click(function(event) {
            $(this).css('background-color','blue');
            event.preventDefault();
        });    
        $('#ex1 h3').click(function() {
            $(this).css('background-color','red');
        });
    });    
    //예제 1-2
    $('#ex1-2').click(function() {
        codeClear();
        $('#ex1 a').click(function(event) {
            $(this).css('background-color','blue');
            event.stopPropagation();
            event.preventDefault();
        });    
        $('#ex1 h3').click(function() {
            $(this).css('background-color','red');
        });
    }); 
    //예제 1-3
    $('#ex1-3').click(function() {
        codeClear();
        $('#ex1 a').click(function(event) {
            $(this).css('background-color','blue');
        });    
        $('#ex1 h3').click(function() {
            $(this).css('background-color','red');
            return false;
        });
    });

    //이벤트 연결 범위 한정
    //예제 2-1
    $('#ex2-1').click(function() {
        $('#ex2 h3').on('click', function() { //h3에 이벤트 연결
            var length = $('#ex2 h3').length;
            var targetHTML = $(this).html();
            $('#ex2').append('<h3>' + length + ' - ' + targetHTML + '</h3>');
        });
    });

    //예제 2-2
    $('#ex2-2').click(function() {
        $('#ex2').on('click', 'h3', function() { //h3의 상위 id="ex2"에 이벤트 연결
            var length = $('h3').length;
            var targetHTML = $(this).html();
            $('#ex2').append('<h3>' + length + ' - ' + targetHTML + '</h3>');
        });
    });

    //마우스 이벤트 예제3
    $('.outer').mouseover(function() {
        $('.result').append('<p>mouseover</p>');
    }).mouseenter(function() {
        $('.result').append('<p>mouseenter</p>');
    });

    //키보드 이벤트 예제4
    $('#ex4 textarea').keyup(function() {
        //남은 글자 수를 구함
        var inputLength = $(this). val().length;
        var remain = 100 - inputLength;

        //문서객체에 입력
        $('#ex4 h3').html(remain);
    })

    //윈도우 이벤트 예제5
    $(window).resize(function() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        $('.windowWidth').html('width: ' + windowWidth + 'px /');
        $('.windowHeight').html('height : ' + windowHeight + 'px');
    });

    //입력 양식 이벤트 예제6-1
    $('#exForm').click(function() {
        $('#ex6-1').change(function() {
            $('#ex6-1').css('border','2px solid #1dbe00');
        });
        
        $('#ex6-2').focus(function() {
            $('#ex6-2 + label').css('color','red');
        });

        $('#ex6-3').blur(function() {
            $('#ex6-3 + label').css('color','red');
        });
    });
});