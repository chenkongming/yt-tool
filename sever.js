//导入express框架
const express = require("express");
// http_server.js
const axios = require("axios")
//初始化express
const qs = require('qs')
const crypto = require('crypto'); //引入crypto加密模块
const hash = crypto.createHash('md5'); //规定使用哈希算法中的MD5算法
const app = express();
app.use(express.json())
//本地服务器解决跨域 *******必写*******
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
const salt = Date.parse(new Date())/1000
const appid = '20210915000944305'
const key = 'WeY3YN77CnnowtSFUilB'
function encrypt(str) {
  const md5 = crypto.createHash('md5');
  return md5.update(str).digest('hex');
}
app.post('/translate', (req, res) => {
  const {q,form,to} = req.body
  const sign = encrypt(`${appid}${q}${salt}${key}`)
  const txtForm = form||'zh'
  const txtTo = to||'cht'
  const url = `https://fanyi-api.baidu.com/api/trans/vip/translate`
  const data = {
    q,
    sign,
    appid,
    salt,
    from:txtForm,
    to:txtTo
  }
  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data),
    url,
  };
  axios(options).then(response=>{
    if(response.data.trans_result[0].dst){
      res.json(response.data.trans_result[0].dst)
    }else {
      res.json('translate failed:',q)
    }

  })
})
//启动server，端口3000
app.listen(4000, function () {
  console.log("listening:4000");
})
