# object를 추가시켜보자!

```javascript
function addObj() {
	
	const formValue = document.querySelectorAll('#product-insert');
	const obj       = formValue[0];
	let addObj      = {};
	
	for (let i = 0; i < obj.length; i++) {
		obj[obj[i].name] = obj[i].value;
	}

	/** 
	 * forEach 함수를 사용하여 동일하게 구현할 수 있다.
	 * Array(obj).forEach(element => {
	* 	obj[element.name] = element.value;
   * });
	 */
}
```

```
key : value 방식으로 객체를 추가시킬 수 있다.
```