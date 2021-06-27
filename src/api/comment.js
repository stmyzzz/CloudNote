import {request} from '@/utils'

/* 得到评论 */
export const comment = (id,typeId) => request.get('/api/comment',{params:{
  id,typeId
}})

/* 添加评论 */
export const addComment = (comment_text,textId) => request.post('/api/comment',{
  comment_text,
  typeId:1,
  textId
})

/* 评论收藏点赞状态检验 */
export const statusAuth = (typeId,textId)=>request.get('/api/statusAuth',{
  params:{
    typeId,
    textId
  }
})

/* 删除评论 */
export const commentDel = id=>request.delete('/api/comment',{
  params:{
    id
  }
})