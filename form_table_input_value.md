# form => table => input value를 객체에 담아 활용하자!

```html
<form id="frm">

  <table>

    <thead>
      <tr>
        <th>name</th>
        <th>age</th>
        <th>sex</th>
        <th>height</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <th>
          <input 
            name="name"
            type="text"
            placeholder="name"
          >
        </th>
        <th>
          <input 
            name="age"
            type="text" 
            placeholder="age"
          >
        </th>
        <th>
          <input 
            name="sex"
            type="text" 
            placeholder="sex"
          >
        </th>
        <th>
          <input 
            name="height"
            type="text" 
            placeholder="height"
          >
        </th>
      </tr>
      <tr>
        <td>
          <input 
            type="submit" 
            value="click!"
            onclick="frmFunc(event);"
          >
        </td>
      </tr>
    </tbody>

  </table>

</form>
```

<br/>

```javascript
 function frmFunc(event) {
  // submit stop!
  event.preventDefault();
  const obj = {};
  // form => input value => obj
  for(let i = 0; i < frm.length-1; i++) {
    const name  = document.querySelector('#frm')[i].name,
          value = document.querySelector('#frm')[i].value;
    obj[name] = value;
  }
  // axios, ajax ...
  console.log(obj);
}
```