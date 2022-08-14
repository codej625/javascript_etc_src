# 생김새가 똑같지만 사용법이 다른 spread 와 rest

## spread

```
일단 spread 문법부터 알아봅시다. 
spread 라는 단어가 가지고 있는 의미는 펼치다, 퍼뜨리다 입니다. 
이 문법을 사용하면, 객체 혹은 배열을 펼칠수있습니다.
```

```javascript
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  name: '슬라임',
  attribute: 'cute'
};

const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

```
이 코드에서는 먼저 slime 이라는 객체를 선언했습니다. 
그리고 cuteSlime 이라는 객체를 만들었는데요, 
기존에 선언한 slime 을 건들이지 않고 새로운 객체를 만들어서 slime 이 가지고 있는 값을 그대로 사용하였습니다.

그 다음에는 purpleCuteSlime 이라는 객체를 만들었는데요, 
이 객체는 cuteSlime 이 가지고 있는 속성을 그대로 사용하면서 추가적으로 color 가 추가되었습니다.

위 코드에서의 핵심은, 기존의 것을 건들이지 않고, 새로운 객체를 만든다는 것 인데요, 이러한 상황에 사용 할 수 있는 유용한 문법이 spread 입니다.
아까 코드는 spread 문법을 사용하면 다음과 같이 작성 할 수 있습니다.
```

```javascript
const slime = {
  name: '슬라임'
};

const cuteSlime = {
  ...slime,
  attribute: 'cute'
};

const purpleCuteSlime = {
  ...cuteSlime,
  color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
```

```
여기서 사용한 ... 문자가 바로 spread 연산자입니다.
spread 연산자는 배열에서도 사용 할 수 있습니다.
```

```javascript
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals);
console.log(anotherAnimals);
```

```
기존의 animals 는 건드리지 않으면서, 새로운 anotherAnimals 배열에 animals 가 가지고 있는 내용을 모두 집어넣고, 
'비둘기' 라는 항목을 추가적으로 넣었습니다.

배열에서 spread 연산자를 여러번 사용 할 수도 있습니다.
```

```javascript
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
```


## rest

```
rest는 생김새는 spread 랑 비슷한데, 역할이 매우 다릅니다.
rest는 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능합니다.
```

## 객체에서의 rest

```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color);
console.log(rest);
```

```
rest 안에 name 값을 제외한 값이 들어있습니다.

rest 는 객체와 배열에서 사용 할 때는 이렇게 비구조화 할당 문법과 함께 사용됩니다. 
주로 사용 할때는 위와 같이 rest 라는 키워드를 사용하게 되는데요, 추출한 값의 이름이 꼭 rest 일 필요는 없습니다.
```

```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);
```

```
이렇게 해도 무방합니다.

이어서, attribute 까지 없앤 새로운 객체를 만들고 싶다면 이렇게 해주면 되겠죠.
```

```javascript
const purpleCuteSlime = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const { attribute, ...slime } = cuteSlime;
console.log(attribute);
console.log(slime);
```

# 배열에서의 rest

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one);
console.log(rest);
```

```
배열 비구조화 할당을 통하여 원하는 값을 밖으로 꺼내고, 나머지 값을 rest 안에 넣었습니다.
반면 이렇게 할 수는 없답니다.
```

```javascript
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [..rest, last] = numbers;
```

## 함수 파라미터에서의 rest

```javascript
function sum(a, b, c, d, e, f, g) {
  let sum = 0;
  if (a) sum += a;
  if (b) sum += b;
  if (c) sum += c;
  if (d) sum += d;
  if (e) sum += e;
  if (f) sum += f;
  if (g) sum += g;
  return sum;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
```

```javascript
function sum(...rest) {
  return rest;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result);
```


