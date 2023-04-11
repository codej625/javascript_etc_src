# 과제 => 비밀번호 입력시 콘텐츠를 보여주는 로직 문제

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Protected Content</title>
    <style>
        #protected-content {
            display: none;
        }
    </style>
</head>
<body>
    <h1>비밀번호로 보호된 콘텐츠</h1>
    <p>비밀번호를 입력하세요:</p>
    <input type="password" id="password-input" />
    <button onclick="checkPassword()">제출</button>

    <div id="protected-content">
        <h2>비밀 콘텐츠</h2>
        <p>이 콘텐츠는 올바른 비밀번호가 필요합니다.</p>
    </div>

    <script>
        function checkPassword() {
            const passwordInput = document.getElementById("password-input");
            const protectedContent = document.getElementById("protected-content");

            const correctPassword = "비밀번호123"; // 이 비밀번호를 원하는 값으로 변경하세요

            if (passwordInput.value === correctPassword) {
                protectedContent.style.display = "block";
            } else {
                alert("비밀번호가 틀렸습니다. 다시 시도해주세요.");
                passwordInput.value = "";
            }
        }
    </script>
</body>
</html>
```