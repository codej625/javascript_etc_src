# querySelectorAll를 활용하여 input값을 컨트롤 해보자!

```html
<table>
  <tr>
    <td>
      <input class="inputName" name="first" type="text">
      first
    </td>
  </tr>
  <tr>
    <td>
      <input class="inputName" name="second" type="text">
      second
    </td>
  </tr>
  <tr>
    <td>
      <input class="inputName" name="third" type="text">
      third
    </td>
  </tr>
</table>
<button onclick="sendForm();">send</button>
```

```javascript
function sendForm() {
  const inputName = document.querySelectorAll('.inputName'),
        obj = {};
  
  inputName.forEach(item => {
    obj[item.name] = item.value;   
  });
  
  console.log(obj);
}
```