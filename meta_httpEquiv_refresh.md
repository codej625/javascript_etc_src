# 메타태그로 주소를 이동시켜보자!

```html
<input type="button" onclick="metaTag()" value="meta">
```
```javascript
function metaTag() {
  // ... 로직
  
  let meta = document.createElement('meta');
  meta.httpEquiv = "refresh"
  meta.content = content="0; url=https://www.naver.com"; // url 예시
  document.getElementsByTagName('head')[0].appendChild(meta);
}
```