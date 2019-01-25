<template>
  <footer>
    <div class="foot_text">
      <span class="right">|
        <a href="#">返回顶部</a>
      </span>
      <span class="font_blue" style="float:left">
        <a @click="tologin">登录</a>|
        <a @click="tozhuce">注册</a>
      </span>
      <div class="clear"></div>
    </div>
    <div class="foot_box">
      <div class="foot_logo">
        <img src="../../public/foot_logo.gif" alt="sweet蛋糕" align="absmiddle">
      </div>|&nbsp;&nbsp;
      <span class="font_brown">订购专线：400-652-9987</span>
      <br>COPYRIGHT 2015
    </div>
  </footer>
</template>
<script>
export default {
  methods:{
    tologin(){
      this.$router.push({ name: "login" })
      // alert("请先登录")?this.$router.push({ name: "login" }):this.$router.push({ name: "darticle" })
    },
    tozhuce(){
       this.$router.push({ name: "zhuce" })
    }
  }
}
</script>
