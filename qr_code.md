# QR code를 생성하여 url 이동을 해보자!

```html
<!DOCTYPE html>
<html>
<head>
  <title>QR 코드 생성 및 URL 이동</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js"></script>
</head>

<body>
  <div id="qrcode"></div>

  <script>
    // QR 코드 생성
    var qrcodeDiv = document.getElementById("qrcode");
    var qrcode = new QRCode(qrcodeDiv, {
      text: "https://www.naver.com", // QR 코드에 포함될 URL
      width: 128, // QR 코드의 가로 크기 (픽셀)
      height: 128 // QR 코드의 세로 크기 (픽셀)
    });
  </script>
</body>
</html>
```