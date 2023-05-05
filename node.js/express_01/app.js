const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // cors 처리 조건은 x

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Express server on port ${port}`)
});