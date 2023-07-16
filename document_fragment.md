# document.createDocumentFragment() 를 사용하여 성능 최적화를 해보자!

```
DocumentFragment를 사용하여 여러개의 아이템을 동적으로 생성하고 한번에 추가를 하여 아이템을 개별적으로 추가하는 것보다
훨씬 효율적으로 DOM에 추가하는 작업을 할 수 있다. 리스트 아이템이 많을수록 성능이 향상 된다.
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DocumentFragment 예제</title>
</head>
<body>
  <h1>DocumentFragment 예제</h1>
  <ul id="listContainer">
  <!-- 여기에 리스트 아이템이 동적으로 추가 -->
  </ul>
  <button id="addItemsButton">리스트 아이템 추가</button>
</body>
</html>
```

```javascript
// 버튼 클릭 시 리스트 아이템 추가하는 함수
function addListItems() {
  const listContainer = document.getElementById('listContainer');
  const fragment = document.createDocumentFragment();
  // 10개의 리스트 아이템을 동적으로 생성하여 fragment에 추가
  for (let i = 0; i < 10; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `리스트 아이템 ${i + 1}`;
    fragment.appendChild(listItem);
  }
  // 최종적으로 fragment에 있는 모든 리스트 아이템을 한 번에 추가
  listContainer.appendChild(fragment);
}

const addButton = document.getElementById('addItemsButton');
addButton.addEventListener('click', addListItems);
```