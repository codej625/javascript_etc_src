# 자동으로 숫자를 하나씩 높여서 insert할 수 있도록 로직을 짜보자!

```javascript

function imgChangeNameSelect() {
  
  var selectKeyword;
  var params        = {};
  var _seq          = seq.substring(5, seq.length);
  
  if (device == 'pc') {
    selectKeyword = '%pc_img_key%';
  } else {
    selectKeyword = '%mobile_img_key%';
  }

  // ture일시 실행
  $.ajax({
    type: 'POST',
    url: '/',
    data: params = {
      // 게시판의 seq와 pc, mobile을 분별하기 위한 select값
      seq: _seq,
      selectKeyword
    },
    beforeSend: function(xmlHttpRequest) {
      var csrfToken  = $('meta[name="_csrf"]').attr('content');
      var csrfHeader = $('meta[name="_csrf_header"]').attr('content');
      // csrf 처리 (인증)
      xmlHttpRequest.setRequestHeader(csrfHeader, csrfToken);
    },
    success: function(res) {
      // ajax 성공시 db속 select 값을 가져옴
      var resResult = res.key;
      var img_number;
      
      // resResult가 default값이면 01을 붙여서 return break;
      switch (resResult) {
        case 'pc_img_key_'    : 
        case 'mobile_img_key_': 
          document.getElementsByClassName('auto-img-key')[0].value = `${res.key}01`;
          break;
        default:
          // key와 number를 분리 시킨다.
          var key_number       = resResult.substring(0, resResult.length -2);
          // number를 잘라낸다.
          img_number           = resResult.substring(resResult.length, resResult.length -2);
          // number type casting
          var castingIntNumber = parseInt(img_number);
          var plusNumber;
          // 숫자가 10보다 작을때까지 +1을 해준다.                   
          if (castingIntNumber < 10) {
            // 숫자가 9일때는 두자리수에 0이 붙으면 안되고 뒷자리를 올려서 10을 만들어야 되기 때문에 9를 기준으로 조건을 준다.
            if(castingIntNumber == 9) {
              plusNumber = `${castingIntNumber +1}`
            } else {
              plusNumber = `0${castingIntNumber +1}`
            }
          // 2자리수 이후로는 계속하여 1씩 더한다.
          } else {
            plusNumber = `${castingIntNumber +1}`
          }
          // 위에서 만들어진 값을 대입한다.
          document.getElementsByClassName('auto-img-key')[0].value = `${key_number}${plusNumber}`;
          break;
      }
    },
    error: function(XMLHttpRequest, textStatus, errorThrown) {
      alert('서버에 문제가 발생하였습니다. 다시 시도해주세요');
    }
  });
}
```