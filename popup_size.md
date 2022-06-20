# popup size 정하기

## 방법
function testPopUp() {
	// 크기 지정
	var width = 1280;
	var height = 720;
	// pc 화면기준 가운데 정렬
	var left = (window.screen.width / 2) - (width / 2);
	var top = (window.screen.height / 4);
	// 윈도우 속성 지정
	var windowStatus = 'width=' + width + ', height=' + height + ', left=' + left + ', top=' + top + ', scrollbars=yes, status=yes, resizable=yes, titlebar=yes';
	// 연결하고싶은 url
	var url = "/xx/xxx/result";
	// url, 별칭, window속성을 parameter로 받는다.
	window.open(url, "hello popup", windowStatus);
}
