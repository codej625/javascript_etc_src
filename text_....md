# text가 일정 이상되면 ...으로 표시 하는 함수

```javascript
function CheckMaxString(obj, maxNum){               
  var li_str_len = obj.length;
  var li_byte = 0;
  var li_len = 0;
  var ls_one_char = "";
  var ls_str2 = "";
  for( var j=0; j<li_str_len; j++){
    ls_one_char = obj.charAt(j);
    if(escape(ls_one_char).length > 4 ) {
      li_byte += 2;
    }else{
      li_byte++;
    }
    if(li_byte <= maxNum){
      li_len = j+1;
    }
  }
  if(li_byte > maxNum){
    ls_str2 = obj.substr(0, li_len)+"...";
  }else{
    ls_str2 = obj;
  }
  return ls_str2;
}
```