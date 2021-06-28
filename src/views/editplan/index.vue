<template>
  <div class="edit-plan">
    <div  class="plan-img">
      <img src="http://localhost:3000/public/img/shanghai.png" alt=""> 
      <label for="avatar" class="upload-avatar">
        <input  ref="pic" accept=".jpg, .jpeg, .png"   id="avatar" type="file"> 
      </label>
    </div> 
    <div v-if="showup" class="profile-bg-edit">
        <div class="btn">
          <button  class=" button button--blue">保存</button>
          <button  class="button button--grey btn-left">取消</button>
        </div>
    </div>
    <div class="editer-title">标题是：{{infor.plans_title}}</div>
    <button @click="up">修改</button>
    <input v-model="infor.plans_title" type="text">
    <div id="editor" class="editor">
      
    </div>
  </div>  
</template>

<script>
import Editor from 'wangeditor'
import {upload,detail,upPlan} from '@/api'
import {imgurl} from '@/config'
export default {
  name: 'editplan',
  data () {
    return {
      editor:"",
      showup:false,
      imgurl,
      infor:{
        plans_title:""
      }
    }
  },
  created(){
    this.textId = this.$route.params.id
  },
  beforeRouteEnter(to,from,next){
    /* if(typeof(to.params.id) == 'undefined'){
      next({path:'/error'})
    } */
    next()
  },
  methods: {
    cancel(){
      this.showup = false
    },
    async up(){
      this.infor['planId'] = this.textId
      let res = await upPlan(this.infor)
      console.log(res);
    },
    async init(){
      let res = await detail(this.textId)
      this.infor = res.rows[0]
      console.log('this.infor',res.rows[0]);
    }
  },

  async mounted () {
    // wangeditor
    var that = this
    this.editor = new Editor('#editor')
    this.editor.config.height = 400
    this.editor.config.width = 1000
    this.editor.config.placeholder="开始写下你的攻略"
    // 创建一个富文本编辑器
    this.editor.config.onchange = function (newHtml) {
      that.infor.plans_content = newHtml
      that.up()
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
    let res = await detail(this.textId)
    this.infor = res.rows[0]
    
    this.editor.txt.html(this.infor.plans_content)  
    // 富文本内容
  
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
      .edit{
        position: absolute;
        top:5px;
        right:5px;
      }
      img{
        width: 100%;
        height: 100%;
        border-radius: 3px;
      }
      .upload-avatar{
      &>input{
        display: none;
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