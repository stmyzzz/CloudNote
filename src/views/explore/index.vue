<template>
  <div class="explore">
    <div class="explore-container">
      <div class="explore-header">
        <svg class="Zi Zi--LabelSpecial" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z" fill-rule="evenodd"></path></svg>
        <span>热门攻略</span>
      </div>
      <div class="explore-cards">
        <explore-card></explore-card>
        <explore-card></explore-card>
      </div>
    </div>
  </div>
</template>

<script>
import ExploreCard from './explore-card'
export default {
  components:{
    ExploreCard
  }
}
</script>

<style lang="scss" scoped>
  .explore-container{
    width: 1000px;
    margin: 30px auto;
    .explore-header{
      display: flex;
      align-items: center;
      span{
        margin-left: 15px;
        font-weight: 900;
        font-size: 25px;
      }
    }
    .explore-cards{
      padding: 20px 0px;
      display: flex;
      justify-content:space-between;
    }
  }
</style>