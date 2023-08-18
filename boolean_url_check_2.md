# url parameter를 활용해서 조건을 on / off 시켜보자

```html
<div id="main-section">
  <div class="alert-div">
    <p>TEST ALERT</p>
    <button type="button" onclick="closeBtn();">CLOSE</button>
  </div>
</div>
```

```css
#main-section { position: relative; }
.alert-div { position: absolute; }
```

```javascript
/*

*/
// Global variable ===================================================================================

// IIFE ==============================================================================================
(() => {
  /* 
    test query string => ?utm_source=naverbs_pc&utm_medium=brand&utm_campaign=healthci&healthci=true 
  */
  const url = location.search.split('?')[1];
  const queryString = url.split('&');

  const campaignList = [ /* 데이터베이스로 대체 가능 */
    'healthci',
    'cancer',
    'test'
  ];

  const status = campaignStatus(queryString); /* 1. status check */
  console.log(status);








  

  function campaignStatus(status) { /* campaign, status check */
    let returnVal = 0;
    const pathName = location.pathname.split('/')[1]; /* path name */

    campaignList.forEach(pathChk => { /* path name check */
      if (pathName === `${pathChk}.html`) {
        returnVal = 1;
      }
    });

    status.forEach(param => { /* status check */
      const paramCheck = param.split('='); /* parameter를 name과 value로 분리한다. */
      const paramName = paramCheck[0]; /* name */
      const paramValue = paramCheck[1]; /* value */

      if (pathName === `${paramName}.html`) {
        returnVal = 0;
      }
    });
    /* 리턴 값이 false면 아무 로직도 수행하지 않는다. */
    return (returnVal > 0) ? true : false;
  }
})();
// Function ==========================================================================================

//====================================================================================================
```