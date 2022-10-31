# querySelectAll과 forEach를 사용하여 이벤트를 실행해보자

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta 
    http-equiv="X-UA-Compatible" 
    content="IE=edge"
  >
  <meta 
    name="viewport" 
    content="width=device-width, initial-scale=1.0"
  >
  <scrip 
    src="https://code.jquery.com/jquery-3.6.1.min.js"
    integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ=" 
    crossorigin="anonymous"
  ></script>
  <title>Document</title>
</head>

<body>
    <table 
        class="table mt-4 table-hover"
        style="width: 100%;" 
        id="img-table-list"
     >
        <thead>
            <tr>
                <th>No</th>
                <th>Title</th>
            </tr>
        </thead>
        <tbody id="image-list">
        </tbody>
    </table>
</body>
</html>
```

```javascript
  //=============================================================================================

  function imgList(res) {

    const imgList = res;

    $.ajax({
      type: 'post',
      url: '/',
      data: { imgList },
      contentType: 'application/x-www-form-urlencoded',
      beforeSend: function (xmlHttpRequest) {
        const csrfToken  = $('meta[name="_csrf"]').attr('content');
        const csrfHeader = $('meta[name="_csrf_header"]').attr('content');
        // csrf 처리 (인증)
        xmlHttpRequest.setRequestHeader(csrfHeader, csrfToken);
      },
      success: function (res) {
        if (res !== '0') {
          imgListTable(res);
          imgHover();
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        alert('서버에 문제가 발생하였습니다. 다시 시도해주세요');
      }
    });
  }

  //=============================================================================================

  $('#add-img').click(function () {

    const formData = new FormData($('#img-upload-form')[0]);
    // true or false를 위한 confirm
    const ask = confirm('이미지를 등록하시겠습니까?');

    // ture일시 실행
    if (ask) {
      $.ajax({
        type: 'POST',
        url: '/',
        data: formData,
        enctype: 'multipart/form-data',
        processData: false, // 필수
        contentType: false, // 필수
        cache: false,
        beforeSend: function (xmlHttpRequest) {
          const csrfToken  = $('meta[name="_csrf"]').attr('content');
          const csrfHeader = $('meta[name="_csrf_header"]').attr('content');
          // csrf 처리 (인증)
          xmlHttpRequest.setRequestHeader(csrfHeader, csrfToken);
        },
        success: function (res) {
          if (res != null) {
            // alert(`upload 성공 => ${res}`);
            imgNameSave(res);
          } else {
            alert('upload 실패');
          }
          location.reload();
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
          alert('서버에 문제가 발생하였습니다. 다시 시도해주세요');
        }
      });
    } else {
      // false일시 실행
      alert('이미지 업로드를 취소하셨습니다.')
    }
  });

  //=============================================================================================

  function imgListTable(res) {

    // String 정리
    let strSub;
    strSub = res.substring(12, res.length);
    strSub = strSub.substring(0, strSub.length - 1);
    // ','을 기준으로 분할
    const list = strSub.split(',');
    const tbodyName = document.getElementById('image-list');

    let number = 1;
    let html = '';

    for (imgList of list) {
      html = `<tr style="text-align: center;">
            <td>${number}</td>
            <td>
              <div style="position: relative;">
                <a 
                  class="img-mouseover" 
                  href="${imgList}" 
                  target="_blank"
                >${imgList} &nbsp;
                  <input 
                    type="checkbox" 
                    name="img" 
                    value="${imgList}" 
                    onclick="checkboxSelect();"
                  >
                </a>
              </div>
              <div 
                class="img-div" 
                style="display: none; 
                position: absolute; 
                top: 100px; 
                right: 150px;"
              >
                <img 
                  style="max-width: 200px;
                  height: 200px; 
                  border: 5px #eeeeee solid; 
                  border-radius: 20px;" 
                  src="${imgList}"
                >
              </div>
            </td>
          </tr>`;
      number++;
    }
    tbodyName.innerHTML = html;
  }

  //=============================================================================================

  function imgHover() {
    const imgMouseover = document.querySelectorAll('.img-mouseover');
    imgMouseover.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        document.getElementsByClassName('img-div')[index].style.display = 'block';
        console.log(`${index} open`);
      });
      item.addEventListener('mouseout', () => {
        document.getElementsByClassName('img-div')[index].style.display = 'none';
        console.log(`${index} close`);
      });
    });
  };

  //=============================================================================================
```
