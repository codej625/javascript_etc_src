### 버튼을 눌러 타입이 변경되는 테이블을 만들어 보자!(표 => 차트 등)

```html
<table class="table table-hover table-bordered filter-board">
  <thead>
    <tr>
      <th class="columns">
        <input 
          class="" 
          value=""
        >
      </th>
      <th class="columns">
        <input 
          class="" 
          value=""
        >
      </th>
      <th id="changeImg" ondblclick="chartList();">
        <img alt="img-type" src="">
      </th>
    </tr>
  </thead>
</table>
```

```javascript
// Global Variable =====================================================================
let iconChange = false; /* toggle button */
// Function ============================================================================
function chartList() { /* A function that activates upon a double-click */ 
  let html = document.getElementById('changeImg');
  
  (iconChange === false) ? ( /* icon toggle */
    iconChange = true,
    html.innerHTML = `<img alt="img-type" src="/img/table.png">`
    /* chart change logic => */
  ) : (
    iconChange = false,
    html.innerHTML = `<img alt="img-type" src="/img/chart.png">`,
    /* table change logic => */
  );
}
// Function ============================================================================
function changeImgAjax() { /* ajax or axios */
  $.ajax({
    url: '/',
//  data: ,
    type: 'POST',
    beforeSend: xmlHttpRequest => {
      const csrfToken  = $('meta[name="_csrf"]').attr('content');
      const csrfHeader = $('meta[name="_csrf_header"]').attr('content');
      xmlHttpRequest.setRequestHeader(csrfHeader, csrfToken); /* csrf 처리 */
    },
    success: res => {
      /* logic => */
    },
    error: (jqXHR, textStatus, errorThrown) => {
      console.log('jqXHR, textStatus, errorThrown => ', `${jqXHR}, ${textStatus}, ${errorThrown}`);
    }
  });
}
```