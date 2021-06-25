<template>
  <div class="plans">
    <div class="plans-header">
      <svg class="Zi Zi--LabelSpecial" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z" fill-rule="evenodd"></path></svg>
      <span>创作中心</span>
    </div>
    <div class="plans-content">
      <div class="plan-item">
        <img src="/img/shanghai.39f11107.png" alt="">
        <div @click="dialogVisible = true" class="plan-content">
          <h1 class="plan_name">添加新的攻略</h1>  
        </div>
      </div>
      <plan-item v-for="(item,index) in plans" :key="index" :data="item"></plan-item>
    </div>
    <el-dialog
  title="添加攻略"
  :visible.sync="dialogVisible"
  width="30%">
  <el-input v-model="planinfor.plans_title" placeholder="城市名"></el-input>
  <p style="margin-top:10px">一旦确认无法修改</p>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>

<script>
import PlanItem from './plan-item.vue'
import {single,add} from '@/api'
export default {
  data(){
    return{
      plans:[],
      dialogVisible:false,
      planinfor:{
        plans_title:""
      }
    }
  },
  components:{
    PlanItem
  },
  created(){
    this.init()
  },
  methods:{
    async init(){
      let data = await single()
      console.log(data);
      this.plans = data.data
    },
    async add(){
      let data = await add(this.planinfor)
      this.plans.push(this.planinfor)
      console.log(data);
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .plans{
    margin: 20px auto;
    width: 1000px;
    .plans-header{
      display: flex;
      align-items: center;
      span{
        margin-left: 15px;
        font-weight: 900;
        font-size: 25px;
      }
    }
    .plans-content{
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
        .plan-item{
    position: relative;
    @include wh(160px,200px);
    margin: 0px 20px 50px 20px;
    cursor: pointer;
    border-radius: 5px;
    @include bs();
    img{
      @include wh(100%,100%);
    }
    .plan-content{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 100%;
      .plan_name{
        text-align: center;
      }
    }
  }
    }
  }
</style>