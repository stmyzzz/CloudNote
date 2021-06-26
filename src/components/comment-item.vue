<template>
  <ul class="comment-ul">
    <li class="comment-li">
      <div class="comment-item">
        <div class="comment-header">
          <span class="user-img"><img :src="imgurl + data.profile.avatal_url" alt=""></span>
          <span class="user-name">
            <router-link :to="'/people/'+data.profile.userId">{{data.profile.profile_name}}</router-link>
          </span>
          <span class="user-date">
            {{$utils.date(data.updatedAt)}}
          </span>
        </div>
        <div class="comment-desc">
          {{data.comment_text}}
          <span  @click="commentDel" class="comment-del button" v-if="data.status">{{msg}}</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {imgurl} from '@/config'
import {commentDel} from '@/api'
export default {
  props:{
    data:{
      type:Object,
    }
  },
  data(){
    return {
      imgurl,
      msg:"删除"
    }
  },
  methods:{
    async commentDel(){
      let res = await commentDel(this.data.id)
      console.log('res',res);
      this.msg="该评论已删除"

    }
  }

}
</script>

<style lang="scss" scoped>
  .comment-item{
    .comment-header{
      position: relative;
      height: 30px;
      line-height: 30px;
      margin-bottom: 5px;
      .user-img{
        margin-right: 8px;
        img{
          @include wh(30px,30px);
          vertical-align:top;
        }
      }
      .user-date{
        float: right;
      }
    }
    .comment-desc{
      padding-left: 38px;
    }
  }
  .comment-ul{
    position: relative;
    .comment-li{
      padding: 12px 15px;
    }
  }
  .comment-ul::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
    margin: 0 20px;
    border-bottom: 1px solid #f6f6f6;
  }
</style>