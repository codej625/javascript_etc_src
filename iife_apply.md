# IIFE(즉시 실행 함수)를 응용해보자

```javascript
// value값을 담을 array
const classValSave = [];

(() => {
  // value를 담을 class를 querySelectorAll을 사용하여 전부 불러온다.
  const styleCheck = document.querySelectorAll('.hide-text');
  
  // forEach문을 사용하여 class의 원래 값을 array에 담고 '...'을 표시하게 만든다.
  styleCheck.forEach((Check, idx) => {
    classValSave.push(document.getElementsByClassName('hide-text')[idx].textContent);
    Check.innerHTML = '...';
  })
})();

// class를 querySelectorAll을 사용하여 전부 불러온다.
const styleCheck = document.querySelectorAll('.hide-text');

// forEach문을 사용하여 값이 '...'면 array속 원래의 값을 대입하고 아니면 '...'을 넣어주는 toggle 기능을 만든다.
styleCheck.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    (btn.innerHTML === '...') ? btn.innerHTML = classValSave[idx] : btn.innerHTML = '...';
  })
})
```
