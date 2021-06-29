<template>
  <div class="card collection-item">
    <div class="collection-inner">
      <router-link :to="'/plan/'+data.id" class="collectionItem-header">{{data.plan.plans_title}}</router-link>  
      <div class="collectionItem-desc">
        {{data.plan.plans_city}}
      </div>
      <div class="collectionItem-action">
        {{$utils.date(data.createdAt)}} 收藏 
        <button @click="delCollection" class="button">删除</button>
      </div>
    </div>
  </div>
</template>

<script>
import {delColl} from '@/api'
export default {
  props:['data'],
  data(){
    return {

    }
  },
  created(){
    
  },
  methods:{
    async delCollection(){
      let res = await delColl(this.data.id)
      console.log('collecionres',res);
    }
  }

}
</script>

<style lang="scss" scoped>
  .collection-item{
    padding: 0 20px;
    .collection-inner{
      padding: 20px 0;
      .collectionItem-header{
        @include sc(18px,#212121);
        font-weight: 800;
      }
      .collectionItem-desc{
        margin-top: 12px;
        font-size: 15px;
      }
      .collectionItem-action{
        margin-top: 7px;
        @include sc(14px,#999);
      }
    }
  }
</style>