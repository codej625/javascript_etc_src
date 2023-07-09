# api통신을 하여 select태그의 옵션값을 넣어보자!

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  <title>board</title>
</head>
<body>
  <table>
    <tr>
      <th class="columns">
        <select></select>
      </th>
    </tr>
  </table>
</body>
</html>
```

```javascript
(async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
    const obj = response.data;
    let board;
    
    obj.forEach((elements, idx) => {
      board += [
        `<option value="${idx}">${elements.title}</option>`, // columns
      ].join('');
    });
    const html = document.querySelector(`.columns > select`);
    
    return html.innerHTML = board;
  } catch (error) {
    console.error('err => ', error);
  }
})();
```