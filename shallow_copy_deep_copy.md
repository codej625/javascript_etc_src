# 얕은복사와 깊은복사를 알아보자

1. array

```javascript
var arr = [1,2,3];
var copy1 = arr;
var [...copy2] = arr;
var copy3 = [...arr];

arr[0] = 'String';
console.log(arr); // [ 'String', 2, 3 ]
console.log(copy1); // [ 'String', 2, 3 ]
console.log(copy2); // [ 1, 2, 3 ]
console.log(copy3); // [ 1, 2, 3 ]
```

2. object

```javascript
var prevState = {
  name: "yuddomack",
  birth: "1996-11-01",
  age: 22
};

var state = {
  ...prevState,
  age: 23
};

console.log(state); // { name: 'yuddomack', birth: '1996-11-01', age: 23 }
```