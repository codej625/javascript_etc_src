# IIFE(Immediately Invoked Function Expressions: “Iffy”라고 발음)는 즉시 호출 함수 표현식의 줄임말입니다.

```javascript
(function () {
// Do fun stuff
})();
```

# 언제 IIFE를 사용하는가?
```
젼역 영역(Global Scope)를 오염 시키지 않기 위해서
IIFE를 사용하는 주된 이유는 변수를 전역(global scope)으로 선언하는 것을 피하기 위해서 입니다. 
많은 JavaScript 라이브러리와 전문가들이 이 기법을 사용합니다. 
jQuery plugin개발자들 사이에서 특히 인기가 많습니다. 
JS어플리케이션의 Top-Level - main.js 또는 app.js와 같은 - 에서도 IIFE를 사용할 수 있습니다. 
아래 코드는 지역 변수를 익명 함수로 위치시켜 외부와의 충돌을 방지할 수 있습니다.
```

```javascript
 // All the code is wrapped in the IIFE
(function () {
    var firstName = “Richard”;
    function init () {
        doStuff (firstName);
        // code to start the application
    }
    function doStuff () {
        // Do stuff here
    }
    function doMoreStuff () {
        // Do more stuff here
    }
    // Start the application
    init ();
})();
```