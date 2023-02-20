# 오늘의 날짜 구하기

ex 1)
```javascript
const today = new Date();   

const year = today.getFullYear(); // 년도
 month = today.getMonth() + 1,  // 월
 date = today.getDate(),  // 날짜
 day = today.getDay();  // 요일

console.log(year + '/' + month + '/' + date);
```

<br/>

ex 2)
```javascript
const date  = new Date(), //
  day = ("0" + date.getDate()).slice(-2), //
  month = ("0" + (date.getMonth() + 1)).slice(-2), //
  year = date.getFullYear(); //

 console.log(year + '-' + month + '-' + day); //
```