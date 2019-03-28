# 使用Vue做一个可自动拼图的拼图小游戏（一）

## 背景以及最终效果

随着几个项目的提测，也闲下来了，恰好玩了一把拼图游戏，于是突发奇想打算自己写一个试试。
最终效果如下图：
![最终效果](https://github.com/usecodelee/Vue-jigsawPuzzle/blob/master/img/20190327.gif?raw=true)

### 实现的功能有：

1. 普通拼图的功能
2. 自动拼图

本部分是这篇文章的第一部分，主要讲的是实现普通拼图的功能。

## 原理

相信拼图的玩法大家一点都不陌生，就是点击一个非空的块，如果它的周围有空的块，被点击的块就会往空块的方向移动。如果最后的排列是`[1,2,3,4,5,6,7,8,0]`,则过关。
于是总结一下，我们需要做的事包括以下几个：

1. 使用Vue
2. 页面布局
3. 打乱
4. 点击和移动
5. 判断有没有过关

## 具体步骤

清楚了具体要做的事，那就一件一件跟着做就好了。

### 使用Vue

直接使用vue-cli脚手架工具安装即可。

- 1.安装

> `npm install -g @vue/cli`

- 2.创建一个项目

> `vue create hello-world`

### 页面布局

html

```html
<template>
    <div class="box">
        <transition-group name="cell" tag="div" class="container">
            <div
                @click.prevent="clickBlock(index)"
                v-for="(puzzle,index) in puzzles"
                :key="puzzle"
                v-text="puzzle"
                :class="puzzle === ''? 'cell cells':'cell'"
            ></div>
        </transition-group>
    </div>
</template>
```

css

```css
<style>
.box {
    width: 400px;
    margin: 60px auto 0;
}

.container {
    display: flex;
    flex-wrap: wrap;
    width: 306px;
    margin-top: 10px;
    border: 1px solid #ccc;
}
.cell {
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    height: 100px;
    margin: 1px;
    -moz-box-shadow: 0px 0px 3px #333333;
    -webkit-box-shadow: 0px 0px 3px #333333;
    box-shadow: 0px 0px 3px #333333;
    background-color: #996666;
}
.cells {
    background-color: #fff;
    -moz-box-shadow: 0px 0px 0px #333333;
    -webkit-box-shadow: 0px 0px 0px #333333;
    box-shadow: 0px 0px 0px #333333;
    z-index: -999;
}
.cell-move {
    transition: transform 0.5s;
}
</style>
```

有一点需要注意的是我在页面中是使用Vue的列表的排序过渡动画，效果看起来挺不错的。`<transition-group>` 组件有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的 `v-move` 特性，它会在元素的改变定位的过程中应用。像之前的类名一样，可以通过 `name` 属性来自定义前缀，也可以通过 `move-class` 属性手动设置。详细使用情况请看：  
[https://cn.vuejs.org/v2/guide/transitions.html](https://cn.vuejs.org/v2/guide/transitions.html)  

js部分则需要在`data`属性中定义一个数组，`methods`中需要定义一个渲染函数，`mounted`中则是执行这个渲染函数：  

```javascript
data() {
  return {
    puzzles: []
  };
},
rander() {
  this.puzzles = [1,2,3,4,5,6,7,8,'']
},
mounted() {
  this.rander();
}
```

现在我们来看一下效果：  
![2.jpg](https://github.com/usecodelee/Vue-jigsawPuzzle/blob/master/img/2.jpg?raw=true)

### 打乱

现在给这个拼图加个打乱的按钮。

```html
<button @click="shuffle">重置</button>
```

然后在methods中定义一个‘`shuffle`’函数，负责打乱整个拼图：

```javascript
shuffle() {
  this.puzzles = _.shuffle(this.puzzles);
},
```

其中`_.shuffle`是`lodash`的打乱数组函数，当然不喜欢这个库的话也可以自己写一个打乱函数。  
然后我们再看看效果：  
![3.gif](https://github.com/usecodelee/Vue-jigsawPuzzle/blob/master/img/3.gif?raw=true)

有一个需要注意的点：我们写的打乱函数打乱的拼图其实不一定都是可以复原的。能不能复原需要用专门的算法计算出来，我会在下一篇文章讲到。

### 点击和移动

这个地方稍微复杂一点，具体过程就是当点击某个块的时候获取点击快上下左右的值，如果空白块在点击快的左边，并且点击快不是此列的第一个，则点击块往左侧和空白块交换位置，其实是交换值。
具体的代码如下：  

```javascript
// 点击方块
clickBlock(index) {
  let curIndex = this.puzzles[index];
  let leftIndex = this.puzzles[index - 1];
  let rightIndex = this.puzzles[index + 1];
  let topIndex = this.puzzles[index - 3];
  let bottomIndex = this.puzzles[index + 3];

  if (leftIndex === '' && index % 3) {
    this.$set(this.puzzles, index - 1, curIndex);
    this.$set(this.puzzles, index, '');
  } else if (rightIndex === '' && 2 !== index % 3) {
    this.$set(this.puzzles, index + 1, curIndex);
    this.$set(this.puzzles, index, '');
  } else if (topIndex === '') {
    this.$set(this.puzzles, index - 3, curIndex);
    this.$set(this.puzzles, index, '');
  } else if (bottomIndex === '') {
    this.$set(this.puzzles, index + 3, curIndex);
    this.$set(this.puzzles, index, '');
  }
}
```

可以点击之后再来看看效果：

![4.gif](https://github.com/usecodelee/Vue-jigsawPuzzle/blob/master/img/4.gif?raw=true)

### 判断有没有过关

判断有没有过关的条件是：  

1. 最后一块是空
2. 前面8个是从1-8顺序排列

```javascript
pass() {
  if (this.puzzles[8] === '') {
    const newPuzzles = this.puzzles.slice(0, 8);
    const isPass = newPuzzles.every((e, i) => e === i + 1);
    if (isPass) {
      alert('666！');
    }
  }
}
```

看看最终的效果：  
![5.gif](https://github.com/usecodelee/Vue-jigsawPuzzle/blob/master/img/5.gif?raw=true)

项目源码：[https://github.com/usecodelee/Vue-jigsawPuzzle](https://github.com/usecodelee/Vue-jigsawPuzzle)