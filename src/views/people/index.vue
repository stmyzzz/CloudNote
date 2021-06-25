<template>
  <div class="people">
    <div class="profile-header">
      <div class="card">
        <user-cover :profile_bg="profiles.profile_bg" :auth="auth"></user-cover>
        <div class="card-wrapper">
          <div class="card-main">
            <div class="main-avatar">
              <div class="user-avatar">
                <img :src="'http://localhost:3000/'+profiles.avatal_url" alt="">
              </div>
            </div>
            <div class="main-content">
              <div class="content-header">
                <h1 class="header-title">
                  <span class="header-name">{{profiles.profile_name}}</span>
                  <span class="header-sex">{{profiles.sex}}</span>
                  <span class="header-headline">{{profiles.sign}}</span>
                </h1>
              </div>
              <div class="content-place">
                <span>想去的地方</span>
                <span>上海</span>
                <span>长沙</span>
              </div>
              <div class="content-detail">
                <button>查看详细资料</button>
                <div class="profile-btn">
                  <button @click="goEdit" v-if="!auth">
                    编辑个人资料
                  </button>
                  <button v-else-if="auth">关注他</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="profile-main">
      <div class="main-col">
        <div class="card main-wrap">
          <div class="main-header">
            <ul class="header-ul">
              <li v-for="(item,index) in profileRoutes" :key="index" class="">
                <router-link :to="item.path">
                  {{item.meta.title}}
                </router-link>
              </li>
              
            </ul>
          </div>
          <div class="main-list">
            <router-view></router-view>
          </div>
        </div>

      </div>
      <div class="side-col">
        <div class="card">
          <div class="card-header">
            去过的地方
          </div>
          <div class="card-content">
            <div class="card-item">
              <ul class="tra-ul">
                <li v-for="(item,index) in profiles.user_honour_info" :key="index">{{item}}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card follow-base">
          <router-link class="button" :to="'/people/'+this.userId+'/following'">
            <div class="follow-iteminner">
              <div class="follow-itemName">关注了</div>
              <strong class="follow-itemNumber">100</strong>
            </div>
          </router-link>
                 <router-link class="button" :to="'/people/'+this.userId+'/following'">
            <div class="follow-iteminner">
              <div class="follow-itemName">关注者</div>
              <strong class="follow-itemNumber">100</strong>
            </div>
          </router-link>
          </div>
        
        <div class="card">
          <div class="card-header">
            个人成就
          </div>
          <div class="card-content">
            <div class="card-item">
              <li class="item-li">
                <svg t="1624364660191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2388" width="128" height="128"><path d="M907.906307 182.140259c13.758968 6.495513 22.526311 20.350474 22.526311 35.581332v271.019673c0 150.13274-66.842987 284.26668-186.162038 377.891659l-201.520886 142.837287a78.810089 78.810089 0 0 1-91.06517 0l-203.024773-143.989201C130.876584 773.007944 64.033597 638.874004 64.033597 488.741264v-271.019673c0-15.230858 8.767342-29.053821 22.494313-35.581332L453.220408 8.2653l4.255681-1.72787a123.670725 123.670725 0 0 1 79.354049 0l4.255681 1.72787 366.820488 173.874959zM424.166588 661.656296c15.19886 16.958728 41.59688 17.59868 57.531685 1.247906l272.779541-279.019073-70.39472-68.794841-228.590856 233.806465-121.142914-135.445842-73.402495 65.595081 163.219759 182.610304z" fill="#409EFF" p-id="2389"></path></svg>
                <span>云游创始人 CEO</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {profileRoutes} from '@/router'
import {profile} from '@/api'
import UserCover from './user-cover.vue'
export default {
  data(){
    return {
      profileRoutes:profileRoutes,
      profiles:{
        profile_bg:""
      },
      userId:"",
      auth:false,
      img1:'12',
      showup:false /* 图片保存展示 */,
      showimg:""
    }
  },
  components:{
    UserCover
  },
  created(){  
  },
  /* 判断该id是否存在 */
  async beforeRouteEnter(to,from,next){
      let res = await profile(to.params.id)
      console.log(res);
      if(res.status == 0){
        next('/error')
      }
      console.log('to',to);
      next(vm=>{
        vm.profiles = res.data
        vm.userId = to.params.id
        if(res.data.userId !== res.token){
          vm.auth = true
        }
      })
  }, 
  methods:{
    goEdit(){
      this.$router.push('/people/edit')
    },
    /*  cancel(){
      this.showup = false
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
    async uploadAvatar(){
      let data = new FormData();
      console.log(data)
      data.append('avatar', this.$refs.pic.files[0]);
        console.log(data)
      let res = await uploadbg(data)
      console.log('res',res);
      this.showup = false
      this.profiles.profile_bg = res.path
    } */
  },
  mounted(){
    console.log('data1',this.profiles);
    console.log('this.userId',this.userId);
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
  .profile-header{
    width: 1000px;  
    position: relative;
    padding: 0 16px;
    margin: 10px auto;
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
            .item-li{
              display: flex;
              align-items: center;
              &>span{
                margin-left: 5px;
              }
            }
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
      .follow-base{
        display: flex;
        flex-direction: row;
        a{
          flex: 1;
          text-align: center;
          .follow-iteminner{
            padding: 10px 0;
            strong{
              font-weight: 900;
              color: black;
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  .icon{
    @include wh(20px,20px)
  }
</style>