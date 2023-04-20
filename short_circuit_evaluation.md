# 자바스크립트 짧은 회로 평가 Short-circuit evaluation을 사용해보자!

```javascript
let x = 10;
let y = 20;

x > y && console.log("x is greater");
x <= y && console.log("y is greater");

// "y is greater"만 console에 찍힘
```