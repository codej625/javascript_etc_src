# promise 객체를 접근해보자

```javascript
// 환율 api
function exchangeRate() {
	// date를 계산하기 위한 date() 객체 생성
	const today = date();
	// axios 동기처리
	const axiosData = async () => {
		try {
      // Lists all the available currencies in prettified json format ↓
      // https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/{ex usd}.json
			// get request (ref url => https://github.com/fawazahmed0 or https://api.exchangerate.host/convert?from=USD&to=KRW)
			const resObj = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/${today}/currencies/usd/krw.json`);
    	return resObj;
	  } catch(error) {
		  // error message
	    console.log('error => ', error);
	  }
  }
  return axiosData();
}

function addRow() {
  // 비동기 처리
  const result     = exchangeRate();
  // promise 객체를 사용하기 위한 객체 생성
  const promiseObj = new Promise((resolve, reject) => {
    resolve(result);
  });
  promiseObj.then((res) => {
    let day = res.data.krw;
    day     = day.toString().substring(0, 7);
  });
}
```