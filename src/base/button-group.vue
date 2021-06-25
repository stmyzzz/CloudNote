<template>
  <div class="button-group">
    <button @click="save" type="submit">保存</button>
    <button @click="cancel" type="button">取消</button>
  </div>
</template>

<script>/* 
import {edit} from '@/api' */
export default {
  props:{
    data:{
      type:String,
      require:true
    }
  },
  methods:{
    save(){
      console.log(this.data);
    },
    cancel(){
      
    }
  }
}
</script>

<style>

</style>