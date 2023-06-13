# script로 alert창을 만들어보자

```css
.alert-check { display: none; position: relative; justify-content: center; align-items: center; z-index: 2; }
.alert-check > div { padding: 25px; position: absolute; top: 50px; background: #fff; width: 300px; border-radius: 10px; }
.shadow { position: fixed; left: 0; top: 0; background: rgba(0, 0, 0, 0.52); width: 100%; height: 100vh; z-index: 1; display: none; }
```

```html
<div class="shadow"></div><!-- Background -->
<div class="alert-check">
  <div></div>
</div>
```

```javascript
function showAlert(text) {
	let innerText = text; // arr obj
	const shadow = document.querySelector('.shadow');
	const alertchk = document.querySelector('.alert-check');
	const message = document.querySelector('.alert-check > div');
	const result = innerText.split(',');
	innerText = '';
  
	result.forEach(element => {
		innerText += `${element}<br>`;
	});
	shadow.style.display = 'block';
	alertchk.style.display = 'flex';
	
	innerText += `<br><button style="float: right;" class="btn btn-primary btn-sm" onclick="alertClose();">닫기</button>`;
	message.innerHTML = innerText;
}
function alertClose() {
	const alertchk = document.querySelector('.alert-check');
	const shadow = document.querySelector('.shadow');
	alertchk.style.display = 'none';
	shadow.style.display = 'none';
}
```