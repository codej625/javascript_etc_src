# object => string 형태로 parse해보자!

```javascript
// object
const person = {
  name: "js",
  age: "4",
  sex: "female"
};

// JSON.stringify을 사용하여 object => string parse
const person_str = JSON.stringify(person);

// object
console.log(typeof(person));
// string
console.log(typeof(person_str));
```
<br>

```html
<html>
  <body>
    <script>
      // 4가지 string을 만들어놓고 console에서 JSON.parse() 함수를 이용해서 변환해보자.
      const str_test_01 = "{ name: 'js', age: 10, sex: 'female' }";
      const str_test_02 = "{ 'name': 'js', 'age': 20, 'sex': 'male' }";
      const str_test_03 = '{ name: "js", age: 30, sex: "female" }';
      const str_test_04 = '{ "name": "js", "age": 40, "sex": "male" }';

      // string => object
      console.log(JSON.parse(str_test_01));
      console.log(JSON.parse(str_test_02));
      console.log(JSON.parse(str_test_03));
      console.log(JSON.parse(str_test_04));
    </script>
  </body>
</html>
```
<br>

```
str_test_04 변수만 정상적으로 parse 됐다.
Javascript 안에서 object로 만들 때는 네 가지 방법 다 가능하지만
JSON.parse() 를 이용할 때는 key와 value가 모두 쌍따옴표로 감싸져야 한다.
```