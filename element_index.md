# click element index 찾기

ex)
```html
<div class="boxList">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
```

```javascript
const boxs = document.querySelectorAll(".boxList > div");

boxs.forEach((el, index) => {
  el.onclick = () => {
    console.log(index);
  }
});
```

가장 쉬운 방법은 다수의 이벤트를 걸어주는 반복문에서 index를 가져오는 방법입니다.

하지만 다수의 이벤트를 걸어주지 못하는 상황에서는 아래와 같은 방법으로 index를 가져올 수 있습니다.

```javascript
const $box = document.querySelector(".boxList");

$box.onclick = (e) => {
  const nodes = [...e.target.parentElement.children];

  const index = nodes.indexOf(e.target);
  
  console.log(index);
}
```

DOM의 parentElement는 해당 요소의 부모 요소를 가리킵니다. 
또한 children은 해당 요소의 자식 요소를 가리킵니다.

이를 이용하여 클릭 이벤트를 걸어주고 클릭된 타깃의 부모 요소에서 자식 div를 모두 가져와줍니다.
그리고 indexOf 메서드로 현재의 타깃 요소와 일치하는 요소의 index를 찾아줍니다.

```javascript
const boxs = document.querySelectorAll(".boxList > div");

boxs.forEach(el => {
  el.onclick = (e) => {
    const nodes = [...e.target.parentElement.children];

    console.log(e.target.parentElement, nodes);

    const index = nodes.indexOf(e.target);

    console.log(index)
  }
});
```

해당 코드는 반복문을 이용한 다수의 요소를 이용하는 상황에서도 역시 사용할 수 있습니다.

### jQuery

```javascript
$(document)a.on("click", ".boxList > div", (e) => {
    const index = $(e.target).index();
    
    console.log(index);
  });
```
jQuery를 사용하면 훨씬 더, 간단한 코드로 index를 가져올 수 있습니다.
index() 메서드는 jQuery객체 index를 가져올 수 있는 가장 쉬운 방법입니다.

ex)
```javascript
const boxs = document.querySelectorAll(".boxList > div");

boxs.forEach(el => {
  el.onclick = (e) => {
    const nodes = [...e.target.parentElement.children];

    console.log(e.target.parentElement, nodes);

    const index = nodes.indexOf(e.target);

    alert(`선택한 박스의 index는 ${index}입니다.`);
  }
});
```