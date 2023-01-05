# querySelector를 활용하여 class를 추가해보자!

```html
<div class="class">test</div>
```

```javascript
  const query = document.querySelector('.class').classList;
  query.add('class2');
```