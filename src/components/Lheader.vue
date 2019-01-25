<template>
    <header>
      <h2>
        <div class="btn_back">
          <a href="javascript:history.back()">
            <img src="../../public/btn_back.gif">
          </a>
        </div>会员登录
        <br>
        <span class="en">New user registration</span>
      </h2>
    </header>
</template>

<script>
export default {

};
</script>

<style scoped>
/* icon */
.arrow,
.cb,
/* .rb {
  background-image: url(img/icon.png);
} */
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

