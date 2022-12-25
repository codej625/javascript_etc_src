# 크리스마스에 별로 트리를 만들어보자!

```javascript
for(let i = 1; i <= 9; i+=2 ){  
  console.log(' '.repeat( (9-i)/2 ) + '*'.repeat(i))
}
```
<br>

```javascript
for (var i = 1; i <= 9; i = i+2){  // 별의 최대 개수 9개; 별의 개수는 1-3-5-7-9로 2개씩 증가
   console.log(" ".repeat((9-i)/2) + "*".repeat(i))
}
```