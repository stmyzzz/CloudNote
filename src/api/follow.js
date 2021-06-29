import {request} from '@/utils'

/* 得到关注该用户的人 */
export const getFollowed = id =>request.get('/api/user/follow',{
  params:{
    id
  }
})

/* 操作用户关注的人 */
export const upFollow = id =>request.put('/api/user/follow',{
  params:{
    id
  }
})