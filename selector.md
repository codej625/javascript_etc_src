# name, class, id의 selector 방법과 주의 사항을 알아보자

## jQuery 사용시
### jQuery는 Javascript와 달리 복수형 선택자도 인덱스를 지정해주지 않아도 된다.

```javascript
// 1. By id
var idSelector   = $('#id').attr('name');

// 2. By class
var nameSelector = $('.class').attr('name');

// 3. By name( {} <= 속에 tag, name을 대입 )
var nameSelector = $('{input}[name={name}]');
```

## javascript 사용시
### getElementById의 element는 단수형이라 인덱스를 지정해줄 필요가 없지만, class와 name은 복수형이기 때문에 인덱스를 지정해주어야 한다.

```javascript
// 1. By id
const idSelector = document.getElementById('id');

// 2. By class
const nameSelector = document.getElementsByClassName('class')[0];

// 3. By name
const nameSelector = document.getElementsByName('name')[0];
```