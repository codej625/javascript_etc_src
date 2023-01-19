# console을 알아보자!

```javascript
console.log('기본');
console.info('정보');
console.warn('경고');
console.error('에러');
```

<br/>

```javascript
const a = 1;
const b = 'hello';
const c = true;
console.log(a); // 하나만 로그
console.log(a, b, c); // 여러 개를 동시에 로그
console.log('%d는 숫자 %s는 문자열', a, b); // C 언어처럼 로그
```
```
마지막은 C언어의 printf처럼 %d와 %s를 뒤에 입력한 인자로 치환한다. 
그냥 console.log(`${a}는 숫자 ${b}는 문자열`) 이렇게 템플릿 문자열을 쓰는게 자바스크립트에서는 익숙한 방법이다.
```

<br/>

## dir

```
객체는 dir, 나머지는 log로 로깅하면 편하다.
```
```javascript
console.log(document.body);
```
```
DOM 객체의 메서드가 뭐가 있는지 보고싶은데 태그만 보인다. 이럴 때 dir을 쓴다.
```
```javascript
function f() { return true; }
console.log(f);
console.dir(f);
```