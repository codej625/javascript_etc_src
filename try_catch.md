# try catch error처리를 해보자!

```html
<h2>Error</h2>
<p id="catch"></p>
```

```javascript
<script>
try {
  alertt("Welcome guest!"); // function error 
} catch(err) {
  document.getElementById("demo").innerHTML = err.message;
}
</script>
```