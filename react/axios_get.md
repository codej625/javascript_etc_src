# axios를 사용해보자!

## Axios란?
```
Axios는 node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트 입니다. 
그것은 동형 입니다(동일한 코드베이스로 브라우저와 node.js에서 실행할 수 있습니다). 
서버 사이드에서는 네이티브 node.js의 http 모듈을 사용하고, 클라이언트(브라우저)에서는 XMLHttpRequests를 사용합니다.
```
<br>

### 특징
1. 브라우저를 위해 XMLHttpRequests 생성
2. node.js를 위해 http 요청 생성
3. Promise API를 지원
4. 요청 및 응답 인터셉트
5. 요청 및 응답 데이터 변환
6. 요청 취소
7. JSON 데이터 자동 변환
8. XSRF를 막기위한 클라이언트 사이드 지원
<br>

```
npm 사용하기:

$ npm install axios
```
<br>

```
bower 사용하기:

$ bower install axios
```
<br>

```
yarn 사용하기:

$ yarn add axios
```
<br>

```
jsDelivr CDN 사용하기:

<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```
<br>

```
unpkg CDN 사용하기:

<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```
<br>
<br>

### Axios를 사용하기 위한 기본 예제

```javascript
GET 요청 수행하기

const axios = require('axios');

// 지정된 ID를 가진 유저에 대한 요청
axios.get('/user?ID=12345')
  .then(function (response) {
    // 성공 핸들링
    console.log(response);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });

// 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });  

// async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```