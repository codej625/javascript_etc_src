# reducer를 맛만 보자!

```javascript
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.resduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);s

console.log(sumWithInitial);
// Expected output: 10
```