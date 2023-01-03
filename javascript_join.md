# 자바스크립트 array에 join을 사용해보자!

```javascript
function() {
  // div 요소를 하나 만든다.
  const wrapper = document.createElement('div');
  // 적용 할 부분
  const testHtml = document.querySelector(id || class);
  // wrapper에 값을 대입
  wrapper.innerHTML = [
    '<div class="test">',
    '  <div>test</div>',
    '</div>'
    // join('') => join() 배열의 모든 요소를 연결해 하나의 문자열로 만듬, ('')는 ,을 제거
  ].join('');
  // html append
  testHtml.append(wrapper);
}
```