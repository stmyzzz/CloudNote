<template>
  <div class="collections">
    <list-header title="他的收藏" >
    </list-header>
    <collection-item v-for="(item,index) in collections" :key="index" :data="item"></collection-item>      


  </div>
</template>

<script>
import {getColl} from '@/api'
import ListHeader from '@/components/list-header'
import CollectionItem from './collection-item.vue'
export default {
  components:{
    ListHeader,
    CollectionItem
  },
  data(){
    return {
      collections:[]
    }
  },
  created(){
    this.userId = this.$route.params.id
    this.init()
  },
  methods:{
    async init(){
      let res = await getColl(this.userId)
      console.log('jieguo',res);
      this.collections = res.data
    }
  }
}
</script>

<style>

</style>