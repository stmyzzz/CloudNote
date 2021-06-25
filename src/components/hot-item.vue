<template>
  <div class="hot-item">
    <div class="hotItem-index">1</div>
    <div class="hotItem-content">
      <h1>上海</h1>
    </div>
    <div class="hotItem-img">
      <img src="@/assets/shanghai.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .hot-item{
    position: relative;
    width: 340px;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 320px;
    background: #fff;
    margin-top: 15px;
    border-radius: 5px;
    .hotItem-index{
      font-size: 40px;
      font-weight: bold;
    }
    .hotItem-content{
      position: absolute;
      left: 0;
      right: 0;
      top: 60px;
      h1{
        font-size: 40px;
      }
    }
    .hotItem-img{
      position:absolute;
      bottom:-4px;
      left: 0;
      right: 0;
      img{
        width: 100%;
        height: 200px;
      }
    }
  }

</style>