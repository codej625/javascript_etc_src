# url parameter를 활용해서 조건을 on / off 시켜보자

```javascript
const query = location.href.search;
const params = query.split('&');

const parameters = {};

params.forEach(element => {
  let pair = params.split('=');
  let key = decodeURIComponent(pair[0]);
  let value = decodeURIComponent(pair[1]);

  parameters[key] = value;
});

console.log(parameters);
console.log(parameters.key);
```