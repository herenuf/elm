
import Vue from 'vue'
import App from './App'
//路由
import router from './router'
//过滤器
import './filter'
//请求
import axios from 'axios'

Vue.prototype.$http=axios;

//状态管理
import store from './store'

//处理非父子组件之间的通讯
var Event	= new Vue();
Vue.prototype.$eventHandle = Event;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
