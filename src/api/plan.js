import {request} from '@/utils'
let config = {
  headers: {'Content-Type': 'multipart/form-data'}
  }

/* 所有攻略 */
export const plans = () => request.get('/api/plan')
/* 攻略图片上传 */
export const upload = data => request.post('/api/plan/upload',data,config)
/* 关注的人的攻略 */
export const followPlan = ()=>
  request.get('/api/plan/followPlan')


/* userId攻略查找12 */
export const single = () => request.get('/api/plan/single')

/* 添加攻略 */
export const add = data => request.post('/api/plan',data)

/* 删除攻略 */
export const del = id => request.delete('/api/plan',{params:{
  id
}})


