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
      <button @click="getZan" class="att-btn"> <span>*</span>{{zanStatus}}</button>
      <span @click="getComment" class="comment">{{data.comments.length}}条评论</span>
      <button :data-clipboard-text="shareUrl" ref="share" @click="onShareClick" class="share">分享</button>
      <span @click="getCollection" class="collect">{{collectionStatus}}</span>
      <span class="time">{{$utils.date(data.createdAt)}}</span>
    </div>  
  </div>
</template>

<script>
import AuthorInfo from '@/components/author-info'
import {imgurl} from '@/config'
import {comment,upZan,upColl} from '@/api'
import Clipboard from 'clipboard'
export default {
  props:{
    data:{
      type:Object
    }
  },
  data(){
    return {
      imgurl,
      zanStatus:"点赞",
      collectionStatus:"收藏",
      shareUrl:""
    }
  }, 
  created(){
      this.data.zanStatus ==1 ? this.zanStatus ="取消" : this.zanStatus ="点赞"
      this.data.collStatus ==1 ? this.collectionStatus ="取消" : this.collectionStatus ="收藏"
      this.shareUrl = "复制测试"
    },
    mounted(){
      this.initShare()
    },
  methods:{ 
    initShare() {
      new Clipboard(".share")
    },
    onShareClick() {
      alert("分享链接已经复制到剪贴板。")
    },
    async getComment(){
      let res = await comment(this.data.id,1)
      console.log(res);
      console.log('resulte',res.data);
      res.data['textId'] = this.data.id
      this.$emit('getComment',res.data)
    },
    async getZan(){
      console.log('this.data.id',this.data.id);
      let res = await upZan(this.data.id,1)
      this.zanStatus == "点赞" ? this.zanStatus ="取消": this.zanStatus = "点赞"
      console.log(res);
    },
    async getCollection(){
      console.log('this.data.id',this.data.id);
      let res = await upColl(this.data.id)
      this.collectionStatus == "收藏" ? this.collectionStatus ="取消": this.collectionStatus = "收藏"
      console.log(res);
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