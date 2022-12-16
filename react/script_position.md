# html에서 script태그의 위치에 따른 차이점을 알아보자!

```
DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작하려고하면 에러가 발생하기 때문에
```

<br>

```
head에 script태그 위치 (option x)
```
```html
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="a.js"></script><!-- head에 선언 -->
</head>
```
1. html pasing => 
2. js fetching(html parsing을 멈추고 js엔진에 제어권을 넘긴다. => js 실행) => 
3. html parsing
4. 페이지 준비완료

<br>

```
body에 script태그 위치 (option x)
```
```html
<body>
  <header></header>
  <section></section>
  <footer></footer>
  <script src="b.js"></script><!-- body끝에 선언 -->
</body>
```
1. html pasing => 페이징 준비완료
2. js fetching =>
3. js 실행
4. 페이지 준비완료

```
body끝에 선언한 경우는 HTML 파싱이 다 끝나고 난후에 js스크립트를 실행하기 때문에 HTML 요소들이
스크립트 로딩 지연으로 인해 렌더링에 지장받는 일이 발생하지 않아 페이지 로딩시간이 단축된다.
단점으로는 만약 웹페이지가 자바스크립트에 의존적이라면 자바스크립트 파일이 준비되기도 전에
HTML파일이 보여지기때문에 의도한 페이지를 보여주기까지 지연이 있을수도 있다.
```

<br>

```
두가지 방법 외에도 script에는 defer와 async 속성을 줄수도 있다.

1) <Head> 태그에 위치 (async 옵션)
```
```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script async src="c.js"></script><!-- async -->
</head>
```
1. html pasing, js fetching 동시 진행 =>
2. html parsing을 멈추고 js엔진에 제어권을 넘긴다.(js 실행) =>
3. html parsing
4. 페이지 준비완료

```
async 옵션은 HTML parsing 중에 script 태그를 만나면 parsing과 동시에 script 파일을 다운로드 하고,
script 파일 다운로드가 완료되면 HTML parsing을 멈추고 script 파일을 실행한다.
아직 HTML이 모두 정의되어 있지 않기 때문에 js파일에서 돔요소를 조작하는 코드가 있다고 하면 문제가 생길 수 있다.
async 옵션은 script태그 선언 순서에 상관없이 다운로드 받아지는 순서대로 js파일을 실행한다.
```

<br>

```
2-1) <Head> 태그에 위치 (async 옵션)
```
```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script defer src="d.js"></script><!-- defer -->
</head>
```
1. html parsing(html parsing중에 js파일을 미리 다운받아 놓는다.) =>
2. html parsing이 완료되면 js 실행

```
defer 옵션은 HTML 파싱 중에 필요한 js파일을 미리 다운받아놓고 HTML parsing이 완료되면 js파일을 실행
async와 defer옵션의 차이점은 defer옵션은 문서에 나타나는 순서대로 js파일이 실행되도록 보장된다.
```