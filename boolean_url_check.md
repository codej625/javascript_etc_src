# url parameter를 활용해서 조건을 on / off 시켜보자

```html
<div class="alert-div" style="display: none;">
  <p>TEST ALERT</p>
  <button type="button" onclick="closeBtn();">CLOSE</button>
</div>
```

```javascript
(() => {
  let parameters;
  const queryString = location.href; /* 현재 주소를 가져온다. */
  const urlParams = queryString.split('?')[1]; /* ?를 기준으로 문자열을 자른다. */

  try {
    parameters = urlParams.split('&'); /* &를 기준으로 문자열을 자른다. */
  } catch {
    console.error('err => parameter empty');

    return false;
  }
  const chkParam = 'test=test'; /* 조건문에 사용되는 파라미터 */
  const findParam = parameters.filter(element => element === chkParam); /* 해당 값이 있으면 배열을 반환 */

  if (findParam[0] === chkParam) {
    const div = document.querySelector('.alert-div');
    div.style.display = 'block';
  }
})();

function closeBtn() {
  let params = [];
  const chkParam = 'test=test'; /* 조건문에 사용되는 파라미터 */
  const urlObj = new URL(location.href); /* url 객체화 */
  const path = urlObj.pathname.substring(1); /* pathname에서 '/' 제외 */
  const _queryString = urlObj.search.substring(1); /* search에서 '?' 제외 */
  const queryString = _queryString.split('&'); /* query split */

  /* 특정 param 제거 */
  queryString.forEach(param => {
    if (param !== chkParam) params.push(param);
  });
  params = params.join('&');

  if (params === '') {
    return location.href = `/${path}`;
  }

  return location.href = `/${path}?${params}`;
}
```