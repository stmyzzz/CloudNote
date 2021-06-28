<template>
  <div class="comment-pop">
    <el-dialog
  :title="commentDetail.length+'条评论'"
  :visible.sync="show"
  width="50%">
  <div style="max-height:300px;overflow-y:auto;">
    <comment-item v-for="(item,index) in commentDetail" :key="index" :data="item"></comment-item>
  </div>
  <div class="comment-edit">
    <el-input ref="input2" v-model="comment_text" placeholder="写下你的评论"></el-input>
    <div @click="addComment" class="button button--blue">发布</div>
  </div>
    </el-dialog>
  </div>
</template>

<script>
import CommentItem from '@/components/comment-item'
import {addComment} from '@/api'
export default {
  props:{
    show:{
      type:Boolean,
      required:false
    },
    commentDetail:{
      type:Array
    }
  },
  data(){
    return {
      comment_text:""
    }
  },
  components:{
    CommentItem
  },
  methods:{
    async addComment(){
      if(this.comment_text == ""){
        console.log('不完整');
        return
      }
      await addComment(this.comment_text,this.commentDetail.textId,this.typeId)
      this.comment_text = ""
    }
  }
}
</script>

<style lang="scss" scoped>
  .comment-edit{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .el-input{
      width: 80%;
      transition: all .5s;
    }

  }
</style>