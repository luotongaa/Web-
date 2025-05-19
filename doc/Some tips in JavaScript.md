# 函数

- 变量表达式存储变量后，变量也可以做函数去使用

```javascript
// 此处函数为一个匿名函数
var x = function (a, b) {return a * b};
var z = x(4, 3);
```

- 函数可以在被声明之前调用（函数提升），但是表达式定义函数时无法提升
- 函数可以自调用

当该函数后紧跟一个()时该函数会自动调用

```javascript
(function () {
    var x = "Hello!!";      // 我将调用自己
})();
```

- 函数有自己的属性和方法
- 箭头函数

箭头函数会默认帮我们绑定外层 this 的值，所以在箭头函数中 this 的值和外层的 this 是一样的

```javascript
// ES5
var x = function(x, y) {
     return x * y;
}
 
// ES6   
// 一个参数时（）可以省略，一句时return和{}可以省略s
const x = (x, y) => {return x * y};
```

- arguments对象

该对象包含了函数调用的参数数组

```javascript
x = sumAll(1, 123, 500, 115, 44, 88);
 
function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
```

- 函数作为方法调用

函数作为方法调用时，会使得this的值成为对象本身

```javascript
var myObject = {
    fullName: function () {
        return this;
    }
}
myObject.fullName();        
```

- 构造函数调用

可以通过new关键字调用构造函数，实际上js函数是重新创建的对象

```javascript
// 构造函数:
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}
// 这里创建了一个新的对象
var x = new myFunction("John","Doe");
x.firstName;                             // 返回 "John"
```

- 作为函数方法调用函数

call() 方法

```javascript
function myFunction(a, b) {
    return a * b;
}
myObject = myFunction.call(myObject, 10, 2);     // 返回 20
```

apply() 方法

```javascript
function myFunction(a, b) {
    return a * b;
}
myArray = [10, 2];
myObject = myFunction.apply(myObject, myArray);
```

二者第一个参数都必须时对象本身，二者区别在于传入参数方法不同。

- 函数的闭包

函数内部的子函数会访问上层父函数作用域，将父函数中的变量变为自己的私有变量使得其不会被销毁

```javascript
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
```

它使得函数拥有私有变量变成可能。计数器 (counter) 受匿名函数的作用域保护，只能通过 add 方法修改。

 闭包是一种保护私有变量的机制，它在函数执行时创建一个私有作用域，从而保护内部的私有变量不受外界干扰。直观地说，闭包就像是一个不会被销毁的栈环境。

# 类

- constrtuctor()

 从本质上来其是类的构造函数，可以不定义，js会自动添加一个空的构造方法，作用是初始化对象的属性

```javascript
class Runoob {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
```

- new

类定义好后可以用new关键字创造对象

```javascript
class Runoob {
  constructor(name, url) {
    this.name = name;
    this.url = url;
  }
}
 
let site = new Runoob("菜鸟教程",  "https://www.runoob.com");
```

- extends

该关键字可以用于继承一个类

```javascript
// 基类
class Animal {
    // eat() 函数
    // sleep() 函数
};
//派生类
class Dog extends Animal {
    // bark() 函数
};
```

- super

调用父类的构造方法，即访问父类的属性和方法

## 基本事件

### 鼠标事件

**click** 鼠标点击

**mouseenter** 鼠标经过

**mouseleave** 鼠标离开

### 焦点事件

**focus** 获得焦点

**blur** 失去焦点

### 键盘事件

**keydown**  键盘按下触发

**keyup** 键盘抬起触发 

### 文本事件

**input** 用户输入事件
