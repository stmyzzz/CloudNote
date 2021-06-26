<template>
  <div class="dynamics">
    <list-header title="他的动态" >
    </list-header>
    <!-- <question-card :data="res" >
      <div class="card-name" slot="dynmic" >
        <span>stmy 发布了攻略* 五分钟前</span>
      </div>
    </question-card> -->
  </div>
</template>

<script>/* 
import QuestionCard from '@/components/question-card' */
import ListHeader from '@/components/list-header'
import {dongtai} from '@/api'
export default {
  components:{/* 
    QuestionCard, */
    ListHeader
  },
  data(){
    return {
      dongtai:{}
    }
  },
  created(){
    this.init()
  },
  methods:{
    async init(){
      let res = await dongtai()
      console.log('dongtai',res);
    }
  }
}
</script>

<style>

</style>