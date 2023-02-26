# 다른 url로 이동시 parameter를 가지고 가보자!

```javascript
function sendParams(url) {
  const _url = url;
  
  // 특정 값을 지정한다.
  if (_url === 'url') {
    return location.href = '주소를 만들고' + window.location.search;
  }
}
```
