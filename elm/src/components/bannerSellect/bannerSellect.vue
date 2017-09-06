<template>
<div class="page" id="bannerSellect">
	<div class="arrow">
		<span class="iconfont1 icon-fanhui" @click="btn"></span>
		<h3>{{$route.params.item}}</h3>
	</div>
	<filter-list></filter-list>
	<div id="element"><seller-list :data = "listData"></seller-list></div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import homeServices from '../../services/homeServices.js'
import SellerList from '../../components/common/SellerList.vue'
import FilterList from '../../components/common/FilterList.vue'
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
		requestData(){
			//请求地址	
			var lg = this.longitude;
			var lt = this.latitude;
			homeServices.getAddressData(lg,lt)
			.then((address)=>{
					this.address=address;
			})
			//请求商家列表数据
			homeServices.getHomeListData(lg,lt)
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
	components:{
			'seller-list':SellerList,
			'filter-list':FilterList
	},
	created(){
			//初始化页面数据，发送各种请求
			this.requestData();
			//监听地址改变的事件
			this.$eventHandle.$on('get-address', (val)=>{
				console.log('home接收到了新地址'+val);
				this.address = val;
			})
		
			//监听经纬度变化
			this.$watch('longitude', this.requestData);
			this.$watch('latitude', this.requestData);
		},
		mounted(){
			this.contentScroll = new IScroll("#element",{
				probeType: 3
			})
		},
		updated(){
			this.contentScroll.refresh()
		}
}
</script>

<style>
#bannerSellect{
	/*background: red;*/
}
#bannerSellect .arrow{
	width: 100%;
	height: 44px;
	position: absolute;
	left: 0;
	top: 0;
	background: #007AFF;
}
#bannerSellect .arrow .icon-fanhui{
	font-size: 21px;
	color: #fff;
	line-height: 44px;
	padding-left: 10px;
	float: left;
}
#bannerSellect .arrow h3{
	width: 100%;
	text-align: center;
	color: #fff;
	line-height: 44px;
}
.slideshow{
	width: 100%;
	height: 40px;
	position: absolute;
	top: 44px;
	left: 0;
	display: flex;
	text-align: center;
	line-height: 40px;
	color:#666;
	font-size: 14px;
}
.slideshow>li{
	flex: 1;
	text-align: center;
}
.slideshow>li>.icon-f11{
	color: #999;
    width: 20px; 
    height: 20px; 
    font-size: 16px;
    text-align: center;

}
#element{
	position: absolute;
	width: 100%;
	left: 0;
	top: 84px;
	bottom: 0;
	overflow: hidden;
}
</style>