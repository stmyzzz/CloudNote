<template>
  <div class="dynamics">
    <list-header title="他的动态" >
    </list-header>
    <question-card @getComment="getComment" v-for="(item,index) in dongtais" :data="item.plan" :key="index" >
      <div class="card-name" slot="dynmic" >
        <span>stmy 发布了攻略{{$utils.datelater(item.createdAt)}}前</span>
      </div>
    </question-card>
    <comment-pop :commentDetail="commentDetail" :show="isShow"></comment-pop>

  </div>
</template>

<script>
import QuestionCard from '@/components/question-card'
import CommentPop from '@/components/comment-pop'
import ListHeader from '@/components/list-header'
import {dongtai} from '@/api'
export default {
  props: ['id'],
  components:{
    QuestionCard,
    ListHeader,
    CommentPop
  },
  data(){
    return {
      dongtais:{},
      commentDetail:[],
      isShow:false
    }
  },
  computed:{
  },
  created(){
    this.init()
  },
  methods:{
    async init(){
      let res = await dongtai(this.id)
      console.log('dongtai',res.data.rows);
      this.dongtais = res.data.rows
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