<template>
  <div class="dynamics">
    <list-header title="他的动态" >

    </list-header>
    <question-card>
      <div class="card-name" slot="dynmic" >
        <span>stmy 发布了攻略* 五分钟前</span>
      </div>    
    </question-card>
  </div>
</template>

<script>
import QuestionCard from '@/components/question-card'
import ListHeader from '@/components/list-header'
export default {
  components:{
    QuestionCard,
    ListHeader
  }
}
</script>

<style>

</style>