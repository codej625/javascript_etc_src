# javascript를 이용하여 nav bar를 만들어보자!

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* 전체 네비게이션 바 스타일 */
    nav { background-color: #333; overflow: hidden; }        
    /* 네비게이션 바 로고 */
    .logo { float: left; font-size: 20px; color: white; text-align: center; padding: 14px 16px; text-decoration: none; }
    /* 네비게이션 바 메뉴 항목 */
    ul { list-style-type: none; margin: 0; padding: 0; overflow: hidden; }        
    li { float: left; }
    li a { display: block; color: white; text-align: center; padding: 14px 16px; text-decoration: none; }        
    li a:hover { background-color: #111; }  
  </style>
</head>
<body>
  <nav>
    <a class="logo" href="#">로고</a>
    <ul>
      <li><a href="#">메뉴 1</a></li>
      <li><a href="#">메뉴 2</a></li>
      <li><a href="#">메뉴 3</a></li>
    </ul>
  </nav>
</body>
</html>
```

```javascript
const menuItems = document.querySelectorAll('li a');
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = this.getAttribute('href');
  });
}
```