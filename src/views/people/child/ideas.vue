<template>
<div class="ideas">
  <list-header title="他的想法"></list-header>
    <div class="card">
      <idea-list @getComment="getComment" v-for="(item,index) in infor" :data="item" :key="index"></idea-list>
          <comment-pop :commentDetail="commentDetail" :show="isShow"></comment-pop>
    </div>
</div>
</template>

<script>
import IdeaList from './idea-list'
import ListHeader from '@/components/list-header'
import {idea} from '@/api'
import CommentPop from '@/components/comment-pop'
export default {
  components:{
    IdeaList,
    ListHeader,
    CommentPop
  }, 
  data(){
    return {
      infor:[],
      commentDetail:[],
      isShow:false
    }
  },
  async created(){
      console.log('this.params.id',this.$route.params.id);
      this.userId = this.$route.params.id
      this.init()
    },
  methods:{
    async init(){
        let res = await idea(this.userId)
      console.log('dongt12ai',res);
      this.infor = res.data
    },
    getComment(data){
      console.log('commentDetail',data);
      this.commentDetail = data
      this.isShow = true
    }
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
  }

</style>