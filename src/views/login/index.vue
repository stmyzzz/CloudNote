<!--
  @Author: stmy 
  @Date: 2021-06-08 16:29:26 
  @Last Modified by:   stmy 
  @Last Modified time: 2021-06-08 16:29:26 
  !-->
<template>
  <div class="login">
    <el-row type="flex" justify="center" align="center" >
      <img style="width:60px;height:60px;margin-right:10px" src="../../assets/logo.png" alt="">
      <h1 class="header-title" style="font-size:40px">云游</h1>
  </el-row>
  <el-row type="flex" justify="center" >
    <el-col :span="24">
      <h1 class="header-title">登录</h1>
    </el-col>
  </el-row>
  <el-row type="flex"  justify="center">
    <el-col :span="24">
      <el-input type="text" v-model="loginForm.email" placeholder="请输入邮箱"></el-input>   
    </el-col>
  </el-row>
  <el-row type="flex"  justify="center">
    <el-col :span="24">
      <el-input type="password" v-model="loginForm.pwd" placeholder="请输入密码" show-password></el-input>   
    </el-col>
  </el-row>
  <el-row type="flex"  justify="center">
    <el-button class="login-btn" @click="submit" type="primary" :loading="isLoading">登录</el-button>  
  </el-row>
  <el-row type="flex"  justify="center">
    <el-col :span="24">
      <p>没有账号？<router-link class="login-link" to="/register">去注册</router-link></p>  
    </el-col>
  </el-row>
  </div>
</template> 
  
<script>
import {login} from '@/api'
import {setStore} from '@/utils'
export default {
  data(){
    return {
      loginForm:{
        email:'',
        pwd:''
      },
      isLoading:false
    }
  },
  methods:{
    async submit(){
      if(this.loginForm.email == "" || this.loginForm.pwd == ""){
        this.$message.warning('请填写完整'); 
        return
      }
    try{
      this.isLoading = true
      let res = await login(this.loginForm)
        if(res.msg == '账号或密码错误'){
          this.$message.error(res.msg);
          }else if(res.msg == '登录成功'){
          setStore('token',res.token)
          this.$router.replace('/article')
        }
        this.isLoading = false
      }catch(e){
        this.isLoading = false
        return 
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .login{
    position: relative;
    top: 15%;
    .header-title{
      @include sc(30px,$title-font);
      text-align: center;
    }
  }
  .login-btn{
    margin-top: 10px;
    width: 150px;
  }
  .el-row{
    margin-bottom: 30px;
    text-align:center;
  }
  .el-col-24{
    width: 400px !important;
  }
  .col-flex{
    display: flex;
    
  }
</style>