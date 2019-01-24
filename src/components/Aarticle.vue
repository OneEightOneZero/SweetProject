<template>
    <article id="content">
      <div class="title">
        <span>全部蛋糕</span>
      </div>
      <ul class="gallery">
        <li style="width: 43%; height: 190px;">
          <a href="detail-a63.html">
            <img src="http://www.sweet30.com/yyadmin/um/php/upload/20170915/15054505366489.jpg">
          </a>
          <div class="gallery_text">
            <a href="detail-a63.html"></a>
          </div>
          <a href="detail-a63.html">女神</a>
        </li>

        <li style="width: 43%; height: 190px;">
          <a href="detail-a62.html">
            <img src="http://www.sweet30.com/yyadmin/um/php/upload/20170915/15054505756639.jpg">
          </a>
          <div class="gallery_text">
            <a href="detail-a62.html"></a>
          </div>
          <a href="detail-a62.html">安地列斯</a>
        </li>

        <li style="width: 43%; height: 190px;">
          <a href="detail-a60.html">
            <img src="http://www.sweet30.com/yyadmin/um/php/upload/20170915/15054502665565.jpg">
          </a>
          <div class="gallery_text">
            <a href="detail-a60.html"></a>
          </div>
          <a href="detail-a60.html">爱琴海</a>
        </li>

        <li style="width: 43%; height: 190px;">
          <a href="detail-a61.html">
            <img src="http://www.sweet30.com/yyadmin/um/php/upload/20170915/15054505987428.jpg">
          </a>
          <div class="gallery_text">
            <a href="detail-a61.html"></a>
          </div>
          <a href="detail-a61.html">焦糖斯诺</a>
        </li>

        <li style="width: 43%; height: 190px;">
          <a href="detail-a88.html">
            <img src="http://www.sweet30.com/yyadmin/um/php/upload/20180611/15286781049768.jpg">
          </a>
          <div class="gallery_text">
            <a href="detail-a88.html"></a>
          </div>
          <a href="detail-a88.html">粉色星球</a>
        </li>

        <li style="width: 43%; height: 190px;">
          <a href="detail-a75.html">
            <img src="http://www.sweet30.com/yyadmin/um/php/upload/20180418/15240139037092.jpg">
          </a>
          <div class="gallery_text">
            <a href="detail-a75.html"></a>
          </div>
          <a href="detail-a75.html">小恶魔</a>
        </li>

        <div class="clear"></div>
      </ul>
      <div class="more">
        <a @click="getCakes" href="javascript:;">点击可见更多
          <br>
          <span class="en">Click for more</span>
        </a>
      </div>
    </article>
</template>
<script>
export default {
  data(){
    return {
      //存放蛋糕数据
      cakes:[]
    }
  },
  methods:{
    //获取数据的方法 （点击更多）
    async getCakes(){
      let data = await this.$axios.get("http://10.3.143.100:8080/app/xdirectory/article")
      // console.log(data)
      this.cakes = this.cakes.concat(data.data)
    }
  },
  created(){
    this.getCakes();
  }
}
</script>





<style scoped>
   #content {
    max-width: 640px;
    margin-right: auto;
    margin-left: auto;
}
.more {
    /* background-image: url(data:image/gif;base64,R0lGODlhKgAqANUAAMXFxfT09MnJyfLy8sjIyP7+/vb29v39/d7e3…RIESNHXSKdgvPIYJ07efb0WYhNELIAmufO1dDmd4AQ/NQrFfO7SAETSZYAcAJlgomXhAQBADs=); */
    background-repeat: no-repeat;
    background-position: left center;
    font-size:18px;
    padding-left: 50px;
    line-height: 100%;
    margin-left: 22%;
    margin-top: 10px;
    text-align: left;
}
</style>
