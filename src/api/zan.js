import {request} from '@/utils'

export const upZan = (textId,typeId) => request.get('/api/zan/up',{
  params:{
    textId,typeId
  }
})