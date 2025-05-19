# HTTP
超文本传输协议

## 请求报文
重点在于格式和参数
```
行          请求类型（GET、POST）   /    url 地址     /    HTTP协议的版本
头          Host : atguigu.com           
            Cookie : name=guigu
            Content-type : application/x-www-form-urlencoded
            User-Agent : chrome 83
空行
体          // GET请求下请求体必须为空
```

##  响应报文
重点在于格式和参数
```
行          协议版本 HTTP/1.1  /  相应状态码 200  /  响应状态字符串 OK
头          Content-Type : text/html;charset=utf-8
            Content-length : 2048
            Content-encoding :gzip
空行
体          <html> ... </html>
```


