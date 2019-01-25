<template>
  <div>
	<Lheader></Lheader>
	<Larticle></Larticle>
  </div>
</template>

<script>
import Lheader from "../components/Lheader.vue";
import Larticle from "../components/Larticle.vue";

export default {
  components: {
    Lheader,
    Larticle
  }
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
