<template>
  <div>
    <div class="edit-wrapper">
      <div class="card">
        <user-cover :profile_bg="profiles.profile_bg" ></user-cover>
        <div class="card-wrapper">
          <div class="card-main">
            <main-avatar :avatar_url="profiles.avatal_url"></main-avatar>
            <div class="main-content">
              <div class="content-header">
                <div class="header-name">
                  <div v-if="!name" class="header-title">
                    <span class="profile_name">{{profiles.profile_name}}</span>
                    <button class="edit button--link" @click="update(0)">
                      <span> <svg t="1624352435038" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3047" width="128" height="128"><path d="M318.105988 695.141522h0.0512c20.991958 20.991958 55.03989 20.991958 76.031848 0L982.783058 106.598699c21.043158-21.043158 21.043158-55.19349 0-76.236648L982.629459 30.208452a53.759892 53.759892 0 0 0-76.031848 0.153599L318.105988 618.904874a53.964692 53.964692 0 0 0 0 76.236648zM970.136684 431.10365h-0.256c-29.644741 0-53.657493 24.012752-53.657492 53.606293v431.461537H107.776808V107.622697l431.410338 0.204799h0.0512a53.759892 53.759892 0 0 0 53.606292-53.964692v-0.204799C592.895838 24.013264 568.831886 0.000512 539.187146 0.000512H53.556117A53.350293 53.350293 0 0 0 0.001024 53.606805v916.836566A53.299093 53.299093 0 0 0 53.607317 1023.998464h916.836566A53.401493 53.401493 0 0 0 1023.998976 970.340971V484.761142a53.759892 53.759892 0 0 0-53.862292-53.606292z" fill="#409EFF" p-id="3048"></path></svg></span>
                      修改</button>
                  </div>
                  <div v-else-if="name">
                    <div class="up">
                      <h2 class="up-name">用户名</h2>
                      <div class="up-content">
                        <el-input maxlength="10" v-model="profiles.profile_name" type="text"   show-word-limit>
                        </el-input>
                        <div class="btn-group">
                          <button class="button button--blue" @click="save(0)">保存</button>
                          <button class="button button--grey" @click="cancel(0)" type="button">取消</button>
                        </div>                        
                      </div>
                    </div>
                  </div>
                </div>
                <button class="header-return button"  @click="returnIndex">
                  返回我的主页
                </button>
              </div>
              <div class="content-main">
                <div class="main-item">
                  <div  class="header-title">
                  </div>
                  <div>
                    <div class="up">
                      <h2 style="line-height:26px" class="up-name">性别</h2>
                      <div class="up-content">
                        <div v-if="!sex">
                            <span class="profile_name">{{profiles.sex ==1 ?'男':'女'}}</span>
                    <button class="edit button--link" @click="update(1)">
                      <span> <svg t="1624352435038" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3047" width="128" height="128"><path d="M318.105988 695.141522h0.0512c20.991958 20.991958 55.03989 20.991958 76.031848 0L982.783058 106.598699c21.043158-21.043158 21.043158-55.19349 0-76.236648L982.629459 30.208452a53.759892 53.759892 0 0 0-76.031848 0.153599L318.105988 618.904874a53.964692 53.964692 0 0 0 0 76.236648zM970.136684 431.10365h-0.256c-29.644741 0-53.657493 24.012752-53.657492 53.606293v431.461537H107.776808V107.622697l431.410338 0.204799h0.0512a53.759892 53.759892 0 0 0 53.606292-53.964692v-0.204799C592.895838 24.013264 568.831886 0.000512 539.187146 0.000512H53.556117A53.350293 53.350293 0 0 0 0.001024 53.606805v916.836566A53.299093 53.299093 0 0 0 53.607317 1023.998464h916.836566A53.401493 53.401493 0 0 0 1023.998976 970.340971V484.761142a53.759892 53.759892 0 0 0-53.862292-53.606292z" fill="#409EFF" p-id="3048"></path></svg></span>
                      修改</button>
                        </div>
                        <div v-else-if="sex">    <el-radio v-model="profiles.sex" :label="1">男</el-radio>
                          <el-radio v-model="profiles.sex" :label="2">女</el-radio>
                        <div class="btn-group">
                          <button class="button button--blue" @click="save(1)">保存</button>
                          <button class="button button--grey" @click="cancel(1)" type="button">取消</button>
                        </div>      </div>
                                        
                      </div>
                    </div>
                  </div>
                </div>
                <div class="main-item">
                  <div  class="header-title">
                  </div>
                  <div>
                    <div class="up">
                      <h2 style="line-height:26px" class="up-name">个性签名</h2>
                      <div class="up-content">
                        <div v-if="!sign">
                          <span class="profile_name">{{profiles.sign}}</span>
                    <button class="edit button--link" @click="update(2)">
                      <span> <svg t="1624352435038" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3047" width="128" height="128"><path d="M318.105988 695.141522h0.0512c20.991958 20.991958 55.03989 20.991958 76.031848 0L982.783058 106.598699c21.043158-21.043158 21.043158-55.19349 0-76.236648L982.629459 30.208452a53.759892 53.759892 0 0 0-76.031848 0.153599L318.105988 618.904874a53.964692 53.964692 0 0 0 0 76.236648zM970.136684 431.10365h-0.256c-29.644741 0-53.657493 24.012752-53.657492 53.606293v431.461537H107.776808V107.622697l431.410338 0.204799h0.0512a53.759892 53.759892 0 0 0 53.606292-53.964692v-0.204799C592.895838 24.013264 568.831886 0.000512 539.187146 0.000512H53.556117A53.350293 53.350293 0 0 0 0.001024 53.606805v916.836566A53.299093 53.299093 0 0 0 53.607317 1023.998464h916.836566A53.401493 53.401493 0 0 0 1023.998976 970.340971V484.761142a53.759892 53.759892 0 0 0-53.862292-53.606292z" fill="#409EFF" p-id="3048"></path></svg></span>
                      修改</button>
                        </div>
                        <div v-else-if="sign"> 
                          <el-input maxlength="10" v-model="profiles.sign" type="text"   show-word-limit>
                        </el-input>
                        <div class="btn-group">
                          <button class="button button--blue" @click="save(2)">保存</button>
                          <button class="button button--grey" @click="cancel(2)" type="button">取消</button>
                        </div>      </div>
                                        
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 个性签名 -->
                <div class="main-item">
                  <div  class="header-title">
                  </div>
                  <div>
                    <div class="up">
                      <h2 style="line-height:26px" class="up-name">去过的地方</h2>
                      <div class="up-content">
                        <div v-if="!place">
                    <button class=" button--link" @click="update(3)">
                      <span></span>
                      添加去过的地方</button>
                        </div>
                        <div class="form-line" v-else-if="place">
                          <el-input class="place-input" maxlength="10" placeholder="输入去过的城市"
                          v-model="city" type="text"   show-word-limit>
                        </el-input>
                        <div class="btn-group">
                          <button class="button button--blue" @click="add">添加</button>
                          <button class="button button--grey" @click="cancel(3)" type="button">取消</button>
                        </div>
                        </div>
                        <ul class="city-item">
                          <li class="city-li" v-for="(item,index) in profiles.user_honour_info" :key="index">
                            <span>{{item}}</span>
                            <button class="button" @click="opera(index)">删除</button>
                          </li>
                          </ul>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import {edit,profile} from '@/api'
