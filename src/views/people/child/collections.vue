<template>
  <div class="collections">
    <list-header title="他的收藏" >
    </list-header>
    <question-card> 
    </question-card>
  </div>
</template>

<script>
import QuestionCard from '@/components/question-card'
import {getColl} from '@/api'
import ListHeader from '@/components/list-header'
export default {
  components:{
    QuestionCard,
    ListHeader
  },
  created(){
    this.init()
  },
  methods:{
    async init(){
      let res = await getColl(18)
      console.log('jieguo',res);
    }
  }
}
</script>

<style>

</style>