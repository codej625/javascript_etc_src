# tr의 요소 값을 가져와 forEach문으로 check값을 알아보자!

```javascript
const row = document.querySelectorAll('.tr-row');

row.forEach(item => {
  let addSeq = '';
  const check = item.querySelector('.check-box').checked;
  const seq = item.querySelector('.seq').value;

  if (check === true) addSeq += `${seq},`;
});
addSeq = addSeq.substring(0, addSeq.length-1);
```