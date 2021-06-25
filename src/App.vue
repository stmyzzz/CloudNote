<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>/* 
import Header from '@/views/header'
 */
export default {
  data(){
    return {

    }
  },
  mounted(){
   document.addEventListener('scroll',this.Scroll)
  },
    methods:{
    Scroll(){
      console.log('12');
    }
    }
/*   co
mponents:{
    Header
  } */
}
</script>


<style lang="scss">
@import "@/style/handle.scss";
#app {
  font-family: "Myriad Set Pro", "Helvetica Neue", "sans-serif";
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  @include bg_color("bg_color");
  background: #f5f5f5;
}

</style>
