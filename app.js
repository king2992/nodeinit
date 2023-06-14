const express = require('express');
const app = express();

app.get('/getList', (req, res) => {
  // getList 요청에 대한 처리 로직을 작성합니다.
  res.json({ message: 'Hello, getList!' });
});

app.get('/0114', (req, res) => {
  alert("사랑해 김밍지") 
});

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});