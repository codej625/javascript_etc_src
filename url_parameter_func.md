# 다른 url로 이동시 parameter를 가지고 가보자!

```
다만 get방식으로 url이동시 사용을 추천한다.
```
```javascript
function sendParams(url) {
  const _url = url;
  
  // 특정 값을 지정한다.
  if (_url === 'url') {
    return location.href = '주소를 만들고' + window.location.search;
  }
}
```
