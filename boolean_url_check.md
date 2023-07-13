# url parameter를 활용해서 조건을 on / off 시켜보자

```html
<div class="alert-div">
  <p>alert이라고 합시다.</p>
  <button type="button" onclick="closeBtn();">닫기</button>
</div>
```

```javascript
(() => {
  const queryString = location.href; // 현재 주소를 가져온다.
  const urlParams = queryString.split('?')[1]; // ?를 기준으로 문자열을 자른다.
  const parameters = urlParams.split('&'); // &를 기준으로 문자열을 자른다.
  const findParma = parameters.filter(element => element === 'test=test'); // 해당 값이 있으면 배열을 반환

  if (findParma[0] === 'test=test') {
    const div = document.querySelector('.alert-div');
    div.style.display = 'block';
  }
})();

function closeBtn() {
  location.href = 'http://127.0.0.1:5500/test.html?test2=test2';
}
```