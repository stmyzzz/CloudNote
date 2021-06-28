<template>
  <div class="idea-list">
    <author-info :infor="data.profile"></author-info>
    <div class="card-content">
      <div class="content-right">
        <span class="content-span">{{data.idea_text}}</span>
      </div>
    </div>
    <div class="card-footer">
      <button @click="getZan" class="att-btn"> <span>*</span>{{zanStatus}}</button>
      <span @click="getComment" class="comment">{{data.comments.length}}条评论</span>
      <span class="time">{{$utils.date(data.createdAt)}}</span>
  </div>
  </div>
</template>

<script>
import AuthorInfo from '@/components/author-info'
import {comment,upZan} from '@/api'
export default {
  props:{
    data:{
      type:Object
    }
  },
  components:{
    AuthorInfo
  },
  data(){
    return {
      zanStatus:"点赞",
    }
  },
  created(){
    console.log('thisdata',this.data);
      this.data.zanStatus ==1 ? this.zanStatus ="取消" : this.zanStatus ="点赞"
  },
  methods:{
      async getComment(){
      let res = await comment(this.data.id,0)
      console.log(res);
      console.log('resulte',res.data);
      res.data['textId'] = this.data.id
      this.$emit('getComment',res.data)
    },
        async getZan(){
      console.log('this.data.id',this.data.id);
      let res = await upZan(this.data.id,0)
      this.zanStatus == "点赞" ? this.zanStatus ="取消": this.zanStatus = "点赞"
      console.log(res);
    },
  }
}
</script>

<style lang="scss" scoped>
    .idea-list{
      margin-bottom: 10px;
    }
    .card-title{
      h1{
        font-size: 17px;
      }
    }
    .card-content{
      display: flex;
      margin-top: 10px;
      .content-right{ 
        overflow: hidden;
        .content-span{
          font-size: 15px;
          font-weight:600;
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
</style>