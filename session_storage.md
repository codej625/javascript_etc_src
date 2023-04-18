# sessionStorage를 사용해보자!

```javascript
const json = JSON.stringify(data);
sessionStorage.setItem("obj", json);

// ...

const jsonString = sessionStorage.getItem("obj");
const obj = JSON.parse(jsonString);
```
```
cookie보다 간단하게 세션이 끊길때까지(웹 브라우저가 종료될때까지) 저장 된다.
```