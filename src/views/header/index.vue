<template>
  <div>
    <header role="banner"  class="app-header" :class="{'isFixed':isScroll}" aria-label="云记录">
      <div class="app-header-inner">
        <!-- logo -->
        <a class="app-header-link" href="">
          <img src="@/assets/logo.png" alt="">
        </a>

        <!-- 导航栏标签 -->
        <ul role="navigation" class="app-header-tabs">
          <li v-for="(item,index) in navRoutes" :key="index" class="tabs-item">
            <router-link class="tab-link" :to="item.path" exact>{{item.meta.title}}</router-link>
          </li>
        </ul>

        <!-- 搜索框 -->
        <div class="search-flex">
          <div class="search-bar">
            <form class="search-input">
              <div class="submit">
                <div>
                  <input placeholder="去玉龙雪山旅游需要注意什么？" autocomplete="off" class="input" type="text">
                  <button class="search-btn">
                    
                      <svg class="search-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z" fill-rule="evenodd"></path></svg>
                  </button>
                </div>
              </div>
            </form>
            <button class="search-question">提问</button>

          </div>
        </div>
        <!-- 深色模式 -->
        <div class="theme-btn" @click="theme(type)">
          <img src="@/assets/changetheme.png" alt="">
        </div>

        <!-- 头像  --> <el-dropdown @command="handleCommand" trigger="click">
        <div class="profile-wrap">
          <div class="img-wrap">
            <img  :src="imgurl+profiles.avatal_url" alt="">
          </div>
        </div>  
            <el-dropdown-menu  slot="dropdown">
              <el-dropdown-item command="a" icon="el-icon-user">
                我的主页</el-dropdown-item>
              <el-dropdown-item icon="el-icon-error">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

import {navRoutes} from '@/router'
import {auth} from '@/api'
import {imgurl} from '@/config'
export default {
  name:'Header',
  data(){
    return {
      type:'dark',
      navRoutes:navRoutes,
      isScroll:false,
      profiles:{
        avatal_url:""
      },
      imgurl:imgurl
    }
  },
  mounted(){
    document.addEventListener('scroll',this.Scroll)
    console.log('this.userid',this.userId);
  },
  created(){
    this.init()
  },
  methods:{
    handleCommand(command){
      if(command == "a"){
        this.$router.push('/people/'+this.profiles.userId)
      }
    },
    Scroll(){
      console.log('12');
    },
    theme(type){
      type== 'light' ? this.type="dark" : this.type="light"
      window.document.documentElement.setAttribute("data-theme",type)
    },
    async init(){
      let data = await auth()
      console.log('data',data);
      this.profiles = data.model
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/style/handle.scss";
  .h1{
    @include font_color("font_color");
  }
  .app-header{
    position: relative;
    z-index: 100;
    min-width: 1000px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(18,18,18,.1);
    background: #fff;
    .app-header-inner{
      display: flex;
      margin: 0 auto;
      max-width: 1156px;
      min-width: 1000px;
      height: 52px;
      align-items: center;
      .app-header-link{
        width: 40px;
        height: 40px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .app-header-tabs{
        display: flex;
        align-items: center;
        margin: 0px 10px;
        flex-shrink: 0;
        .tabs-item{
          padding: 0 15px;
          
          .tab-link{
            position: relative;
            display: inline-block;
            line-height: 50px
          } 
          .router-link-active{
            @include font_color("link_active");
            color: #121212;
            font-weight: bold;
            &::after{
              content:'';
              height: 4px;
              background:$theme-color;
              position: absolute;
              left: 0;
              right: 0;
              bottom: -1px;
            }
          }
        }
      }
      .search-flex{
        display: flex;
        flex: 1;
        justify-content: center;
        .search-bar{
        display: flex;
        align-items: center;
        flex-grow: 1;
        max-width: 550px;
          .search-input{
            flex-grow: 1;
            .submit{
              &>div{
                display: flex;
                padding: 4px 0px; padding-left: 10px;
              }
              display: block;
              width:100%;
              height: 100%;
              background: #f6f6f6;
              border-radius: 50px;
              z-index: 100;
              .input{
                height:25px;
                flex: 1 1;
                border: none;
                background:transparent;
                outline: none;
              }
              .search-btn{
                display: inline-flex;
                  align-items: center;
                margin-right: 2px;
                .search-icon{
                  color: #8590a6;
                }
              }
            }
          }
          .search-question{
            width: 70px;
            border-radius: 999px;
            margin-left: 10px;
            background: $theme-color;
            color: #fff ;
            height: 100%;
            cursor: pointer;
          }
        }
      }
      .theme-btn{
        margin-right: 20px;
        cursor: pointer;
        img{
          width: 27px;
          height: 27px;
        }
      } 
      .profile-wrap{
        display: flex;
        align-items: center;
        cursor: pointer;
        .img-wrap{
          img{
            width: 30px;
            height: 30px;
          }
        }
        .name-wrap{
          margin-left: 8px;
        }
      }

    }
  }
  .isFixed{
    position: fixed;
    width: 100%;
    top: 0;
  }
</style>