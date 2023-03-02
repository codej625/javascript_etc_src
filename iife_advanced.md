# iife를 활용해보자!

```javascript
//==============================================================================================
(async () => { // IIFE async/await
	try {
		func(); // 작동순서 1번
		const count = await axios.get(`/${}`); // 2번
		if (count.data > 0) func2(); // 3번
  } catch (err) {
    console.log('error => ', err);
  }
})();
