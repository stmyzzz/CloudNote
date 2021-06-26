<template>
  <div class="recommond">
    <question-card @getComment="getComment" v-for="(item,index) in plans" :data="item" :key="index">
    </question-card>
    <comment-pop :commentDetail="commentDetail" :show="isShow"></comment-pop>
  </div>
</template>

<script>
import QuestionCard from '@/components/question-card'
import {plans} from '@/api'
import CommentPop from '@/components/comment-pop'
export default {
  data(){
    return{
      plans:[],
      commentDetail:[],
      isShow:false
    }
  },
  components:{
    QuestionCard,
    CommentPop
  },
  created(){
    this.init()
  },
  methods:{
    async init(){
      let res = await plans()
      console.log(res);
      this.plans = res.data
    },
    getComment(data){
      console.log('commentDetail',data);
      this.commentDetail = data
      this.isShow = true
    }
  },

}
</script>

<style>

</style>