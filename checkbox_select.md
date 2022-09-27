# checkbox 요소 선택

```javascript
function checkboxSelect() {
  
  const obj_length = document.getElementsByName("??").length;
  let checkbox = '';
  
  for (var i=0; i < obj_length; i++) {
    
    if (document.getElementsByName("??")[i].checked == true) {
      checkbox += `${document.getElementsByName("??")[i].value},`;
    } 
  }
  // String value 가공
  const checkSub = checkbox.substring(0, checkbox.length-1);

  alert(checkSub);
}
```