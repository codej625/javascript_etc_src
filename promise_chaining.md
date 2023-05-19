# promise 객체를 chain 시켜 사용해보자!

```javascript
excelData.forEach((html) => {
  axios.get(`/`)
    .then((res) => {
      const result = res;

      return result;
    })
    .then((res) => {
      const result = res;
    })
    .then(() => {
      // ...logic
    })
    .catch((err) => {
      console.log('error => ', err);
    });
});
```