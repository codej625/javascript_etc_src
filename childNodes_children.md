# 엘리먼트 선택방법을 알아보자!

```html
<section id ="section4">
  <h1>Ex4 : childNodes를 이용한 노드선택</h1>
  <div class="box">
    <input />
    <input />
  </div>
</section>
```

```javascript
//Ex4 : childNodes를 이용한 노드선택
window.addEventListener("load", function() {
  var section3 = document.querySelector("#section4");
  var box = section4.querySelector(".box");

  //childNodes는 빈 공백도 node로 생각한다. 그래서 등장한 것이 children
  // var input1 = box.childNodes[0];
  // var input2 = box.childNodes[1];
  
  //children은 태그 있는 것만 자식으로 생각한다.
  var input1 = box.children[0];
  var input2 = box.children[1];

  input1.value = "hello";
  input2.value = "okay";
});
```

```
box 클래스 안에 childNodes[] 와 children[] 으로 노드를 선택 할 수 있는데 childNodes[]는 코드 내 빈공백도 자식으로 인식하기 때문에 children[]을 사용해서 box클래스 태그안에 있는 input을 선택해준다.
```

