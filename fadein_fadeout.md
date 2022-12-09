# 자바스크립트를 사용하여 fadein fadeout를 해보자!

```html
  <button id="btnfadeOut"> Fade Out</button>
	<button id="btnfadeIn"> Fade In</button>
	<div id="img1">글자가 이쁘게 사라진다.</div>
```

```javascript
//===================================================================================
let opacity = 0;
let intervalID = 0;
//===================================================================================
// Fade out
document.getElementById('btnfadeOut').addEventListener('click', function () {
  intervalID = setInterval(hide, 200);
});
//===================================================================================
// Fade in
document.getElementById('btnfadeIn').addEventListener('click', function () {
  intervalID = setInterval(show, 200);
});
//===================================================================================
function hide() {
  var div = document.getElementById("img1");
  opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));

  if (opacity > 0) {
    opacity = opacity - 0.1;
    div.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
//===================================================================================
function show() {
  var div = document.getElementById("img1");
  opacity = Number(window.getComputedStyle(div).getPropertyValue("opacity"));

  if (opacity < 1) {
    opacity = opacity + 0.1;
    div.style.opacity = opacity;
  } else {
    clearInterval(intervalID);
  }
}
//===================================================================================
```