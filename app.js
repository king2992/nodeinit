const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});


app.get('/getList', (req, res) => {
  // getList 요청에 대한 처리 로직을 작성합니다.
  let resArr = [];

  resArr.push({title : '첫 번째 게시글', content : '안녕하세요. 첫 번째 게시글입니다.'});
  resArr.push({title : '두 번째 게시글', content : '안녕하세요. 두 번째 게시글입니다.'});
  

  res.json(resArr);
});