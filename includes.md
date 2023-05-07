# includes에 대해 알아보자!

```
includes()는 배열에서 특정값을 포함하고 있는지를 체크해준다.
반환값은 true, false이다.
```

```javascript
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr1.includes(3)); // true
console.log(arr1.includes(10)); // false
```