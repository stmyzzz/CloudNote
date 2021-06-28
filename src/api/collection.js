import {request} from '@/utils'

/* 更新收藏 */
export const upColl = (textId) => request.get('/api/collection/up',{
  params:{
    textId
  }
})

export const getColl = id => request.get('/api/collection',{
  params:{
    id
  }
})
