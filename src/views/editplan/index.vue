<template>
  <div class="edit-plan">
    <div class="plan-img">
      <img src="http://localhost:3000/public/img2/1624608089956_%E8%80%81%E5%A9%86%E7%9A%84%E8%83%8C%E5%BD%B1.JPG" alt="">
      <label for="avatar" class="upload-avatar">
        <input  ref="pic" accept=".jpg, .jpeg, .png"  @change="readFile" id="avatar" type="file">
        <div class="mask">
          <div class="mask-inner">
          </div>
          <div class="mask-content">
            <span>svg</span>
            <div>修改攻略封面</div>
          </div>
        </div>
      </label>
    </div> 
    <div v-if="showup" class="profile-bg-edit">
        <div class="btn">
          <button @click="uploadAvatar" class=" button button--blue">保存</button>
          <button @click="cancel" class="button button--grey btn-left">取消</button>
        </div>
      </div>
    <div class="editer-title">写下攻略的地方</div>
    <div id="editor" class="editor">

    </div>
  </div>
</template>

<script>
import Editor from 'wangeditor'
import {upload} from '@/api'
export default {
  name: 'editplan',
  data () {
    return {
      editor:"",
      showup:true
    }
  },
  methods: {
    // 设置保存发送后台数据事件
    submit () {
      var data = new FormData()
      data.append('cotent', this.phoneEditor.txt.html())
      this.$axios({
        methods: 'post',
        url: '后台给的地址',
        data: data,
        headers: {
          'token': window.localStorage['token']
        }
      }).then((res) => {
        if (res.status === 200) {
          console.log('success!')
        }
      }).catch((res) => {
        console.log(res)
      })
    },
    readFile(){
      var that = this
      let file = this.$refs.pic.files[0]
      console.log('2',this.$refs.pic.files[0]);
      var reader = new FileReader(file)
      reader.readAsDataURL(file)
      reader.onload  = function(){
        that.showimg = reader.result
        that.showup = true
      }
    },
  },

  mounted () {
    // wangeditor
    this.editor = new Editor('#editor')
    this.editor.config.height = 400
    this.editor.config.width = 1000
    this.editor.config.placeholder="开始写下你的攻略"
    // 创建一个富文本编辑器
    this.editor.config.onchange = function (newHtml) {
    console.log('change 之后最新的 html', newHtml)
    }
    this.editor.config.onchangeTimeout = 1000
    this.editor.customConfig = this.editor.customConfig ? this.editor.customConfig : this.editor.config
    this.editor.customConfig.showLinkImg = false
    this.editor.customConfig.customUploadImg = async (files, insert) => { 
            /* files 是 input 中选中的文件列表 */ 
            let formData = new FormData() 
            formData.append('avatar', files[0]) 
            console.log('formdata',files[0]);
            let data = await upload(formData) 
            console.log(data);
            insert(data.imgUrl)
        } 
    this.editor.create()
    // 富文本内容
    this.editor.txt.html()
  }
}
</script>

<style lang="scss" scoped>
  .edit-plan{
    width: 1000px;
    margin: 10px auto;
    .plan-img{
      width: 1000px;
      height: 250px;
      position: relative;
      img{
        width: 100%;
        height: 100%;
        border-radius: 3px;
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
          @include sc(20px,#fff);
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
    .profile-bg-edit{
      
        width: 100%;
        height: 70px;
        background: #fff;
        @include bs();
        .btn{
          display: flex;
          justify-content: flex-end; 
          margin: 0px 20px;
          align-items: center;
          height: 100%;
        }
      }
    

  }
</style>