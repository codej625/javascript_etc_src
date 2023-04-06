# 비동기 함수를 선언해 보자.

```javascript
async function remainderSelect() { // async 키워드를 사용해 비동기 함수를 선언한다.
	try {
		const result = await axios.post('/remainderSelect'); // axios 
		if (result.status === 200) {
      console.log('request success');
			const variable = result.data.{data};
      // .. 로직
		}
	} catch (err) {
		console.log('error => ', err);
		// .. 로직
	}
}
```