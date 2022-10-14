# click event를 사용해서 class를 바꿔보자!

```css

...
.sec5-middle .category .data {
  border: 1px solid #dddddd;
  width: 235px;
  height: 60px;
  padding: 20px 80px;
  cursor: pointer;
}
.sec5-middle .category .on {
  background-color: #63b2b0;
  color: white;
}

...
.infoData .info-title {
  text-align: center;
  margin: 50px 0 60px 0;
}
.infoData .info-title h2 {
  margin-bottom: 20px;
}

...
.show {
  display: block;
}
.hide {
  display: none;
}
```

```html

...
<div class="sec5-middle">
    <ul class="category">
        <li class="data on">1관</li>
        <li class="data">2관</li>
        <li class="data">3관</li>
    </ul>
</div>

...
 <div class="infoData">
    <div class="info-title show">
        <h2 class="fs30">1관</h2>
        <p>test1</p>
    </div>
    <div class="info-title hide">
        <h2 class="fs30">2관</h2>
        <p>test2</p>
    </div>
    <div class="info-title hide">
        <h2 class="fs30">#관</h2>
        <p>test3</p>
    </div>
</div>
```

```javascript
const category = document.querySelectorAll(".category li");

category.forEach((item, idx) => {

  item.addEventListener('click', function () {
    // delete class
    category.forEach((item, index) => {
      document.getElementsByClassName('data')[index].classList.remove('on');
      document.getElementsByClassName('info-title')[index].className = 'info-title hide';
    });

    item.classList.add('on');
    document.getElementsByClassName('info-title')[idx].className = 'info-title show';
  });
});


```