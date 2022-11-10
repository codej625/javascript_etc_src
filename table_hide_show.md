# 테이블을 클릭하여 숨기고 보자!

```javascript
function hideAndShow(name) {
  
  let tableName;
  let toggle;
  
  switch (name) {
    case 'img-status': tableName = 'img-status-list';  break;
    case 'img-upload': tableName = 'image-table-show'; break;
    
    default: console.log('error');                     break;
  }
  
  toggle = document.getElementById(tableName);
  
  switch (toggle.style.display) {
    case 'none':  toggle.style.display = 'block'; break;
    case 'block': toggle.style.display = 'none'; break;
    
    default: console.log('error');  break;
  }
};
```

```html
<div id="image-table-show" style="display: none;">
    <table class="table mt-4 table-hover" style="width: 100%;" id="img-table-list">
        <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody id="image-list-1">
        
        </tbody>
    </table>
</div>
<div id="image-table-show" style="display: none;">
    <table class="table mt-4 table-hover" style="width: 100%;" id="image-table-show">
        <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody id="image-list-2">
        
        </tbody>
    </table>
</div>

```