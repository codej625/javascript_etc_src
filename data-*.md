# data 속성을 알아보자!

```
data-로 시작하는 속성은 무엇이든 사용할 수 있다. 
화면에 안 보이게 글이나 추가 정보를 엘리멘트에 담아 놓을 수 있다.
```
ex)
```
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  ...
</article>
```

<br/>

```
javascript로 접근하기
```
```
var article = document.getElementById("electriccars");

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```