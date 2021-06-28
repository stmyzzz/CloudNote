import axios from 'axios'
import {getStore} from './storage'
import router from '../router'
import Vue from 'vue'
/* 
const BASE_URL = "http://localhost:3000"; */
export const request = createBaseInstance()
function createBaseInstance(){
  const instance = axios.create({
    /* baseURL: BASE_URL, */
  })

  /* 请求拦截器 */
  instance.interceptors.request.use(function(config){
    /* 获取缓存中的token */
    if(getStore('token')){
      config.headers.Authorization = getStore('token')
    }
    return config
  },
  function(err){
    return Promise.reject(err)
  })

  /* 响应拦截器 */
  instance.interceptors.response.use(response =>{
    if(response.data.isLogin == false){
      router.replace({
        path:'/login'
      })
    }
    return response.data
  },
  err=>{
    if(err && err.response){
      switch(err.response.status){
        case 400:
        this.$message.error("请求出错")
        break
        case 401:
        alert('授权失败，请重新登陆')
        break
        case 403:
        err.message = '拒绝访问'
        break
        case 404:
          Vue.prototype.$message({
            message:'请求错误',
            type: 'error'
          });
          break
        case 500:
          Vue.prototype.$message({
            message:'服务器出错',
            type: 'error'
          });
          break
        }
      }else{
        Vue.prototype.$message({
          message:'无法连接到服务器',
          type: 'error'
        });
      }
      console.log(err);
      return Promise.reject(err.response)
    }
  )
  return instance
}