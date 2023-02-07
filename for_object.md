# for문과 forEach문을 활용하여 객체를 만들어보자

forEach문
```javascript
result = data.map(elements => {
  const validJson = {
    column: elements._1,
    column: elements._2,
    column: elements._3
  };
  return validJson;
});
```

for문
```javascript
const data = [1, 2];
let validJson = [];

for (let i = 0; i < data.length; i++) {
  validJson.push({
    column: data[i]._1,
    column: data[i]._2
  });
}
```