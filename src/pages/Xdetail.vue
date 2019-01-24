<template>
  <div>
      <Dheader></Dheader>
      <Darticle></Darticle>
  </div>
</template>
<script>
    import Dheader from "../components/Dheader.vue"
    import Darticle from "../components/Darticle.vue"
    
export default {
    components:{
        Dheader,
        Darticle
    }
};
</script>
<style scoped>
/* select */
.select {
  display: inline-block;
  margin-bottom: 10px;
}
.select li {
  padding: 0px !important;
  float: none !important;
  text-align: left !important;
}
.select .select-list {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 0px !important;
  border-top-style: none !important;
  padding-right: 5px;
  list-style-type: none;
}
.select dl {
  zoom: 1;
  border-top-style: none;
  border-right-style: none;
  border-bottom-style: none;
  border-left-style: none;
  margin: 0px;
}
.select dl:after {
  content: " ";
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
}
.select dt {
  width: 100px;
  position: absolute;
  top: 0;
  left: -100px;
  text-align: right;
  height: 30px;
  line-height: 30px;
  display: none;
}
.select dd {
  /*float:left;*/
  display: inline;
  line-height: 30px;
  margin-left: 18px;
  margin-right: 18px;
  text-align: center;
  padding: 0px !important;
  width: 110px;
}
.select a {
  display: inline-block;
  white-space: nowrap;
  height: 30px;
  padding: 0;
  text-decoration: none;
  border: 1px solid #e0d1cb;
  -webkit-transition: all 0s ease-in-out;
  -moz-transition: all 0s ease-in-out;
  -o-transition: all 0s ease-in-out;
  transition: all 0s ease-in-out;
  margin-top: 3px;
  margin-bottom: 3px;
  background-color: #fff;
  width: 110px;
  color: #7f4623;
}
.select a:hover {
  border: 1px solid #6f370d;
  /* background-image: url(img/arrow2.png); */
  background-repeat: no-repeat;
  background-position: right bottom;
}
.select .selected a {
  border: 1px solid #6f370d;
  margin: 2px 0px;
  /* background-image: url(img/arrow2.png); */
  background-repeat: no-repeat;
  background-position: right bottom;
}
@media only screen and (max-width: 480px) {
  .select dt {
    height: 24px;
    line-height: 24px;
  }
  .select dd {
    line-height: 24px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .select a {
    height: 24px;
  }
}
@media only screen and (max-width: 320px) {
  .select dd {
    margin-left: 2px;
    margin-right: 2px;
  }
}
</style>

