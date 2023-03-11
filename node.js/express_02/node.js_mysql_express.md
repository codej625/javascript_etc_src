# express에 mysql을 연동해보자!

```terminal
npm install mysql
```

```javascript
const mysql = require('mysql'),
  express = require('express'),
  bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// MySQL 연결 정보
const connection = mysql.createConnection({
  host: 'localhost',
  user: '사용자이름',
  password: '비밀번호',
  database: '데이터베이스이름'
});

// MySQL 연결
connection.connect();

// GET 요청 처리
app.get('/users', function (req, res) {
  connection.query('SELECT * FROM users', function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

// POST 요청 처리
app.post('/users', function (req, res) {
  const { name, email } = req.body;
  connection.query('INSERT INTO users SET ?', { name, email }, function (error, results, fields) {
    if (error) throw error;
    res.send(results);
  });
});

// 서버 시작
app.listen(3000, function () {
  console.log('서버가 시작되었습니다.');
});
```

```
위 코드에서는 express와 body-parser 모듈을 사용하여 간단한 RESTful API를 만들어 보았습니다. 
GET 요청으로는 모든 사용자 정보를 조회하고, POST 요청으로는 새로운 사용자 정보를 생성할 수 있습니다. 
MySQL 연결 정보를 수정하여 사용하시면 됩니다.

이렇게 작성한 코드를 실행하면 3000번 포트에서 서버가 시작됩니다. 
예를 들어, http://localhost:3000/users로 GET 요청을 보내면 모든 사용자 정보를 조회할 수 있습니다. 
POST 요청을 보내려면, curl이나 Postman과 같은 도구를 사용하면 됩니다.
```