<template>
  <div class="index">
    <div class="index-container">
      <div class="main">
        <a class="main-top" href="">
          <img class="top-img" src="https://pic3.zhimg.com/v2-80400faebf96cca7517ef251d2d3f249.png" alt="">
        </a>
        <div class="main-cards">
          <div class="main-nav">
            <router-link class="nav-link" v-for="(item,index) in mainNav" :key="index" :to="item.path" >{{item.name}}</router-link>
          </div>
          <div class="main-wrap">
            <router-view>
              
            </router-view>
          </div>
        </div>
      </div>
      <div class="side-bar">
        <div class="side-action">
          <ul>
            <li>
              <svg t="1623489709095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2253" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#298FFF" p-id="2254"></path><path d="M646.715077 718.769231H377.284923A41.934769 41.934769 0 0 1 334.769231 677.415385V374.153846a41.944615 41.944615 0 0 1 42.515692-41.353846h56.733539v-13.784615a14.188308 14.188308 0 0 1 28.356923 0v13.784615h99.24923v-13.784615a14.188308 14.188308 0 0 1 28.356923 0v13.784615h56.733539A41.934769 41.934769 0 0 1 689.230769 374.153846v303.261539a41.944615 41.944615 0 0 1-42.515692 41.353846z m14.158769-344.615385a14.001231 14.001231 0 0 0-14.158769-13.784615H589.981538V374.153846a14.188308 14.188308 0 0 1-28.356923 0v-13.784615H462.375385V374.153846a14.188308 14.188308 0 0 1-28.356923 0v-13.784615h-56.733539A14.011077 14.011077 0 0 0 363.126154 374.153846v303.261539a14.001231 14.001231 0 0 0 14.158769 13.784615h269.430154a14.011077 14.011077 0 0 0 14.158769-13.784615V374.153846zM618.338462 615.384615H405.661538a13.784615 13.784615 0 1 1 0-27.56923h212.676924a13.784615 13.784615 0 1 1 0 27.56923z m0-68.923077H405.661538a13.784615 13.784615 0 1 1 0-27.56923h212.676924a13.784615 13.784615 0 1 1 0 27.56923z m0-68.923076H405.661538a13.784615 13.784615 0 1 1 0-27.569231h212.676924a13.784615 13.784615 0 1 1 0 27.569231z" fill="#FFFFFF" p-id="2255"></path></svg>
              <span>回答问题</span>
            </li>
            <li @click="showVideo = true">
              <svg t="1623489709095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2253" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#298FFF" p-id="2254"></path><path d="M646.715077 718.769231H377.284923A41.934769 41.934769 0 0 1 334.769231 677.415385V374.153846a41.944615 41.944615 0 0 1 42.515692-41.353846h56.733539v-13.784615a14.188308 14.188308 0 0 1 28.356923 0v13.784615h99.24923v-13.784615a14.188308 14.188308 0 0 1 28.356923 0v13.784615h56.733539A41.934769 41.934769 0 0 1 689.230769 374.153846v303.261539a41.944615 41.944615 0 0 1-42.515692 41.353846z m14.158769-344.615385a14.001231 14.001231 0 0 0-14.158769-13.784615H589.981538V374.153846a14.188308 14.188308 0 0 1-28.356923 0v-13.784615H462.375385V374.153846a14.188308 14.188308 0 0 1-28.356923 0v-13.784615h-56.733539A14.011077 14.011077 0 0 0 363.126154 374.153846v303.261539a14.001231 14.001231 0 0 0 14.158769 13.784615h269.430154a14.011077 14.011077 0 0 0 14.158769-13.784615V374.153846zM618.338462 615.384615H405.661538a13.784615 13.784615 0 1 1 0-27.56923h212.676924a13.784615 13.784615 0 1 1 0 27.56923z m0-68.923077H405.661538a13.784615 13.784615 0 1 1 0-27.56923h212.676924a13.784615 13.784615 0 1 1 0 27.56923z m0-68.923076H405.661538a13.784615 13.784615 0 1 1 0-27.569231h212.676924a13.784615 13.784615 0 1 1 0 27.569231z" fill="#FFFFFF" p-id="2255"></path></svg>
              <span>发视频</span>
            </li>

              <router-link tag="li" to="/plancenter">
              <svg t="1623489709095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2253" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#298FFF" p-id="2254"></path><path d="M646.715077 718.769231H377.284923A41.934769 41.934769 0 0 1 334.769231 677.415385V374.153846a41.944615 41.944615 0 0 1 42.515692-41.353846h56.733539v-13.784615a14.188308 14.188308 0 0 1 28.356923 0v13.784615h99.24923v-13.784615a14.188308 14.188308 0 0 1 28.356923 0v13.784615h56.733539A41.934769 41.934769 0 0 1 689.230769 374.153846v303.261539a41.944615 41.944615 0 0 1-42.515692 41.353846z m14.158769-344.615385a14.001231 14.001231 0 0 0-14.158769-13.784615H589.981538V374.153846a14.188308 14.188308 0 0 1-28.356923 0v-13.784615H462.375385V374.153846a14.188308 14.188308 0 0 1-28.356923 0v-13.784615h-56.733539A14.011077 14.011077 0 0 0 363.126154 374.153846v303.261539a14.001231 14.001231 0 0 0 14.158769 13.784615h269.430154a14.011077 14.011077 0 0 0 14.158769-13.784615V374.153846zM618.338462 615.384615H405.661538a13.784615 13.784615 0 1 1 0-27.56923h212.676924a13.784615 13.784615 0 1 1 0 27.56923z m0-68.923077H405.661538a13.784615 13.784615 0 1 1 0-27.56923h212.676924a13.784615 13.784615 0 1 1 0 27.56923z m0-68.923076H405.661538a13.784615 13.784615 0 1 1 0-27.569231h212.676924a13.784615 13.784615 0 1 1 0 27.569231z" fill="#FFFFFF" p-id="2255"></path></svg>
              <span>写攻略</span>
              
            </router-link>
            <li @click="goIndea">
              <svg t="1623489709095" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2253" width="128" height="128"><path d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z" fill="#298FFF" p-id="2254"></path><path d="M646.715077 718.769231H377.284923A41.934769 41.934769 0 0 1 334.769231 677.415385V374.153846a41.944615 41.944615 0 0 1 42.515692-41.353846h56.733539v-13.784615a14.188308 14.188308 0 0 1 28.356923 0v13.784615h99.24923v-13.784615a14.188308 14.188308 0 0 1 28.356923 0v13.784615h56.733539A41.934769 41.934769 0 0 1 689.230769 374.153846v303.261539a41.944615 41.944615 0 0 1-42.515692 41.353846z m14.158769-344.615385a14.001231 14.001231 0 0 0-14.158769-13.784615H589.981538V374.153846a14.188308 14.188308 0 0 1-28.356923 0v-13.784615H462.375385V374.153846a14.188308 14.188308 0 0 1-28.356923 0v-13.784615h-56.733539A14.011077 14.011077 0 0 0 363.126154 374.153846v303.261539a14.001231 14.001231 0 0 0 14.158769 13.784615h269.430154a14.011077 14.011077 0 0 0 14.158769-13.784615V374.153846zM618.338462 615.384615H405.661538a13.784615 13.784615 0 1 1 0-27.56923h212.676924a13.784615 13.784615 0 1 1 0 27.56923z m0-68.923077H405.661538a13.784615 13.784615 0 1 1 0-27.56923h212.676924a13.784615 13.784615 0 1 1 0 27.56923z m0-68.923076H405.661538a13.784615 13.784615 0 1 1 0-27.569231h212.676924a13.784615 13.784615 0 1 1 0 27.569231z" fill="#FFFFFF" p-id="2255"></path></svg>
              <span>写想法</span>
            </li>
          </ul>
        </div>
        <el-dialog
  title="写想法"
  :visible.sync="showIdea"
  width="30%">
  <div class="content">
    <el-input
  type="textarea"
  :rows="5"
  placeholder="输入你现在的想法"
  v-model="textarea">
