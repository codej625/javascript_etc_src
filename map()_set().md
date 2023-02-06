# ES6 Map(), Set()에 대해 알아보자!

```
자바를 경험해본 사람이라면 쉬운 개념이지만
자바스크립트를 하는 사람 입장에서는 생소할 수 있으므로 정리하였다.
```

<br/>

1. Map
```
Map()은 자바스크립트의 key-value 페어(pair)로 이루어진 컬렉션
key를 사용해서 value를 get, set 할 수 있음
key 들은 중복될 수 없음: 하나의 key에는 하나의 value만
key로 사용할 수 있는 데이터형: string, symbol(ES6), object, function &gt;&gt; number는 사용할 수 없음에 주의!
```
예시
```javascript
// 새로운 map 을 만들고 map 에 key, value 엔트리를 추가
let me = new Map();
me.set('name', 'kevin');
me.set('age', 28);
console.log(me.get('age'); // 28
// 대괄호를 사용해서 map 을 선언하는 방법
const roomTypeMap = new Map(
  [
    ["01", "원룸(오픈형)"],
    ["02", "원룸(분리형)"],
    ["03", "원룸(복층형)"],
    ["04", "투룸"],
    ["05", "쓰리룸"]
  ]
);
// 새로운 map 을 만들고 그 데이터를 기존의 [key, value] 페어컬렉션으로 채움
let you = new Map().set('name', 'paul').set('age', 34);
console.log(you.get('name')); // 'paul'
// has(): 주어진 key 가 존재하는지 확인
console.log(me.has('name')); // true
// size: map 에 담겨진 엔트리의 개수를 조회
console.log(you.size); // 2
// delete(): 엔트리를 삭제
me.delete('age');
console.log(me.has('age')); // false
// clear(): 모든 엔트리를 삭제
you.clear();
console.log(you.size); // 0
```
<참고> Map 과 Object 비교
```
Object 의 key 는 string 과 symbol(ES6) 만 가능하지만, map은 어떤 값도 가능
Object에서는 크기를 추적해서 알 수 있지만, map은 손쉽게 얻을 수 있음(size)
```

<br /><br />

2. Set
```
Set() 은 value 들로 이루어진 컬렉션(“집합”이라는 표현이 적절)
Array 와는 다르게 Set 은 같은 value 를 2번 포함할 수 없다.
따라서 Set에 이미 존재하는 값을 추가하려고 하면 아무 일도 발생하지 않는다.
```
예시
```javascript
// 비어있는 새로운 set 을 만듬
let setA = new Set();
// 새로운 set 을 만들고 인자로 전달된 iterable 로 인자를 채움
let setB = new Set().add('a').add('b');
setB.add('c');
console.log(setB.size); // 3
// has(): 주어진 값이 set 안에 존재할 경우, true 를 반환
// indexOf() 보다 빠름. 단, index 가 없음
console.log(setB.has('b')); // true
// set 에서 주어진 값을 제거
setB.delete('b');
console.log(setB.has('b')); // false
// set 안의 모든 데이터를 제거
setB.clear();
console.log(setB.size); // 0
```
<참고>
```
has() 는 indexOf() 보다 빠르다. 
다만, index 이 존재하지 않기때문에 index 로 value 로 접근할 수 없다.
```