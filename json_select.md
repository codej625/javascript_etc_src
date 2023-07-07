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
      board = [
        `<option value="${elements.id}-1">${elements.title}</option>`, // columns 1
        `<option value="${elements.id}-2">${elements.title}-2</option>`, // columns 2
        `<option value="${elements.id}-3">${elements.title}-3</option>` // columns 3
      ].join('');
      console.log(board);
      const html = document.querySelector(`.columns${idx+1} > select`); 
      html.innerHTML = board;
    });
  } catch (error) {
    console.error('err => ', error);
  }
})();
```