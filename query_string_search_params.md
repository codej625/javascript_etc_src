# url 파라미터에서 파라미터를 찾아 사용하자!

```
예를 들어 utm값을 가져온다고 해보자
```
```javascript
var queryString = new URLSearchParams(decodeURI(window.location.search));
var utm_source = queryString.get("utm_source") === null || queryString.get("utm_source") === "" ? "DIRECT" : queryString.get("utm_source");
var utm_term = queryString.get("utm_term") === null || queryString.get("utm_term") === "" ? "DIRECT" : queryString.get("utm_term");
```