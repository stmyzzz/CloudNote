<template>
  <div class="following">
    <list-header title="他的关注" >
    </list-header>
    <follow-card v-for="(item,index) in follows.rows" :data="item" :key="index" > 
    </follow-card>
  </div>
</template>

<script>
import FollowCard from '@/components/follow-card'
import ListHeader from '@/components/list-header'
import {getFollowed} from '@/api'
export default {
  props:['id'],
  components:{
    FollowCard,
    ListHeader
  },
  created(){
    this.init()
  },
  data(){
    return {
      follows:[]
    }
  },
  methods:{
    async init(){
      let res = await getFollowed(this.id);
      console.log('followres',res);
      this.follows = res.data
    }
  }
}
</script>

<style>

</style>