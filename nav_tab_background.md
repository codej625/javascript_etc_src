# tab 클릭시 배경을 나타나게 해보자!


```css
.nav { display: flex; }
.nav > div { border: 1px solid; }
.active { background-color: orange; }
```

```html
<body>
  <div class="nav">
    <div>tab_1</div>
    <div>tab_2</div>
    <div>tab_3</div>
    <div>tab_4</div>
  </div>
</body>
```

```javascript
const div = document.querySelectorAll('.nav > div');

div.forEach(item => {
  item.addEventListener('click', () => {
    div.forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});
```