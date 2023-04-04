# 클라이언트 측에서 데이터를 저장해보자!

```
보안에 문제가 있을 수 있으니, 민감한 정보라면 쿠키와, 세션, 서버에 저장을 권장한다.
물론 localStorage에 저장된 데이터는 도메인, 프로토콜 및 포트와 같은 동일한 출처 정책(Same-Origin Policy)에 따라 접근을 제한한다.
이는 다른 도메인의 스크립트가 사용자의 로컬 스토리지에 저장된 데이터에 접근하는 것을 방지하기 때문에 최소한의 보안은 보장되며,
브라우저의 캐시를 삭제하지 않는이상 계속 남아있기 때문에 이점을 주의하자.
```
<br/>

```
데이터 저장
```
```javascript
localStorage.setItem("counter", "1");
```

```
데이터 수정(덮어쓰기)
```
```javascript
localStorage.setItem("{덮어쓸 키값}", {수정할 값});
```

```
저장된 데이터 가져오기
```
```javascript
const counterValue = localStorage.getItem("counter");
```

```
저장된 데이터 삭제하기
```
```javascript
localStorage.removeItem("counter");
```

```
저장된 모든 데이터 삭제하기
```
```javascript
localStorage.clear();
```