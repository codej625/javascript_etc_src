# forEach와 click event를 활용해 보자!

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://code.jquery.com/jquery-3.6.1.min.js"
    integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" crossorigin="anonymous"></script>
  <title>Document</title>
</head>

<body>
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
        <td class="columns">item1</td>
        <td class="columns">item2</td>
        <td class="columns">item3</td>
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
          console.log(item.innerHTML);
        };
      });
    }
    
    btn();
  </script>
```