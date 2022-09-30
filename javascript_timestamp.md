# 13자리 timestamp => string(yyyy-MM-dd HH:mm:ss) 변환

```javascript
function timestamp(_date) {
  
  var date = new Date(_date);
  var day = ("0" + date.getDate()).slice(-2);
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();
  var returnDate = year + '-' + month + '-' + day;
  
  return returnDate;
}
```