# forEach에 click event를 조금 더 알아보자!

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <table id="table">
    <thead>
      <tr>
        <th>columns1</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="columns">
          <input 
            type="hidden" 
            name="1" 
            value="1"
          >
          item1
        </td>
      </tr>
      <tr>
        <td class="columns">
          <input 
            type="hidden" 
            name="2" 
            value="2"
          >
          item2
        </td>
      </tr>
      <tr>
        <td class="columns">
          <input 
            type="hidden" 
            name="3" 
            value="3"
          >
          item3
        </td>
      </tr>
    </tbody>
  </table>

</body>

</html>
```

```javascript
<script>
  function btn() {

    const result = document.querySelectorAll('.columns');

    result.forEach((item, idx) => {
      item.onclick = () => {
        console.log(item.childNodes[1].value);
      };
    });
  }
  btn();
</script>
```