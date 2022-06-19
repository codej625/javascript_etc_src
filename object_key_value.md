# 객체(object)의 키(key)와 값(value)을 배열로 얻기

ex) 객체 예시
const obj = {
  a: 'string',
  b: 00,
  c: {},
  d: true
};

1. obj 객체를 구성하는 전체 key를 배열로 얻는 코드
console.log(Object.keys(obj));
// Array 결과값 ["a", "b", "c", "d"]

2. obj 객체를 구성하는 전체 value을 배열로 얻는 코드
console.log(Object.values(obj)); 
// Array ['string', 00, Object{}, true]

3. 배열에 대해서 각 구성 항목을 참조하는 코드
for(i of Object.values(obj)) {
    console.log(i);
}
/* 
'string'
00
Object{}
true
*/