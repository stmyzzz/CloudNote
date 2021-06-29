import {request} from '@/utils'

/* 更新收藏 */
export const upColl = (textId) => request.get('/api/collection/up',{
  params:{
    textId
  }
})

/* 得到指定用户的收藏 */
export const getColl = id => request.get('/api/collection',{
  params:{
    id
  }
})

/* 删除收藏 */
export const delColl = id => request.delete('/api/collection',{
  params:{
    id
  }
})
