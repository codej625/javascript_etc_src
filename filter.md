# filter를 실제 작업에 활용해보자!

밑에는 현재 url의 query string을 가져와 가공하고 필터를 통해 조건에 맞는 배열값을 모아 반환한다.
```javascript
(() => {
  const params = new URLSearchParams(window.location.search); /* 현주소의 파라미터를 가져온다. */
  const queryString = params.toString(); /* 객체를 문자열로 변환시킨다. */
  const splitElements = queryString.split('&'); /* 특정 문자열을 기준으로 자르고 배열값을 반환 한다. */
  /* filter는 조건에 맞는 모든 요소를 모아 배열로 반환한다. */
  const result = splitElements.filter(element => element === 'utm_source=google_pc' || element === 'utm_source=google_mo');
  /* return되는 값이 있으면 값이 0보다 크다. */
  if (result.length > 0) {
    // ... logic
  }
})();
```