import UserCover from '../user-cover.vue'
import MainAvatar from '../main-avatar.vue'
export default {
  data(){
    return{
      profiles:{
        profile_name:"",
        sex:1,
      },
      name:false,
      sex:false,
      sign:false,
      place:false,
      city:""
    }
  },
  components:{  
    UserCover,
    MainAvatar
  },
  beforeRouteEnter(to,from,next){
    console.log('t2o',to,from);
    next(vm=>{
      vm.userId = to.query.id
    })
  },
  methods:{
    async init(){
      let res = await profile(this.userId)
      console.log('1212',res);
      this.profiles = res.data
      console.log('this.profiles',this.profiles);
    },
    async save(type){
      await edit(this.profiles)
      this.cancel(type,false)
      this.city = ""
    },
    async opera(index){
      this.profiles.user_honour_info.splice(index,1);
      this.save();
    },
    add(){
      if(!this.city.trim()){
        return
      }
      this.profiles.user_honour_info.push(this.city)
      this.save(3)
    },
    cancel(type,boo = false){
        switch (type){
        case 0:
          this.name = boo
          break;
        case 1:
          this.sex = boo
          break;
        case 2:
          this.sign = boo
          break;
        case 3:
          this.place = boo
          console.log('thispalce',this.place);
          break;
      } 
    },
    returnIndex(){
      this.$router.push("/people/"+this.userId)
    },
    update(type){
      this.cancel(type,true)
      
    }
  },
  mounted(){
    this.init()
  }
}
</script>

