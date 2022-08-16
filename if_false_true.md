# 잘 사용하지 않지만 유용한 부등연산자

```javascript
const isFalse = false;
const isTrue  = true;
const inNull  = null;

let   isBool  = false;


isBool = (null == null);
console.log(isBool); // true

isBool = (null != false);
console.log(isBool); // false

isBool = (null != true);
console.log(isBool); // true
```

# if문 활용
```javascript
const _isFalse = (null == false); // 조건이 틀리기에 false를 대입
const _isTrue  = (null != true);  // 조건이 맞기에 true를 대입

// if문은 true일때 실행되므로
if (!_isFalse) {
  // false에 !을 붙여서 true를 만들었기에 if문이 실행된다.
  console.log('if문 실행');
}

// if문은 true일때 실행되므로
if (!_isTrue) {
  // true에 !을 붙여서 false를 만들었기에 if문이 실행되지 않는다.
  console.log('if문 실행'); // 실행 안됨
}
```