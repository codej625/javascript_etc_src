# 자바스크립트로 css일괄 변경을 해보자 동기 방식일때 사용하면 좋다.

```javascript
//== iife ===================================================================
(() => {
  mainPage(mainIndex);
})();
//== 20230221 ===============================================================
function mainPage(idx) {
  const ptName = document.querySelector('input[name="name"]'), //
    mainMenu = document.querySelectorAll('.main-click'), //
      mainMenuText = document.querySelectorAll('.main-click > p > a'),
      mainContentText = document.querySelector('#main-content > div > div'), //
        mIdx = idx;
  let menu = document.querySelector('#main-menu').style, //
    backgroundCol = document.querySelector('#main-content').style, //
      mainImg = document.querySelector('.main-img-change'), //
        col; //
  //== contents change =====================================================
  switch(mIdx) {
    case 0:
      col = '#FCF3EB';
      ptName.value = 20899;
      mainImg.src = '../../img/main/img01.png';
      menu.backgroundColor = col;
      backgroundCol.backgroundColor = col;
      mainContentText.innerHTML = `text_1`;
      break;
    case 1:
      col = '#FCEBF2';
      ptName.value = 20741;
      mainImg.src = '../../img/main/img02.png';
      menu.backgroundColor = col;
      backgroundCol.backgroundColor = col;
      mainContentText.innerHTML = `text_2`;
      break;
    case 2: 
      col = '#EBEFFC';
      ptName.value = 20307;
      mainImg.src = '../../img/main/img03.png';
      menu.backgroundColor = col;
      backgroundCol.backgroundColor = col;
      mainContentText.innerHTML = `text_3`;
      break;
    default: console.log('style error');
  }
  mainMenu[mIdx].classList.add('main-underline-color');
  mainMenuText[mIdx].classList.add('main-underline-text');
  }
//===========================================================================
```