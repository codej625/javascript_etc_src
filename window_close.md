# confirm, window.close()를 사용하여 창을 닫아보자!

```html
<button onclick="close();">닫기</button>
```
```javascript
function ordersCancel() {
	const select = confirm('window off');
	
	if (select) {
		alert('창이 닫힙니다.');
		window.close(); // window close
	} else {
		return false;
	}
}
```