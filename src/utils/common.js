import moment from 'moment'
/* 截取年月日 */
export const date = date =>{
  return  date.substring(0,10)
}

/* 时间差 */
export const datelater = date =>{
  let t1 = moment(date)
  let t2 = moment(moment().format("YYYY-MM-DD HH:mm:ss"))
  let dura = t2.format('x') - t1.format('x')
  let tempTime = moment.duration(dura)
  return tempTime.minutes()


}

