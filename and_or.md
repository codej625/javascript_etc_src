# and, or 연산자를 알아보자

```javascript
ex) 예제_01

const person = {age: 10};

if (
  person.name === undefined ||
  person.name === false     ||
  person.name === ''        ||
  person.name === null      ||
  person.name === 0
) {
  console.log('no name');
} else {
  console.log(person.name);
}
// 위에 코드를 or연산자를 사용하여 한줄로 표현해보자.

ex) 예제_02

console.log(person.name || 'no name');

// or연산자를 사용하면 첫번째 값이 있을 경우 첫번째 값을 return하고
// 그렇지 않을 경우 두번째 값을 return 한다.
```
<br>

```javascript
ex) 예제_03

if (person.age > 19) {
  console.log('운전 가능');
} else {
  console.log(false);
}
// 위에 코드를 and연산자를 사용하여 한줄로 표현해보자.

ex) 예제_04

console.log(person.age > 19 && '운전 가능');

// and연산자는 두개의 값이 참일 때 마지막 값을 return 한다.
```
<br>

```  
or: 기본값
and: 특수한 상황에서 조건문 대용으로 사용
```

