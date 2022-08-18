
```
// 전역 변수 초기화
let arrayString = '';
const array = ['1', '2', '3', '4', '5'];
const array2 = { '1': '가', '2': '나', '3': '다', '4': '라', '5': '마' };
```

```javascript
// 1. for
for (let i = 0; i < array.length; i++) {
    arrayString += array[i];
}
console.log('arrayString', arrayString);
// reset
arrayString = '';
```

```javascript
// 2. foreach
array.forEach(function (item, index, arr) {
    arrayString += array[index];
});
console.log('arrayString', arrayString);
// reset
arrayString = '';
```

```javascript
// 3. foreach arrow function
array.forEach(i => { arrayString += i; });
console.log('arrayString', arrayString);
// reset
arrayString = '';
```

```javascript
// 4. for in (property: object)
for (const key in array2) {
    arrayString += key + array2[key];
    console.log(`${key}: ${array2[key]}`);
}
console.log('arrayString', arrayString);
// reset
arrayString = '';
```

```javascript
// 5. for of
for (arrayString of array) {
    console.log('arrayString', arrayString);
}
// reset
arrayString = '';
```

```javascript
// 5. join (기호를 넣을 수 있다.)
arrayString = array.join('');
console.log('arrayString', arrayString);
```