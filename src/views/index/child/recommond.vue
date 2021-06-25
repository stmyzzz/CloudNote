<template>
  <div class="recommond">
    <question-card v-for="(item,index) in plans" :data="item" :key="index">

    </question-card>
  </div>
</template>

<script>
import QuestionCard from '@/components/question-card'
import {plans} from '@/api'
export default {
  data(){
    return{
      plans:[]
    }
  },
  components:{
    QuestionCard
  },
   created(){
    this.init()
  },
  methods:{
    async init(){
      let res = await plans()
      console.log(res);
      this.plans = res.data
    }
  },

}
</script>

<style>

</style>