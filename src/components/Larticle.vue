<template>
    <article id="content">
    <div class="line2">
        <div class="indent">
        <div class="logo_b"><img src="../../public/logo_b.gif"></div>
        <input name="yhm" type="text" class="form4 name mtb_15 inputtext">
        <input name="mm" type="password" class="form4 pw mtb_15 inputpassword">
        <div class="mb_15 font_brown"> <span class="font_blue right"><a href="#">忘记密码</a></span>
            <!--<div class="cbt cb_active" name="check"  type="checkbox" val="1"></div>
            记住密码--></div>
        <button type="button" class="button3 mb_15" onclick="dldz()">登 录</button>
        
        
        <div class="al_right mb_15 font_brown">还没有账号马上 <span class="font_red"><a href="register.html">注册</a></span></div>
        </div>
    </div>
</article>
</template>

<script>
export default {
    // methods:{
    // tologin(){
    //   this.$router.push({ name: "login" })
    //  alert("请先登录")?this.$router.push({ name: "login" }):this.$router.push({ name: "darticle" })
    //   }
    // }
}
</script>


<style scoped>
/* icon */
.arrow,
.cb,
.rb {
  background-image: url(../../public/icon.png);
}
/* checkbox box */
.cb {
  width: 21px;
  height: 21px;
  display: inline-block;
  *display: inline;
  zoom: 1;
  background-position: 0 0;
  cursor: pointer;
}
.cb_active {
  background-position: 0 bottom;
}
/* radio box */
/*.rb{width:21px;height:21px;margin:0 auto;padding:0;display:inline-block;*display:inline;zoom:1;vertical-align:middle;background-position:-16px 0;cursor:pointer;}
.rb_active{background-position:-16px -21px;}*/
</style>
