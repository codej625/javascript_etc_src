# 삼항연산자와 백틱을 사용하여 undefined 처리를 해보자!

```javascript
ex)
const input += `<input
									class=""
									type="text"
									style=""
									value="${(object.elements !== undefined) ? object.elements : ''}"
								>`
```
