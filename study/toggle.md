# toggl 기능을 구현해보자!

```html
<div class="div">
  <span>text1</span>
  <button class="btnUp" value="true">toggle1</button>
  <button class="btnUp" value="true">hide1</button>
  <div style="display: none;">hide1</div>
</div>
<div class="div">
  <span>text2</span>
  <button class="btnUp" value="true">toggle2</button>
  <button class="btnUp" value="true">hide2</button>
  <div style="display: none;">hide2</div>
</div>
```

```javascript
//===========================================================================================================
/* Global Variable*/
const val = document.querySelectorAll('.div');
//===========================================================================================================
val.forEach(element => {
  element.children[1].addEventListener('click', () => {
    let bol = element.children[1];

    (bol.value === 'true') ? (bol.value = 'false') : (bol.value = 'true');
    console.log(`boolean ${element.children[0].textContent}=> `, bol.value);
  });
});
//===========================================================================================================
val.forEach(element => {
  element.children[2].addEventListener('click', () => {
    let display = element.children[3];

    (display.style.display === 'none') ? (display.style.display = 'block') : (display.style.display = 'none');
    console.log(`display ${element.children[3].textContent}=> `, display.style.display);
  });
});
//===========================================================================================================
```