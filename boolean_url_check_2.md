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
/* test value => ?utm_source=naverbs_pc&utm_medium=brand&utm_campaign=healthci&test=p&healthci=p */

// IIFE ==============================================================================================
(() => {
  // Variable ========================================================================================
  let url;
  let queryString;
  let queryStringList;
  let statusList = []; /* campaign의 상태 값들을 저장 */
  // =================================================================================================
  const campaignList = [ /* 데이터베이스로 대체 가능 */
    'healthci',
    'cancer',
    'test'
  ];

  const utmSourceList = [ /* 데이터베이스로 대체 가능 */
    'google',
    'kakao',
    'naver',
    'test'
  ];
  const utmCheck = utmSource();
  
  if (utmCheck) {
    try { /* 예외처리 */
      url = location.href.split('?')[0];
      queryString = location.search.split('?')[1];
      queryStringList = queryString.split('&');
    } catch {
      console.log('null');

      return false;
    }
  } else {

    return false;
  }
  
  const status = campaignStatus(queryStringList); /* 1. status check */
  const uniqueQueryStringList = [...new Set([...queryStringList, ...statusList])]; /* set의 특성을 이용하여 중복 제거 */

  if (status) {
    document.querySelector('.alert-div').style.display = "block"; /* 임시 alert */
    // 화면은 변경하지 않고 url을 업데이트
    history.pushState({}, "", `${url}?${uniqueQueryStringList.join('&')}`);
  } else {
    document.querySelector('.alert-div').style.display = "none"; /* 임시 alert */
  }
  // Function ========================================================================================
  function campaignStatus(status) { /* campaign, status check */
    let returnVal = 0; /* return value */
    const pathName = location.pathname.split('/')[1]; /* path name */

    campaignList.forEach(pathChk => { /* path name check */
      if (pathName === `${pathChk}.html`) {
        statusList.push(`${pathName.split('.')[0]}=p`);
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
      if (paramValue === 'p') { /* p라는 값이 붙어 있으면 배열에 저장한다. */
        statusList.push(`${paramName}=p`);
      }
    });
    /* 리턴 값이 false면 아무 로직도 수행하지 않는다. */
    return (returnVal > 0) ? true : false;
  }
  // Function ========================================================================================
  function utmSource() {
    /* 현재 URL 가져오기 */
    const url = new URL(location.href);
    const searchParams = new URLSearchParams(url.search);
    /* 특정 파라미터 값 가져오기 */
    const parameterValue = searchParams.get('utm_source');
    const returnValue = utmSourceList.includes(parameterValue);
    
    return returnValue;
  }
  // =================================================================================================
})();
```