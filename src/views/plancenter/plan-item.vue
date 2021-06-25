<template>
  <div class="plan-item">
      <img src="/img/shanghai.39f11107.png" alt="">
      <div class="plan-content">
        <h1 class="plan_name">{{data.plans_title}}</h1>  
      </div>
      <div class="plan-foot" @click="del(data.id)">删除</div>
  </div>
</template>

<script>
import {del} from '@/api'
export default {
  props:{
    data:{
      type:Object 
    }
  },
  methods:{
    async del(id){
      let data = await del(id)
      console.log(data);  
    }
  }

}
</script>

<style lang="scss" scoped>
  .plan-item{
    position: relative;
    @include wh(160px,200px);
    margin: 0px 20px 50px 20px;
    cursor: pointer;
    border-radius: 5px;
    @include bs();
    img{
      @include wh(100%,100%);
    }
    .plan-content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
    }
  }
</style>