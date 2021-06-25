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
      <h1 class="header-title">注册</h1>
    </el-col>
  </el-row>
  <el-row type="flex"  justify="center">
    <el-col :span="24">
      <el-input v-model="registerForm.username" placeholder="请输入用户名" ></el-input>   
    </el-col>
  </el-row>
      <el-row type="flex"  justify="center">
    <el-col :span="24">
      <el-input type="password" v-model="registerForm.pwd" placeholder="请输入密码" show-password></el-input>   
    </el-col>
    </el-row>
          <el-row type="flex"  justify="center">
    <el-col :span="24">
      <el-input type="text" v-model="registerForm.email" placeholder="请输入注册邮箱"></el-input>   
    </el-col>
    </el-row>
      <el-row type="flex"  justify="center">
    <el-col class="col-flex" :span="24">
      <el-input v-model="registerForm.code" placeholder="请输入验证码" ></el-input> 
      <el-button @click="sendcode" type="primary" :loading="isLoading">发送验证码</el-button>    
    </el-col>
  </el-row>
    <el-row type="flex"  justify="center">
        <el-button class="register-btn" @click="submit" type="primary" :loading="isLoading">注册</el-button> 
    </el-row>
    <el-row type="flex"  justify="center">
      <el-col :span="24">
        <p>
          已有账号？<router-link class="register-link" to="/login">去登录</router-link>
        </p>  
      </el-col>
  </el-row>
  </div>
</template> 
  
<script>
import {register,authemail} from '@/api'
export default {
  data(){
    return {
      registerForm:{
        username:'',
        pwd:'',
        email:'',
        code:''
      },
      isLoading:false
    }
  },
  methods:{
    async submit(){
      if(this.registerForm.username == "" || this.registerForm.pwd == "" || this.registerForm.code == "" || this.registerForm.email == ""){
        this.$message.warning('请填写完整'); 
        return
      }
    try{
      this.isLoading = true
      let res = await register(this.registerForm)
        if(res.msg == '注册成功'){
          this.$message.success(res.msg);
          }else if(res.msg){
          this.$message.error(res.msg);
        }
        this.isLoading = false
      }catch(e){
        this.isLoading = false
        return 
      }
    },
    async sendcode(){
      console.log(this.registerForm.email);
      if(this.registerForm.email == ''){
        this.$message.warning('请填写邮箱'); 
      }else{
        let res = await authemail(this.registerForm.email)
        this.$message.warning(res.msg); 
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
  .el-button{
    width: 150px;
  }
  .el-row{
    margin-bottom: 30px;
    text-align: center;
  }
  .el-col-24{
    width: 400px !important;
  }
  .col-flex{
    display: flex;
    
  }
</style>