# 비동기 처리에 사용되는 객체인 promise를 사용해보자!

```javascript
function promiseFunc(params) {
  return new Promise((resolve, reject) => {
    // parameter를 사용하여 비동기 작업 수행
    // ...로직

    // promise object
    resolve('promise object'); // 통신 성공시
    reject(new Error('error messages')); // 통신 실패시
  });
}
// use promise object
promiseFunc() // promise chanin
  .then(result => { //
    return `${result}`;
  })
  .then(result => { // return value를 이어서 로직 수행
    console.log(result);
  })
  .catch(err => {
    console.log('err => ', err);
  });
```