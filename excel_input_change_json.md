# input으로 excel file을 받아 json으로 변환시켜보자

```html
<head>
  <script src="https://cdn.sheetjs.com/xlsx-0.19.2/package/dist/xlsx.full.min.js" lang="javascript"></script> <!-- add script -->
</head>

<body>
  <input class="form-control" type="file" onchange="readExcel(event, 0)">
</body>
```
```javascript
function readExcel(e, idx) {
  const input = e.target, //
  fileReader = new FileReader(); // 비동기적으로 파일의 내용을 읽어 들이는 데 사용되는 객체.
  // 첫번째 파일을 바이너리로 읽어들인다.
  fileReader.readAsBinaryString(input.files[0]);
  // load 이벤트의 핸들러. 이 이벤트는 읽기 동작이 성공적으로 완료되었을 때마다 발생한다.
  fileReader.onload = () => {
    const excelResult = fileReader.result, //
      workBook = XLSX.read(excelResult, { type: 'binary' }), // binary 데이터와 타입을 명시해준다.
      excelSheet = workBook.Sheets[workBook.SheetNames[0]], // Sheet를 선택
      changeJson = XLSX.utils.sheet_to_json(excelSheet); // sheet를 json으로 변환

      // changeJson을 가지고 데이터를 가공한다.
  }
}
//========================================================================
```