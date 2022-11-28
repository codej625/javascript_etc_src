# for of문을 사용해보자

```javascript
function _table(res) {
  let html = '';

  for(let result of res) {
    html += `<td>${result.seq}</td>
             <td>${result.date}</td>
             <td>${result.contant}</td>`
  }
  document.getElementById('table_01').innerHTML = html;
}
```
<br>
```
위에 소스를 비동기 통신에 활용하여 table을 만들어보자!
```