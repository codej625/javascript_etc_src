# toggl 기능을 구현해보자!

```html
  <div class="div">
    <span>text1</span>
    <button class="btnUp" value="true">테스트1</button>
  </div>
  <div class="div">
    <span>text2</span>
    <button class="btnUp" value="true">테스트2</button>
  </div>
```

```javascript
const val = document.querySelectorAll('.div');

val.forEach(element => {
  element.children[1].addEventListener('click', () => {
    element.children[1].value === 'true' ? element.children[1].value = 'false' : element.children[1].value = 'true';
    console.log('check => ', element.children[1].value);
  });
});
```