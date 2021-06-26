<template>
  <div class="follow">
      <question-card @getComment="getComment" v-for="(item,index) in plans" :data="item" :key="index">
    </question-card>
    <comment-pop :commentDetail="commentDetail" :show="isShow"></comment-pop>
  </div>
</template>

<script>
import QuestionCard from '@/components/question-card'
import {followPlan} from '@/api'
import CommentPop from '@/components/comment-pop'
export default {
  components:{
    QuestionCard,
    CommentPop
  },
  data(){
    return {
      plans:[],
      commentDetail:[],
      isShow:false
    }
  },
  created(){
    this.init()
  },
  methods:{
    async init(){
      let res = await followPlan()
      this.plans = res.data
      console.log('data1212',res);
    },
        getComment(data){
      console.log('commentDetail',data);
      this.commentDetail = data
      this.isShow = true
    }
  }

}
</script>

<style>

</style>