<style lang="scss" scoped>
  .card{
    overflow: hidden;
    background: #fff;
    border-radius: 3px;
    @include bs();
    margin-bottom: 10px;
    padding: 0;
  }
  .edit-wrapper{
    width: 1000px;  
    position: relative;
    padding: 0 16px;
    margin: 10px auto;
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
        .main-content{
          padding-top: 25px;
          padding-left: 32px;
          border-left: 164px solid transparent;
          .content-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            .header-name{
              .profile_name{
                font-size: 26px;
                padding-right: 10px;
              }
              &>button{
                @include sc(15px,$theme-color)
              }
            }
          }
          .content-main{
            margin-top: 10px;
            .main-item{
              padding: 40px 0;
              border-bottom: 1px solid #ebebeb;
              .place-input{
                width: 250px;
              }
              .city-item{
                display: flex;
                flex-direction: column;
                margin: 10px 0 10px 0;
                .city-li{
                  padding: 12px 20px;
                  border-radius: 2px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                }
                .city-li:hover{
                  background: #f6f6f6;
                }
              }
              .form-line{
                display: flex;
                align-items: center;
                .btn-group{
                  margin-top: 0px;
                  margin-left: 15px;
                }
              }
            }
          }
        }
      }
    }
  }
  .up{
    position: relative;
    .up-name{
      position: absolute;
      line-height: 36px;
    }
    .up-content{
      padding: 0px 64px 0 120px;
      .btn-group{
        margin-top: 15px;
        .button--grey{
          margin-left: 15px;
        }
      }
    }
  }
  .edit{
    font-size: 15px;
    opacity: 0;
    transition: all .2s;
    span{
      display: inline-flex;
      align-items: center;
    }
  }
  .edit:hover{
    opacity: 1;
  }
  .icon{
    @include wh(15px,15px)
  }
  .profile-main{
    width: 1000px;
    display: flex;
    min-height: 100vh;
    padding: 0 16px;
    margin: 10px auto;
    justify-content: space-between;
    .main-col{
      width: 694px;
    }
    .header-ul{
      display: flex;
      align-items: center;
      &>li{
        position: relative;
        &>a{
          position: relative;
          color: black;
          padding: 15px 0;
          display: inline-block;
        }
        padding: 0px 15px;
        .router-link-exact-active::after{
          content:'';
          position: absolute;
          background: blue;
          height: 2px;
          left: 0;
          right: 0;
          bottom: 1px;
        }
      }
      
    }
    .side-col{
      width: 296px;
      .card{
        .card-header{
          height: 50px;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: bold;
          border-bottom: 1px solid #f5f5f5;
        }
        .card-content{
          padding: 12px 0;
          .card-item{
            padding: 6px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            .tra-ul{
              display: flex;
              flex-wrap: wrap;
              &>li{
                border: 1px solid #cacaca;
                margin-right: 8px;
                border-radius: 3px;
                margin-bottom: 10px;
                @include bs(); 
                padding: 0 10px;
                line-height: 32px;
                transition: all .5s;
                &:hover{
                  transform: scale(1.2);
                }
              }
            }
          }
        }
      }
    }
  }
</style>