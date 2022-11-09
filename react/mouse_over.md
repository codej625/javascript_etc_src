# 마우스 오버시 상호작용이 일어나게 해보자!

```javascript

function bannerHover() {

// forEach문을 돌리기 위한 querySelectorAll();
const bannerImg = document.querySelectorAll('');
  let imgText = '';
  bannerImg.forEach((item, idx) => {
    item.addEventListener('mouseover', () => {
      // 마우스 오버시 childNodes를(복수일시) 다시한번 forEach문을 돌려준다.
      item.childNodes.forEach((i, index) => {
        // childNodes의 value를 변수에 대입
        imgText = i.nodeValue;
        /* 
            위에 childNodes는 table에 td이다. 그속에는 이미지 src가 들어있다.
            이미지를 오버하면 nodeValue를(이미지 주소) banner-preview라는 id를 가진 img태그 src에 대입한다.
        */
        document.getElementById('banner-preview').src = imgText;
      });
    });
    item.addEventListener('mouseout', () => {
      // 마우스가 아웃되면 빈값을 대입한다.
      document.getElementById('banner-preview').src = '';
    });
  });
};
