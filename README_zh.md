# JavaScript实现截图

[![star this repo](http://githubbadges.com/star.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot)[![fork this repo](http://githubbadges.com/fork.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot/fork) [![npm](https://img.shields.io/npm/v/js_screen_shots.svg)](https://www.npmjs.com/package/js_screen_shots) [![languages](https://img.shields.io/badge/javascript-81.4%25-green.svg)](https://github.com/usecodelee/JavaScript-screenshot) [![node](https://img.shields.io/badge/node-%3E1.0.0-green.svg)](https://github.com/usecodelee/JavaScript-screenshot) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## 简介

JavaScript实现网页截图，使用的库有两个：

> [Html2Canvas.js](https://github.com/niklasvh/html2canvas)  
> [Canvas2Image.js](https://github.com/SuperAL/canvas2image)

我主要是做了两个demo和一个npm包：

1. [简单版的实现](https://github.com/usecodelee/JavaScript-screenshot/tree/master/simple)
2. [Webpack+Vue+Element版的实现](https://github.com/usecodelee/JavaScript-screenshot/tree/master/simple)
3. [js-screenshot-for-npm](https://github.com/usecodelee/JavaScript-screenshot/tree/master/js-screenshot-for-npm)

## 如何使用简单版

> 直接打开`index.html`即可

## 如何使用Webpack+Vue+Element版

``` bash
# 安装依赖
npm install

# 在localhost：8080进行热重新加载
npm run dev

# 压缩构建为生产环境代码
npm run build

# 构建为生产环境代码并查看捆绑分析器报告
npm run build --report
```

### 使用示例

> 原始html是这样的：

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/1%E4%B8%8A.png" width="500" hegiht="313" align=center />

> 这是元素节点：

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/1%E4%B8%8B.jpg" width="500" hegiht="313" align=center />

> 这是转成canvas之后：

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/2%E4%B8%8A.jpg" width="500" hegiht="313" align=center />

> 这是元素节点：

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/2%E4%B8%8B.jpg" width="500" hegiht="313" align=center />

> 这是转成img之后：

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/3%E4%B8%8A.jpg" width="500" hegiht="313" align=center />

> 这是元素节点：

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/3%E4%B8%8B.jpg" width="500" hegiht="313" align=center />

> 这是最终截图结果：

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/4.jpg" width="500" hegiht="313" align=center />

## 使用npm安装js_screen_shots

```bash
npm install --save js_screen_shots
```

详情见[README.md](https://github.com/usecodelee/JavaScript-screenshot/tree/master/js-screenshot-for-npm)
