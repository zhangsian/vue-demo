// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Routes from './routes'
import axios from 'axios'
// import Qs from 'qs'
import store from './store'
// axios.defaults.baseURL = 'https://wd1182543348jfzvtq.wilddogio.com'

Vue.prototype.axios = axios;
Vue.config.productionTip = false
Vue.use(VueResource)
// Vue.use(axios)
Vue.use(VueRouter)
Vue.use(ElementUI)

// import { Swipe, SwipeItem } from 'vue-swipe';

// //注册轮播图
// Vue.component('swipe', Swipe);
// Vue.component('swipe-item', SwipeItem);

/* eslint-disable no-new */

// import axios from './plugins/axios';//安装axios插件
// Vue.use(axios);


// import loading from './components/loading/index'
// Vue.use(loading);//安装loading组件

//自定义指令
// Vue.directive('rainbow',{ 
//   bind(el,bingding,vnode){
//     el.style.color = "#" + Math.random().toString(16).slice(2,8); 
//   }
// })

Vue.directive('theme',{ 
  bind(el,bingding,vnode){
    if(bingding.value == "wide"){
      el.style.maxWidth = "1260px";
    }else if(bingding.value = 'narrow'){
      el.style.maxWidth = "1000px";
    }

    if(bingding.arg == 'column'){
      el.style.background = "#6677cc";
      el.style.padding = '20px';
    }
  }
})

// Vue.filter("to-uppercase",function(value){
//       return value.toUpperCase()
// })

// Vue.filter("snippet",function(value){
//   return value.slice(0,100)+"...";
// })


//创建路由

const router = new VueRouter({
  routes:Routes,
  mode:"history"
})



new Vue({
  // el: '#app',
  // components: { App },
  // template: '<App/>'
  router:router,
  store:store,
  render:h => h(App),
}).$mount('#app')
