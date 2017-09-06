import Vue from 'vue'
import Vuex from 'vuex'//插件
Vue.use(Vuex);

import userModules from './userModules.js'
import orderModules from './orderModules.js'
//State:全局数据状态  外包能访问，但是不能操作

//Getters:全局数据状态 相当于计算属性，这数据是计算得到的

//Mutations:操作数据状态 ，外部能够访问  直接操作  

//Action: 事件，可以异步操作， 事件调用Mutations从而触发数据状态    外部能访问

//声明State,相当于组件中的data
const state = {
	longitude:114.059563,
	latitude:22.54286
}

//声明Mutations，相当于组件中的methods
const mutations = {
	changeLg(st,val){
		console.log('修改');
		st.longitude = val;
	},
	changeLt(st,val){
		st.latitude = val;
	}
}

//声明action可以做各种逻辑操作
const actions = {
	changeLocation(store,val){
		store.commit('changeLg',val.lg);
		store.commit('changeLt',val.lt);
	}
}


var store = new Vuex.Store({
	'state':state,
	'mutations':mutations,
	'actions':actions,
	modules:{
		'user':userModules,
		'order':orderModules
	}
})

export default store;