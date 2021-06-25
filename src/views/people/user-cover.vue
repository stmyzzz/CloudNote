<template>
  <div class="card-userCover"  :style="showup ? 'z-index:2':''">
    <!-- 如果不是本人 -->
    <div class="user-cover"  > 
      <label v-if="!auth" class="upload-wrap" for="upload">           
        <div class="upload-btn">
          <span style="margin-right:5px"><svg t="1623655608839" class="upload-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3122" width="128" height="128"><path d="M102.4 170.666667a34.133333 34.133333 0 0 0-34.133333 34.133333v614.4a34.133333 34.133333 0 0 0 34.133333 34.133333h819.2a34.133333 34.133333 0 0 0 34.133333-34.133333V204.8a34.133333 34.133333 0 0 0-34.133333-34.133333H102.4z m0-68.266667h819.2a102.4 102.4 0 0 1 102.4 102.4v614.4a102.4 102.4 0 0 1-102.4 102.4H102.4a102.4 102.4 0 0 1-102.4-102.4V204.8a102.4 102.4 0 0 1 102.4-102.4z" fill="#8a8a8a" p-id="3123"></path><path d="M369.117867 798.993067l380.142933-390.314667 267.1616 256.443733L989.866667 853.333333l-68.266667 34.133334H102.4l-68.266667-34.133334v-102.4l170.666667-170.666666 164.317867 218.7264zM290.133333 443.733333a85.333333 85.333333 0 1 1 0-170.666666 85.333333 85.333333 0 0 1 0 170.666666z" fill="#8a8a8a" p-id="3124"></path></svg></span>
          <span>编辑封面图片</span>
          </div>   
        <input id="upload" type="file" ref="pic" accept=".jpg, .jpeg, .png"  @change="readFile">
      </label>
      <img v-if="!showup" :src="'http://localhost:3000/'+profile_bg" alt="">
      <img v-if="showup" :src="showimg" alt="">
    </div>
    <div v-if="showup" class="profile-bg-edit">
      <div class="btn">
        <button @click="uploadAvatar" class=" button button--blue">保存</button>
        <button @click="cancel" class="button button--grey btn-left">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
import {uploadbg} from '@/api'
export default {
  props:{
    profile_bg:{
      type:String,
      require:true
    },
    auth:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      showup:false,
      showimg:""
    }
  },
  methods:{
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
    async uploadAvatar(){
      let data = new FormData();
      console.log(data)
      data.append('avatar', this.$refs.pic.files[0]);
        console.log(data)
      /*    data.append("file", file, file.name); 
      data.append('data', 112)
      console.log('123',data.get('file')) */
      let res = await uploadbg(data)
      console.log('res',res);
      this.showup = false
      this.profile_bg = res.path
    },
    cancel(){
      this.showup = false
    },
  }

}
</script>

<style lang="scss" scoped>
   .card-userCover{
      position: relative;
      @include bs();
    }
    .profile-bg-edit{
        position: absolute;
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
    .user-cover{
      height: 240px;
      overflow: hidden;
      position: relative;
      .upload-wrap{
        .upload-btn{
          position: absolute;
          top: 24px;
          right: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ececec2a;
          padding: 8px 15px;
          border-radius: 1px;
          @include sc(14px,#d5d5d5);
          .upload-icon{
            @include wh(15px,15px);
            fill: #d5d5d5;
          }
        }
        input{
          display: none;
        }
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    .card-wrapper{
      position: relative;
      width: 100%;
      background: #fff;
      .card-main{
        position: relative;
        margin: 0 20px 24px;
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
          }
        }
        .main-content{
          padding-top: 16px;
          padding-left: 32px;
          border-left: 164px solid transparent;
          .content-header{
            margin-bottom: 20px;
            .header-title{
              .header-name{
                font-size: 26px;
              }
              .header-headline{
                margin-left: 10px;
                font-size: 18px;
                font-weight: 400;
                white-space: nowrap;
              }
            } 
          } 
          .content-place{
            margin-bottom: 20px;
          }
          .content-detail{
            position: relative;
            padding-top: 8px;
            &>button{
              @include sc(14px,$theme-color)
            }
            .profile-btn{
              position: absolute;
              right: 0;
              top: 0;
              button{
                border: 1px solid $theme-color;
                color: $theme-color;
                font-size: 15px;
                line-height: 32px;
                border-radius: 3px;
                padding: 0px 16px;
              }
            }
          }
        }
      }
    }
</style>