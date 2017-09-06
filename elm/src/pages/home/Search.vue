<template>
<div>
	<div class="page" id="search">
		<div class="from">
			<div class="arrow" @click="btn"><span class="iconfont1 icon-fanhui"></span></div>
			<input type="text" placeholder="请输入商品名称" class="search"/>
		</div>
		<h3>热门搜索</h3>
		<ul class="list">
			<li v-for="(item,val) in listData" @click="itemBtn(item)">{{item}}</li>
		</ul>
	</div>
</div>
</template>

<script>

import {mapState} from 'vuex'
import homeServices from '../../services/homeServices.js'
export default{
	data(){
		return{
			listData:[]
		}
	},
	props:{
		item:Array
	},
	methods:{
		btn(){
			this.$router.back();
		},
		itemBtn(item){
			this.$router.push('/home/search-detail/'+item)
//			console.log(item)
		},
		requestData(){
			//请求地址	
			var lg = this.longitude;
			var lt = this.latitude;
			homeServices.getHotData(lg,lt)
			.then((address)=>{
					this.address=address;
			})
			//请求热门搜索数据
			homeServices.getHotData(lg,lt)
			.then((res)=>{
//				console.log(res);
				this.listData=res;
			})
		}
	},
	computed: {
			...mapState([
				'longitude',
				'latitude'
			])
	},
	created(){
			//初始化页面数据，发送各种请求		
			this.requestData();	
			//监听地址改变的事件
			this.$eventHandle.$on('get-address', (val)=>{
//				console.log('home接收到了新地址'+val);
				this.address = val;
			})
			//监听经纬度变化
			this.$watch('longitude', this.requestData);
			this.$watch('latitude', this.requestData);
		}
}
	
</script>

<style>
#search{
	background: #fff;
}
#search .arrow{
	width: 30px;
	height: 30px;
	padding-top: 5px;
	padding-left: 5px;
	float: left;
}
.from{
	padding: 10px;
}
.icon-fanhui{
	font-size: 21px;
	color: #666;
}
.from .search{
	width: 85%;
	height: 35px;
	background: #f8f8f8;
	border: none;
	border-radius: 15px;
	padding-left: 12px;
	outline: none;
	color: #666;
	margin-left: 2px;
}
#search h3{
	display: block;
	width: 100%;
	height: 30px;
	line-height: 30px;
	position: absolute;
	top: 55px;
	left: 0;
	padding: 8px 8px;
	color: #666;
}
#search .list{
	width: 100%;
	height: 144px;
	position: absolute;
	top: 101px;
	left: 0;
	box-sizing: border-box;
	padding: 0 10px 10px 10px;
}
#search .list>li{
	background: #f7f7f7;
	padding: 8px 10px;
	margin:5px 5px;
	float: left;
	color: #666;
	border-radius: 3px;
	font-size: 14px;
}
</style>