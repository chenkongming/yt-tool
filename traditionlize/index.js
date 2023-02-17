const fs = require("fs");
// http_server.js
const axios = require("axios")
const path = require('path');
const fileURL = require('../conf')
// 创建axios实例s
const service = axios.create({
	baseURL: "http://127.0.0.1:4000", // api的base_url  process.env.BASE_API,,注意局域网访问时，不能使用localhost
	timeout: 20 * 1000 // 请求超时时间
})

const url = path.join(fileURL);
const data = fs.readdirSync(fileURL);
const index= async ()=> {
	for(let a=0;a<data.length;a++){
		// data[a].slice(19)
		let q = data[a]
		await service.post('/translate', {
			q
		}).then(res=>{
			let fileName = res.data
			fs.rename(url + data[a], url + fileName, (err) => {
				if(err) return console.error(err)
				console.log('rename success!',data[a])
			});
		})
	}
}

index()
