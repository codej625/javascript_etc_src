# list를 클릭하여 텍스트를 변경해보자!

```html
<style>
  ul { padding: 0; }
  ul > li { float: left; margin: 0 5px 0 5px; list-style: none; }
  .content { width: 10px; height: 22px; margin: 20px; border: 2px solid #000000; }
</style>

<body>
  <section>
    <div class="click-wrap">
      <ul>
        <li>click1</li>
        <li>click2</li>
        <li>click3</li>
        <li>click4</li>
      </ul>
    </div>
    <br />
    <div class="content">

    </div>
  </section>
</body>
```

```javascript
(() => {
  //==================================================================
  const click = document.querySelectorAll('.click-wrap > ul > li');
  const contents = document.querySelector('.content');
  //==================================================================
  click.forEach((element, index) => {
    element.addEventListener('click', () => {
      contents.innerHTML = index + 1;
    });
  });
  //==================================================================
})();
```