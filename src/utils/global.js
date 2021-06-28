import {
  Button,
  Input,
  Col,
  Row,
  Message,
  Radio,
  Dialog,
  Popover,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Upload
} from 
'element-ui'
import * as utils from './index'

export default {
  install(Vue){
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Col)
    Vue.use(Row)
    Vue.use(Radio)
    Vue.use(Dialog)
    Vue.use(Popover).use(Dropdown).use(DropdownItem).use(DropdownMenu).use(Upload)
    Vue.prototype.$message = Message;
    Vue.prototype.$utils = utils
  }
}