<template>
  <div class="hot-list">
    <hot-item v-for="(item,index) in ['1','2','3','4']" :key="index" :class="index % 2 == 0 ? 'mr':'ml'"></hot-item>
  </div>
</template>

<script>
import HotItem from '@/components/hot-item'
export default {
  components:{
    HotItem
  }
}
</script>

<style lang="scss" scoped>
  .hot-list{
    display: flex;
    flex-wrap: wrap;
    .mr{
      margin-right: 20px;
    }
  }
</style>