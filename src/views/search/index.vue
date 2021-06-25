<template>
  <div class="search">
    <div class="search-tabs">
      <div class="search-inner">
        <ul class="search-list">
          <li class="tabs-item"><a href="" class="isActive" >综合</a></li>
          <li class="tabs-item"><a href="">用户</a></li>
          <li class="tabs-item"><a href="">攻略</a></li>
          <li class="tabs-item"><a href="">视频</a></li>
        </ul>
      </div>
    </div>
    <div class="search-container">
      <div class="search-main">
        <div class="search-list">
          <search-card></search-card>
          <search-card></search-card>
        </div>
      </div>
      <div class="search-side">
        <search-side></search-side>
      </div>
    </div>
  </div>
</template>

<script>
import SearchCard from './search-card.vue'
import SearchSide from './search-side.vue'
export default {
  components:{
    SearchCard,
    SearchSide
  }

}
</script>

<style lang="scss" scoped>
 /*  .card{
    padding: 17px;
  } */
  .search-tabs{
    width: 100%;
    background: #fff;
    padding-top: 2px;
    .search-inner{
      width: 1000px;
      margin: 0 auto;
      .search-list{
        display: flex;
        .tabs-item{
          padding: 0 15px;
          position: relative;
          a{
            position: relative;
            padding: 15px 0;
            line-height: 24px;
            display: inline-block;
          }
          .isActive{
            @include active()
          }
        }
      }
    }
  }
  .search-container{
    width: 1000px;
    margin: 10px auto;
    padding: 0 16px;
    display: flex;
    .search-main{
      width: 694px;
      margin-right: 10px;
    }
    .search-side{
      flex:  1 1;
    }
  }
</style>