import {request} from '@/utils'
let config = {
  headers: {'Content-Type': 'multipart/form-data'}
  }

/* 所有攻略 */
export const plans = () => request.get('/api/plan')
/* 攻略图片上传 */
export const upload = data => request.post('/api/plan/upload',data,config)

/* 攻略封面上传 */
export const uploadPlan = (data,id) => request.post('/api/plan/uploadPlan',data,{
  params:{
    id
  }
},config)
/* 关注的人的攻略 */
export const followPlan = ()=>
  request.get('/api/plan/followPlan')

  /* 根据id查询攻略详情 */
  export const detail = id => request.get('/api/plan/detail',{
    params:{
      id
    }
  })

/* userId攻略查找12 */
export const single = () => request.get('/api/plan/single')

/* 添加攻略 */
export const add = data => request.post('/api/plan',data)

/* 删除攻略 */
export const del = id => request.delete('/api/plan',{params:{
  id
}})

/* 更新攻略 */
export const upPlan = data => request.put('/api/plan',data)


