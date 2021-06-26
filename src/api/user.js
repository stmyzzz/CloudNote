import {request} from '../utils'


/* 用户登录 */
export const login = loginForm => request.post('/api/user/login',loginForm)

/* 用户注册 */
export const register = registerForm => request.post('/api/user/register',registerForm)

/* 用户权限认证 */
export const auth = () => request.post('/api/user/auth')

/* 用户获取验证码 */
export const authemail = email => request.post('/api/user/activate',{email})

/* 获取用户信息 */
export const profile = id => request.get('/api/user/profile',{params:{
  id
}})

/* 更新用户信息 */
export const edit = profiles => request.put('/api/user/profile',profiles)

/* 用户封面上传 */
export const uploadbg = data => request.post('/api/user/uploabg',data,config)
let config = {
  headers: {'Content-Type': 'multipart/form-data'}
  }
  
/* 用户头像上传 */
export const uploadava = data => request.post('/api/user/uploadAva',data,config)

/* 查看用户动态 */
export const dongtai = () =>
request.get('/api/user/dongtai')





/* 用户更新状态 */
