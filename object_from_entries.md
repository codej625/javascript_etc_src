# Object.fromEntries()에 대해 알아보자!

Object.fromEntries() 메서드는 키-값 쌍의 목록(예: 배열)을 입력으로 받아 새로운 객체를 생성 한다. 
이 메서드는 배열이나 Map, 그 외 순회 가능한(iterable) 객체를 이용해 객체를 생성하는 데 사용 한다. 

예를 들어, 다음과 같은 이차원 배열을 가지고 있다고 가정한다.

```javascript
const entries = [
  ['name', 'Kim'],
  ['age', 25],
  ['city', 'Seoul']
];
```

```
Object.fromEntries() 메서드를 사용하면 위의 배열을 다음과 같은 객체로 변환할 수 있다.
```

```javascript
const obj = Object.fromEntries(entries);

console.log(obj);
// 결과: { name: 'Kim', age: 25, city: 'Seoul' }
```

```
이 메서드를 사용하면 배열이나 Map 등의 데이터 구조를 일반 객체로 쉽게 변환할 수 있어, 데이터 변환 작업을 수월하게 진행할 수 있다.
```