</el-input>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="showIdea = false">取消</el-button>
    <el-button type="primary" @click="submit">发布</el-button>
  </span>
</el-dialog>

        <el-dialog

  title="上传旅游Vlog"
  :visible.sync="showVideo"
  width="30%">
  <div class="content">
    <el-input
  type="input"
  placeholder="让世界看看你">
    </el-input>
    <el-upload
    name="avatar"
  class="upload-demo"
  drag
  :limit="1"
  action="http://localhost:3000/video/upload"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
  </el-upload>
  </div>
  <span slot="footer" class="dialog-footer">
    <el-button @click="showIdea = false">取消</el-button>
    <el-button type="primary" @click="submit">发布</el-button>
  </span>
</el-dialog>
        <div class="side-pro">
          
        </div>
      </div>
    </div>

  </div>
</template>
  
<script> 
import {addIdea} from '@/api'
export default {
  data(){
    return {
      mainNav:[
        {'name':'推荐','path':'/'},
        {'name':'关注','path':'/follow'},
        {'name':'热门景点','path':'/hot'}
      ],
      showIdea:false,
      textarea:"",
      showVideo:false
    }
  },
  created(){
  },
  methods:{
    goIndea(){
      this.showIdea = true
    },
    async submit(){
      let res = await addIdea(this.textarea)
      console.log(res);
      this.showIdea = false
      this.textarea = ""
    }
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
.index-container{
  width: 1000px;
  margin: 10px auto;
  display: flex;
  .main{
    width: 700px;
    .top-img{
      width: 100%;
      height: auto;
      border-radius: 2px;
    }
    .main-cards{
      margin-top: 5px;
      border-radius: 2px;
      .main-nav{
        height: 52px;
        display: flex;
        align-items: center;
        background: #fff;
        .nav-link{
          font-size: 16px;
          margin: 0px 20px;
        }
      }
    }
  }
  .side-bar{
    margin-left: 10px;
    flex: 1 1;
    .side-action{
      background: #fff;
      padding: 23px 15px;
      border-radius: 3px;
      ul{
        display: flex;
        li{
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          span{
            font-size: 12px;
            margin-top: 5px;
          }
          .icon{
            @include wh(40px,40px)
          }
        }
      }
    }
  }
}
</style>