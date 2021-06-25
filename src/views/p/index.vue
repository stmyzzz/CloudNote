<template>
  <div class="article">
    <li v-for="(item,index) in list" :key="index">
      {{item.title}}
    </li>
  </div>
</template>

<script>
import {article} from '@/api'
export default {
  data(){
    return {
      list:[]
    }
  },
  created(){
    this.initData()
  },
  methods:{
    async initData(){
      let res = await article()
      console.log(res)
      this.list = res
      console.log(res)
    }
  },
  

}
</script>

<style>

</style>