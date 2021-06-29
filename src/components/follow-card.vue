<template>
  <div class="follow-card">
    <div class="card-img">
      <img width="60" height="60" :src="imgurl + data.profile.avatal_url" alt="">
    </div>
    <div class="card-content">
      <h2 class="content-head">
        <router-link :to="'/people/'+data.profile.userId">
          {{data.profile.profile_name}}
        </router-link>
      </h2>
      <div class="content-desc">
        <div>
          <div class="desc1">{{data.profile.sign}}</div>
          <div class="desc-status">
            <span class="status-item">{{data.profile.plans.length}} 攻略</span>
            <span class="status-item1">{{data.profile.follows.length}}关注者</span>
          </div>
        </div>
      </div>
    </div>
    <div class="card-extra">
      <button @click="upFollow()">取消关注</button>
    </div>
  </div>
</template>

<script>
import {upFollow} from '@/api'
import {imgurl} from '@/config'
export default {
  props:['data'],
  data(){
    return {
      imgurl
    }
  },
  created(){

  },
  methods:{
    async upFollow(id){
      let res = await upFollow(id)
      console.log('upfollow',res);
    }
  }
}
</script>

<style lang="scss" scoped>
  .follow-card{
    padding: 16px 20px;
    display: flex;
    .card-img{
      margin-right: 10px;
    }
    .card-content{
      flex: 1;
      .content-head{
        margin-bottom: 5px;
        color: #8590a6;
        cursor: pointer;
      }
      .content-desc{
        .desc-status{
          margin-top: 5px;
          color: #8590a6;
          .status-item1::before{
            content:'*';
            margin:0 5px
          }
        }
      }
    }
    .card-extra{
      align-self: center;
      button{
        min-width: 90px;
        border-color: #8590a6;
        background-color: #8590a6;
        padding: 0 16px;
        line-height: 32px;
        @include sc(14px,#fff)
      }
    }
  }
</style>        