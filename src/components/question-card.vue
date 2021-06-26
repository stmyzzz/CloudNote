<template>
  <div class="card">
    <slot name="dynmic">
    </slot>
    <div class="card-title">
      <h1 >{{data.plans_title}} id:{{data.id}}</h1>
    </div>
    <author-info :infor="data.profile"></author-info>
    <div class="card-content">
      <div class="content-left">
        <img :src="imgurl + data.plans_img" alt="">
      </div>
      <div class="content-right">
        <span class="content-span">{{data.plans_content}}</span><button class="all-btn">阅读全文<span>v</span></button>
      </div>
    </div>
    <div class="card-footer">
      <button class="att-btn"> <span>*</span>点赞</button>
      <span @click="getComment" class="comment">{{data.comments.length}}条评论</span>
      <span class="share">分享</span>
      <span class="collect">收藏</span>
      <span class="time">2020-10-24</span>
    </div>

  </div>
</template>

<script>
import AuthorInfo from '@/components/author-info'
import {imgurl} from '@/config'
import {comment,commentAuth} from '@/api'
export default {
  props:{
    data:{
      type:Object
    }
  },
  data(){
    return {
      imgurl
    }
  },
  methods:{
    async getComment(){
      let res = await comment(this.data.id,1)

      let auth = await commentAuth(1,this.data.id);
      console.log(res);
      console.log('用户评论列表',auth);
      res.data.forEach(item1 => {
        auth.forEach(item2=>{
          if(item2.id == item1.id){
            item1['status'] = 1
          }
        })
      });
      console.log('resulte',res.data);
      res.data['textId'] = this.data.id
      this.$emit('getComment',res.data)
    }
  },
  components:{
    AuthorInfo
  }
}
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    flex-direction: column;
    padding: 17px;
    border-top: 1px solid #f5f5f5;
    background: #fff;
    .card-title{
      h1{
        font-size: 17px;
      }
    }
    .card-content{
      display: flex;
      margin-top: 10px;
      .content-left{
        margin-right: 15px;
        img{
          @include wh(190px,100px);
          border-radius: 3px;
        }
      }
      .content-right{
        height: 100px;  
        overflow: hidden;
        .content-span{
          font-size: 15px;
        }
        .all-btn{
          color: $theme-color;
        }
      }
    }
    .card-footer{
        display: flex;
        align-items: center;
        margin-top: 12px;
        .att-btn{
        line-height: 28px;
        background: #ade4fd;
        border-radius: 3px;
        padding: 0px 13px;
        display: block;
        }
        .comment,.share,.collect,.time{
          margin-left: 15px;
          font-size: 15px;
        }
    }
    .card-name{
      padding: 0px 0px 8px 0;
      @include sc(15px,#666);
    }
  }

</style>