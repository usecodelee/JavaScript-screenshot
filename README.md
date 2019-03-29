# JavaScript-screenshot  

[![star this repo](http://githubbadges.com/star.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot)[![fork this repo](http://githubbadges.com/fork.svg?user=usecodelee&repo=JavaScript-screenshot&style=default)](https://github.com/usecodelee/JavaScript-screenshot/fork) [![npm](https://img.shields.io/npm/v/js_screen_shots.svg)](https://www.npmjs.com/package/js_screen_shots) [![languages](https://img.shields.io/badge/javascript-81.4%25-green.svg)](https://github.com/usecodelee/JavaScript-screenshot) [![node](https://img.shields.io/badge/node-%3E1.0.0-green.svg)](https://github.com/usecodelee/JavaScript-screenshot) [![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

[中文](https://github.com/usecodelee/JavaScript-screenshot/blob/master/README_zh.md) 

## Introduction

JavaScript implementation screenshot,There are two libraries used:

> [Html2Canvas.js](https://github.com/niklasvh/html2canvas)  
> [Canvas2Image.js](https://github.com/SuperAL/canvas2image)

I mainly made two demos and one NPM package:

1. [Simple Version](https://github.com/usecodelee/JavaScript-screenshot/tree/master/simple)
2. [Webpack+Vue+Element Version](https://github.com/usecodelee/JavaScript-screenshot/tree/master/simple)
3. [js-screenshot-for-npm](https://github.com/usecodelee/JavaScript-screenshot/tree/master/js-screenshot-for-npm)

## Simple Version Of Use 

> Open `index.html` directly in your browser.

## Webpack+Vue+Element Version Of Use

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Example 

> **The original html is like this：**

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/1%E4%B8%8A.png" width="400" hegiht="500" align=center style="border:2px #ccc dashed;"/>

> **This is the element node：**

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/1%E4%B8%8B.jpg" width="400" hegiht="500" align=center />

> **This is after converting to canvas：**

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/2%E4%B8%8A.jpg" width="400" hegiht="500" align=center />

> **This is the element node：**

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/2%E4%B8%8B.jpg" width="400" hegiht="500" align=center />

> **This is after converting to img：**

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/3%E4%B8%8A.jpg" width="400" hegiht="500" align=center />

> **This is the element node：**

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/3%E4%B8%8B.jpg" width="400" hegiht="500" align=center />

> **This is the final result：**

<img src="https://github.com/usecodelee/JavaScript-screenshot/blob/master/img/4.jpg" width="400" hegiht="500" align=center />

## js-screenshot-for-npm

```bash
npm install --save js_screen_shots
```

For details, see the document [README.md](https://github.com/usecodelee/JavaScript-screenshot/tree/master/js-screenshot-for-npm).
