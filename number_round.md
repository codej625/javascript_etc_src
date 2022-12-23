# 숫자를 반올림하고 숫자 단위를 ,넣어 구분해보자!

```javascript
// 3자리마다 ,를 넣는다.
function addCommas(num){
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}
// 소숫점을 자르고 반올림한다.
.toFixed({number});

const numberRound = 12,342.0231;
// ex)
console.log(addCommas(numberRound.toFixed(2);)); // 12,342.03;
```