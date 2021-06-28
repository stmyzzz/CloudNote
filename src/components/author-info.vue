<template>
      <div class="author-info">
      <span class="author-avatar">
        <div class="info">
          <a class="info-link" href="">
            <img :src="imgurl + infor.avatal_url" alt="">
          </a>
        </div>
      </span>
      <div class="author-content">
        <div class="author-head">
          <span>{{infor.profile_name}}</span>
        </div>
        <div class="author-detail">
          <p>{{infor.sign}}</p>
        </div>
      </div>
    </div>
</template>

<script>
import {imgurl} from '@/config'
export default {
  props:{
    infor:{
      type:Object
  }
  },
  data(){
    return{
      imgurl
    }
  },
  created(){
    console.log('头像',this.infor);
  }
}
</script>

<style lang="scss" scoped>
    .author-info{
      display: flex;
      margin-top: 6px;
      .author-avatar{
        img{
          width: 38px;
          height: 38px;
        }
      }
      .author-content{
        margin-left: 14px;
        font-size: 14px;
        font-weight: 600;
      }
    }
</style>