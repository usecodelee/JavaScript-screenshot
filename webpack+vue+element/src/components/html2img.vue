<template>
<div class="content">
   <h2>{{tittle}}</h2>
   <div id="main" v-loading="loading" class="main">
    <div style="background:red;width: 600px;" id="test" v-show="htmldom" class="borderSet">
        <div style="background:green;" class="borderSet">
            <div style="background:blue;" class="borderSet">
                <div style="background:yellow;" class="borderSet">
                    <div style="background:orange;" class="borderSet">
                        33333333333333333333333333333333
                    </div>
                </div>

            </div>

        </div>
        </div>
    </div>
    <div class="canvasPos" v-show="canvasPos"></div>
    <div class="imgPos" v-show="imgPos"></div>
    <h2 class="toCanvas" v-show="tocanvash2"> <a href="javascript:void(0);" @click="tocanvas"> 转成canvas </a></h2>
    <h2 v-show="topic"><a href="javascript:void(0);" @click="toPic"> 转成图片 </a></h2>
    <div v-show="parmas">
        <el-form :inline="true" :model="imgParmas" class="demo-form-inline">
            <el-form-item label="图片宽度：">
                <el-input v-model="imgParmas.imgWidth" placeholder="默认是原图宽度"></el-input>
            </el-form-item>
            <el-form-item label="图片高度：">
                <el-input v-model="imgParmas.imgHeight" placeholder="默认是原图高度"></el-input>
            </el-form-item>
            <el-form-item label="图片名称：">
                <el-input v-model="imgParmas.filename" placeholder="默认是当前时间戳"></el-input>
            </el-form-item>
            <el-form-item label="图片类型：">
                <el-select v-model="imgParmas.type" placeholder="图片类型">
                <el-option label="PNG格式" value="png"></el-option>
                <el-option label="JEPG格式" value="jepg"></el-option>
                <el-option label="BMP格式" value="bmp"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="save">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
        tittle:'原始HTML',
        topic:false,
        htmldom:true,
        parmas:false,
        tocanvash2:true,
        loading:false,
        canvasWidth:'',
        canvasHeight:'',
        imgParmas:{
            imgWidth:'',
            imgHeight:'',
            filename:'',
            type:'png'
        },
        canvasPos:false,
        imgPos:false,
        canvas:''
    }
  },
  methods:{
  tocanvas(){
    let _this=this;
    this.loading=true;
    let test=document.getElementById('test');
    let main=document.getElementById('main');
    let canvasPos=document.getElementsByClassName('canvasPos')[0];
    // 调用html2canvas插件
    html2canvas(test,{useCORS:true,foreignObjectRenderign:true,allowTaint:false}).then(function(canvas) {
        // canvas宽度
        _this.canvasWidth = canvas.width;
        // canvas高度
        _this.canvasHeight = canvas.height;
        // 渲染canvas
        canvasPos.appendChild(canvas);
        _this.htmldom=false;
        _this.tocanvash2=false;
        _this.loading=false;
        _this.canvasPos=true;
        // 显示‘转成图片’按钮
        _this.topic=true;
        _this.tittle='这是canvas元素';

    });
  },
  toPic(){
      if(this.canvasWidth===''&&this.canvasHeight===''){
          this.$message({
              type:'error',
              message:'请先将html转为canvas'
          });
      }else{
          this.canvas=document.getElementsByTagName('canvas')[0];
          let imgPos=document.getElementsByClassName('imgPos')[0];
          // 调用Canvas2Image插件
          let img=Canvas2Image.convertToImage(this.canvas,this.canvasWidth,this.canvasHeight);
          // 渲染图片
          imgPos.appendChild(img);
          this.canvasPos=false;
          this.imgPos=true;
          this.topic=false;
          this.parmas=true;
          this.tittle='这是img元素';

      }
  },
  save(){
    console.log(this.imgParmas);
    // 点击保存
    let type = this.imgParmas.type; //图片类型
    let w = (this.imgParmas.imgWidth?this.imgParmas.imgWidth:this.canvasWidth).toString(); //图片宽度
    let h = (this.imgParmas.imgHeight?this.imgParmas.imgHeight:this.canvasHeight).toString(); //图片高度
    let f = (this.imgParmas.filename?this.imgParmas.filename:(new Date()).getTime()).toString(); //图片文件名
    // 调用Canvas2Image插件
    console.log(type);
    console.log(w);
    console.log(h);
    console.log(f);
    Canvas2Image.saveAsImage(this.canvas, w, h, type, f);
  }
},
mounted() {
    this.canvas='';
},
}


</script>

<style scoped>
    .borderSet {
        padding: 20px;
        border: 5px solid black;
    }
    
    h2 {
        color: #fff;
        border-radius: 5px;
        padding: 5px;
        background: #bbb;
        margin: 10px;
    }
    
    #test{
        margin: 0 auto;
    }
    form{
        margin-top: 20px;
    }
</style>
