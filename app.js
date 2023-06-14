const express = require('express');
const app = express();

app.get('/getList', (req, res) => {
  // getList 요청에 대한 처리 로직을 작성합니다.
  res.json({ message: 'Hello, getList!' });
});

app.get('/0114', (req, res) => {
  window.document.write('2024년 1월 14일 우리 결혼해요ㅎㅎ');  
});

app.listen(80, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});