<template>
  <div class="main-avatar">
    <div class="user-avatar">
      <img :src="'http://localhost:3000/'+avatar" alt="">
    </div>
    <label for="avatar" class="upload-avatar">
      <input  ref="pic2" accept=".jpg, .jpeg, .png"  @change="readFile" id="avatar" type="file">
      <div class="mask">
        <div class="mask-inner">
        </div>
        <div class="mask-content">
          <span>svg</span>
          <div>修改我的头像</div>
        </div>
      </div>
    </label>
    <el-dialog
  title="上传你的头像"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
      <div style="width:240px;height:240px;margin:0 auto;" class="img">
        <img style="width:100%;height:100%;border:1px solid black" :src="showimg" alt="">
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="uploadAvatar">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {uploadava} from '@/api'
export default {
  props:{
    avatar_url:{
      type:String
    }
  },
  data(){
    return {
      dialogVisible: false,
      showimg:"",
      avatar_url1:""
    }
  },
  methods:{
    handleClose() {
      this.dialogVisible = false
      },
    readFile(){
      this.dialogVisible = true
      console.log('read',this.dialogVisible);
      var that = this
      let file = this.$refs.pic2.files[0]
      console.log('2',this.$refs.pic2.files[0]);
      var reader = new FileReader(file)
      reader.readAsDataURL(file)
      reader.onload  = function(){
        that.showimg = reader.result
      }
    },
    async uploadAvatar(){
      let data = new FormData();
      data.append('avatar', this.$refs.pic2.files[0]);
      let res = await uploadava(data)
      console.log('res',res);
      this.dialogVisible = false
      this.avatar_url1 = res.path
    },
    mounted(){
      this.avatar_url = this.avatar_url1
    },
  },
  computed:{
      avatar(){
        return this.avatar_url
      }
    }

}
</script>

<style lang="scss">
  .main-avatar{
    position: absolute;
    top: -30px;
    .user-avatar{
      border-radius: 8px;
      border: 4px solid #fff;
      width: 160px;
      height: 160px;
      img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
      img:hover{
        background: black;
      }
    }
    .upload-avatar{
      &>input{
        display: none;
      }
      .mask{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        opacity: 0;
        transition: opacity .5s;
        cursor: pointer;
        .mask-inner{
          width: 100%;
          height: 100%;
          background: #121212;
          border-radius: 8px;
          border: 4px solid #fff;
          opacity: .4;
          box-sizing: border-box;
        }
        .mask-content{
          position: absolute;
          left: 50%;
          top:50%;
          width: 100%;
          transform: translate(-50%,-50%);
          text-align: center;
          @include sc(15px,#fff);
          div{
            margin-top: 30px;
          }
        }
      }
      .mask:hover{
        opacity: 1;
      }
    }
  }
</style>