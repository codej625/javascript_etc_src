# for 대신 forEach문을 사용해보자!

```javascript
// form의 id를 가져와서 자식 노드들을 제어
const formArray = document.querySelectorAll('#formValue');
// for문으로 객체를 key : value 형식으로 담기 위한 변수이다.
let obj         = {};
```

```
일반적으로 사용되는 for문을 사용해보자
```

```javascript
for (let i = 0; i < formArray.length; i++) {
  obj[formArray[i].name] = formArray[i].value;
}
console.log('item => ', obj);
```

```
위에 형태로 key : value 방식으로 객체를 만드는게 가능하다.
하지만 순차적으로 데이터를 뽑아내고 있는 상황에서 굳이 for문을 사용 할 필요가 없다.
forEach문을 사용해보자
```

```javascript
formArray.forEach((item, idx) => {
  console.log('item => ', obj[item.name] = item.value);
});
console.log('item => ', obj);
```

```
아주 간단해졌지만 에러가 발생한다.(forEach is not a function error)
이유는 간단하다.
유사 배열(짭 배열)에 형태일 때는 forEach문이 작동 할 수 없기 때문

참고 => "Array 형태"란 arguments가 length 속성과 더불어 0부터 인덱스 된 다른 속성을 가지고 있지만, 
Array의 forEach, map과 같은 내장 메서드를 가지고 있지 않다는 뜻.

해결방법은 의외로 간단하다.
array 형태 객체를 array로 만들어서 돌리면 될 일이다.
```

```javascript
Array.from(${arguments}).forEach(
  function(element, index, array){ 
      // 적용하고 싶은 코드
      ...
  }
);
```

```
끝
```