# 숫자 중간에 , 를 찍어주는 함수

```javascript
// 값을 함수에 대입하면 정규식을 사용하여 콤마를 붙인 값을 리턴한다.

function addCommas(num){
          return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');
}
```