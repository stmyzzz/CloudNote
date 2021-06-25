<template>
  <div class="list-header">
    <h1 class="list-headText">
      <span>{{title}}</span>
    </h1>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String,  
      required:true
    }
  }
}
</script>

<style lang="scss" scoped>
  .list-header{
    margin: 0 20px;
    height: 50px;
    display: flex;
    align-items: center;
  }

</style>