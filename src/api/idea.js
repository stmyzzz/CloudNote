import {request} from '@/utils'

/* 添加想法 */
export const addIdea = idea_text =>{
  request.post('/api/idea',{idea_text})
}

/* 得到指定人的想法 */
export const idea = id => request.get('/api/idea',{params:{
    id
  }})
