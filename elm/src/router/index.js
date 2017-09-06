import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

//外卖
import Home from '../pages/home/Home.vue'
//外卖tab下的子页面
import Address from '../pages/home/Address.vue'
import Detail from '../pages/home/Detail.vue'
import Search from '../pages/home/Search.vue'
import SearchDetail from '../pages/home/SearchDetail.vue'

//轮播图下的子页面
import bannerSellect from '../components/bannerSellect/bannerSellect.vue'



//发现
import Discover from '../pages/discover/Discover.vue'


//订单
import Order from '../pages/order/Order.vue'
import login from '../pages/order/login.vue'

//我的
import Me from '../pages/me/Me.vue'

export default new Router({
  routes: [
//外卖
 			{
 				path:'/home',
 				component:Home,
// 				home下的子页面
 				children:[
 					{
 						//有冒号的路径可以写任意值
 						path:'detail/:id',// /:name 斜杠加(冒号表示要传的参数)  链接
 						component:Detail
 					},
 					{
 						path:'address',
 						component:Address
 					},
 					{
 						path:'search',
 						component:Search
 					},
 					{
 						path:'search-detail/:word',
 						component:SearchDetail
 					}
 				]
 			},
//轮播图下的子页面
 			{
 				path:'/bannerSellect',
 				component:bannerSellect,
// 				bannerSellect下的子页面
				children:[
					{
						path:'banner/:item',
 						component:bannerSellect
					}
					
				]
 			},
//发现
 			{
 				path:'/discover',
 				component:Discover
 			},
//订单
 			{
 				path:'/order',
 				component:Order,
 				children:[
 						{
 							path:'login',
 							component:login
 						}
 				]
 			},
//我的
 			{
 				path:'/me',
 				component:Me
 			},
//重置
 			{
 				path:'*',
 				redirect:'/home'
 			}
  ]
})
