# JSON基本介绍

## 对象

```json
{
    "key1" : valuel1,
    "key2" : valuel2,
    "keyN" : valuelN
}
```

## 数组

```json
[
    { "key1" : value11 , "key2" : value12 , "keyN" : value1N },
    { "key2" : value21 , "key2" : value22 , "keyN" : value2N },
    { "key2" : valueN1 , "key2" : valueN2 , "keyN" : valueNN }
]
```

## 函数详解

### JSON.parse()

```javascript
JSON.parse(text[, revier])
```

#### @param

- text        必需        有效的JSON字符串

- revier     可选        转换结果的函数为对象的每个成员调用

  

  示例：

```javascript
var obj = JSON.parse('{ "name":"runoob", "alexa":10000, "site":"www.runoob.com" }'
```

使用时JSON不支持函数，但如下例子可以展示如何使用

```javascript
var text = '{ "name":"Runoob", "alexa":"function () {return 1000;}", "site":"www.runoob.com"}';
var obj = JSON.parse(text);
obj.alexa = eval("(" + obj.alexa + ")");

document.getElementById("demo").innerHTML = obj.name + " Alexa 排名：" + obj.alexa(); 
```

### JSON.stringify()

```javascript
JSON.stringify(value[, replacer[, space]])
```

#### @param

- value         必需      需要转化的相应的js的值
- replacer     可选      如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数反回 undefined，则排除成员。根对象的键是一个空字符串：""。如果replacer 是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。当 value 参数也为数组时，将忽略 replacer 数组。
-  space      可选        给文本添加缩进

### eval()

用于将JSON文本转换为JavaScript对象

示例：

```javascript
eval( "(" + txt + " )" )
```

# AJAX

## 常见应用方式

- 运用XHTML + CSS 来表达资讯

- 运用 JavaScript 操作 DOM（Document Object Model）来执行动态效果
- 运用 XML 和 XSLT 操作资料;
- 运用 XMLHttpRequest 或新的 Fetch API 与网页服务器进行异步资料交换；

### XMLHttpRequest对象

示例：一个通用写法但往往开发过程中不需考虑IE5，IE6 

```javascript
var xmlhttp;
if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp=new XMLHttpRequest();
} else {
    // IE6, IE5 浏览器执行代码
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
```

## 函数具体用法

### open()

用于配置请求

#### @param

- method          请求类型：GET or POST
- url                  文件在服务器的地址
- async             true（异步）

### send()

用于将请求发送到服务器

#### @param

- string              仅用于POST请求

### setRequesHeader()

给请求添加HTTP头

#### @param

- header              头名称
- value                头值

### responseText()

 获取字符型响应数据

```javascript
document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
```

### responseXML()

获取XML响应数据

```javascript
document.getElementById("myDiv").innerHTML=xmlhttp.responseXML;
```

> [!IMPORTANT]
>
> ### onreadystatechange事件

#### XMLHttpRequest属性：

- onreadystatechange                  存储函数，当ready属性改变时调用
- readyState                                 存储状态0-4  

0 - 请求未初始化   1 - 服务器连接已建立  2 - 请求已经接受  3 - 请求处理中  4 - 请求已经完成，且响应已就绪

- status             200 - “ OK ”     404 - NotFound



```javascript
// 创建 XMLHttpRequest 对象
var xhr = new XMLHttpRequest();

// 配置请求
xhr.open('GET', 'https://api.example.com/data', true);

// 设置请求头（如果需要的话）
// xhr.setRequestHeader('Content-Type', 'application/json');

// 定义回调函数
xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        // 请求成功，处理响应
        console.log('Response:', xhr.responseText);
    } else {
        // 处理错误
        console.error('Error:', xhr.statusText);
    }
};

// 处理网络错误
xhr.onerror = function () {
    console.error('Request failed');
};

// 发送请求
xhr.send();
```





# Promise

构造函数，接受函数作为参数，该函数是同步且立即执行

#### @param

- resolv               传入（起始）函数执行成功则调用
- reject                失败调用

#### @result

Promise对象   包含三个方法且其参数均是一个函数

- then : 处理成功状态的回调函数
- catch : 处理失败状态的回调函数
- finaly : 成功失败时均会执行的回调函数 

> [!NOTE]
>
> - 值得注意的是，resolve() 中可以放置一个此参数(resolve(value))传递给下一个then 而then可以返回一个参数传递给下一个then
> - resolve 和 reject 作用域只在起始函数生效，其他序列中已经被销毁
> - resolve 和 reject 无法使起始函数停止运行需要其他方法退出函数（return）
> - .then() 传入的函数会按顺序依次执行，有任何异常都会直接跳到 catch 序列

示例

```javascript
// 未使用Promise时的计时器程序
setTimeout(function () {
    console.log("First");
    setTimeout(function () {
        console.log("Second");
        setTimeout(function () {
            console.log("Third");
        }, 3000);
    }, 4000);
}, 1000);

// 使用后


function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}

print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});
```

tips:

1. 每当需要一个异步任务就调用一次then

```javascript
// 此段代码块是核心的Promise函数
function print(delay, message) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(message);
            resolve();
        }, delay);
    });
}
```

#### await

可以用于简化异步函数的结构，async function 中可以使用 await 指令，该指令后面必须跟着一个Promise，异步函数会在该Promise运行中暂停，知道运行结束继续运行。

上述函数调用优化示例：

```javascript
// 优化前
print(1000, "First").then(function () {
    return print(4000, "Second");
}).then(function () {
    print(3000, "Third");
});
// 优化后
async function asyncFunc() {
    await print(1000, "First");
    await print(4000, "Second");
    await print(3000, "Third");
}
asyncFunc();
```

tips： Promise如果有正常返回值await语句也会返回他们
