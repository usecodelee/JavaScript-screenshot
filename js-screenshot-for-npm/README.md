# js_screen_shots

> 一个基于 JavaScript 的 DOM 截图工具。  

[![star this repo](http://githubbadges.com/star.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot)[![fork this repo](http://githubbadges.com/fork.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot/fork) [![npm](https://img.shields.io/npm/v/js_screen_shots.svg)](https://www.npmjs.com/package/js_screen_shots) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

## 如何使用

1.安装

```bash
# 使用npm安装
npm install --save js_screen_shots
```

2.导入

```javascript
import all from '../node_modules/js_screen_shots'
console.log(all);
// {html2canvas: ƒ, Canvas2Image: {…}}
// Canvas2Image: {saveAsImage: ƒ, saveAsPNG: ƒ, saveAsJPEG: ƒ, saveAsGIF: ƒ, saveAsBMP: ƒ, …}
// html2canvas: ƒ html2canvas(element, conf)
```

3.使用

可以看见all对象里面有两个方法：html2canvas和Canvas2Image。  
html2canvas的作用是把html标签转化为canvas元素。  
Canvas2Image的作用是把canvas元素转化为img元素。

## 参考文档

 [html2canvas文档](http://html2canvas.hertzen.com/documentation)  
 [Canvas2Image文档](https://github.com/hongru/canvas2image)
