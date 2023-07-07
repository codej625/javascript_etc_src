# 자바스크립트로 타임스탬프 값을 날짜로 바꿔보자!

1. xxxx-xx-xx 날짜
```javascript
function timestamp(time) {
  const date = new Date(time);
  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  const result = `${year}-${month}-${day}`;
  
  return result;
}
```

2. xx:xx 시간
```javascript
function timestampSecond(time) {
  const date = new Date(time);
  const hours = ('0' + date.getHours()).slice(-2); 
  const minutes = ('0' + date.getMinutes()).slice(-2);
  const result = `${hours} : ${minutes}`;
  
  return result;
}
```