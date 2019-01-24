<template>
  <div id="app">
    <!-- <Xheader></Xheader>
    <Xarticle></Xarticle> -->
    <router-view></router-view>
    <Xfooter/>
  </div>
</template>

<script>
// import Xhome from './pages/Xhome.vue'
import Xfooter from "./components/Xfooter.vue";

export default {
  name: "app",
  components: {
    // Xhome,
    Xfooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>