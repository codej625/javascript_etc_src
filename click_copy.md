# 클릭하여 텍스트를 복사해보자!

```html
<div 
  id="1" 
  onclick="copyClipboard(1);"
>
  text
</div>
```

```javascript
function copyClipboard(seq) {
  const text = document.getElementById(seq).textContent, //
  	textarea = document.createElement('textarea'); //
  textarea.textContent = text;
  document.body.append(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
}
```