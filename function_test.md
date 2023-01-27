# 실용적인 함수형 프로그래밍을 위한 테스트를 해보자!

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>script</title>
</head>

<body>
  <button onclick="num3();">button</button>
</body>

</html>
```

<br/>

```javascript
// 외부에서 함수를 호출할때는 순서의 영향을 받지 않는다.
const num3 = () => {
  const addNum = num1();
  console.log('1. addNum => ', addNum);

  return console.log('2. addNum => ', addNum + 1);
}
const num1 = () => {
  return 9;
}
const num2 = res => {
  return console.log(res + 1);
}
// script 안에서는 순서대로 스크립트가 실행되어야 에러가 뜨지 않는다.
const addFunc = num2(num1());
```