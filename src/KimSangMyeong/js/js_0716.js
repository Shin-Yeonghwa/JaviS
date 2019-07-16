$(function() {
    //현재 화면 값을 저장
	var $window = $(window);
    //배열과 length 속성을 갖는 배열과 유사 배열 객체들을 index를 기준으로 반복
	$('.content').each(function(index) {
		var $self = $(this);
		var offsetCoords = $self.offset();

		$(window).scroll(function() {
			// 현재스크롤값과 높이값과 각각의 상대 높이값 비교
			if (($window.scrollTop() + $window.height()) > offsetCoords.top && ((offsetCoords.top + $self.height()) > $window.scrollTop())) {
                //스크롤값을 나누어 이동거리 변화 측정
                var yPos = -($window.scrollTop() / 8);
				if ($self.attr('id') != 'first') {
					yPos += 126;
				}
                //이미지의 수평 위치를 고정하기 위해서 xPosition 값을 50%로 적용
                // 그다음 yPos를 yPosition에 추가하고 css에 적용
				var coords = '50%' + yPos + 'px';
				$self.css('backgroundPosition', coords);

				// section / sprite 움직임 구현
				$('.sprite', $self).each(function(index) {
					var $sprite = $(this);
					var yPos = -($window.scrollTop() / $sprite.data('speed')) + $sprite.data('offsety');
					$sprite.css('top', yPos);
				});
			}
		});
	});
});
