//导入 http  模块
const http = require("http")
//导入fs     file system文件管理系统
const fs = require("fs")
//创建服务器  
//req     request 请求流
//res     response 相应流
http.createServer((req, res) => {
//访问文件名称为 请求流req里的url     
//在前面拼接小数点  是因为请求流req里的url是没有小数点的，访问本地文件需要加小数点
    var file_name = "." + req.url
//如果./后面没有请求路径    默认访问index 页面
    if (file_name == "./") {
        file_name = "./test.html"
    }
//否则 开始读文件   
    fs.readFile(file_name, (err, data) => {
        if (err) {
//如果error  存在 访问404页面
            file_name = "./404.html"
//访问404页面的内容
            fs.readFile(file_name, (err, data) => {
                res.end(data)
            })
        } else {
//否则  将访问 file_name 路径正确的页面 
            res.end(data)
        }
    })
    // res.end("1111")
}).listen(8899, () => {
//链式写法  http模块  监听  8899端口
    console.log("Server run on 8899")
})