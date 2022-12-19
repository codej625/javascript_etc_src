# table의 요소를 클릭해서 값을 가져와보자!

```html
<table id="table">
  <thead>
    <tr>
      <th>columns1</th>
      <th>columns2</th>
      <th>columns3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>item1</td>
      <td>item2</td>
      <td>item3</td>
    </tr>
  </tbody>
</table>
```

```javascript
btn();

function btn() {

  const result = document.querySelectorAll('#table > tbody > tr > td');

  result.forEach((item, idx) => {
    item.onclick = () => {
      console.log(item);
    };
  });
}
```