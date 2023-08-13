# url parameter를 활용해서 조건을 on / off 시켜보자

```html
<div class="alert-div" style="display: none;">
  <p>TEST ALERT</p>
  <button type="button" onclick="closeBtn();">CLOSE</button>
</div>
```

```javascript
// Global variable ===================================================================================
let objCheck = { /* database로 대체 가능*/
  'health.html': false, 
  'child.html': false, 
  'cancer.html': false,
  'test.html': false
};
const campaign = [ /* database로 대체 가능*/
  'google', 
  'naver', 
  'kakao'
];
// IIFE ==============================================================================================
(() => {
  // =================================================================================================
  const getObjKeys = Object.keys(objCheck); /* 객체의 키값을 가져온다. */
  const getUrl = location.href; /* url을 가져온다. */
  const urlObj = new URL(getUrl); /* url을 객체화 한다. */
  const urlPathName = urlObj.pathname.substring(1); /* pathname에서 '/' 제외 */
  const urlParameter = urlObj.search.substring(1); /* parameter에서 '?' 제외 */
  /* 
    1. urlPathName는 현재 path이다. ex) health
    2. getObjKeys의 키값과 urlPathName를 비교하여 getObjKeys에 속해 있는 값을 찾아낸다.
    3. pathCheck에 값이 0보다 작으면 return false
  */  
  const pathCheck = getObjKeys.filter(find => find === urlPathName); /* path check */
  const check = urlCheck(pathCheck);
  
  if (check === true) {
    return campaignCheck(urlParameter, urlPathName);
  }
  else return false;

  // function ========================================================================================
  function urlCheck(pathName) {
    /* 1. path 2.status => check */
    if (pathName.length > 0) { /* path 확인 */
      if (objCheck[pathName] === false) { /* status 확인 */
        return true;  
      }
      else return false;
    } 
    else return false;
  }
  // function ========================================================================================
  function campaignCheck(campaignName, pathName) {
    /* campaign => check */
    const campaignList = campaignName.split('&');

    campaignList.forEach(chk => {
      campaign.forEach(ele => {
        if (chk === `utm_source=${ele}`) {
          const div = document.querySelector('.alert-div');
          div.style.display = 'block';
          objCheck[pathName] = true;
        }
      });
    });
  }
})();
// Function ==========================================================================================
function closeBtn() {
  /*
    ...close logic
    true값이 있으면 url + parameter를 추가하여
    조건을 갖고 다니게 한다.
  */
}
```