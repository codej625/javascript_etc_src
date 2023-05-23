# axios를 API통신을 하고 멀티 다운로드를 구현해보자.

```javascript
let count = 0;		

axios.get(`/exportExcelData?code=${productCode}`)
  .then((res) => {
    count++; // count
    const result = res.data;

    return result;
  })
  .then(() => {
    if (count === length) {
      setTimeout(() => {
        // logic
        setTimeout(() => {
          // logic
        }, 1000);
      }, 2000);
    }
  })
  .then(() => {
    if (count === length) {
      setTimeout(() => {
        const select = confirm('새로고침 하시겠습니까?');
        if(select) {
          return location.href = '/url';
        } else {
          alert('새로고침을 취소하였습니다.');
        }
      }, 10000);
    }
  })
  .catch((err) => {
    console.log('error => ', err);
  });
//		.finally(() => {});
```