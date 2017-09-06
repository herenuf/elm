<template>
<div>
	<div class="page" id="searchdetail">
		<div class="from">
			<div class="arrow" @click="btn"><span class="iconfont1 icon-fanhui"></span></div>
			<input type="text" :placeholder="$route.params.word" class="search"/>
		</div>
		<!--以下为列表样式-->
		<filter-list></filter-list>
		<!--商家列表数据-->
		<div id="element"><seller-list :data = "listData"></seller-list></div>
	</div>
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
			listData:[],
			header:['分类','排序','筛选'],
			selectNav:'',
			data:['全部商家','美食','快餐便当','特色菜系','异国料理','小吃宵夜','甜品饮品','果蔬生鲜','商店超市','浪漫鲜花','医药健康'],
			sort:['智能排序','距离最近','销量最高','起送价最低','配送速度最快','好评优先']
		}
	},
	props:{
		item:Array
	},
	methods:{
		btn(){
			this.$router.back();		
		},
		navClick(val){
//			console.log(123);
			this.selectNav=val;
		},
		noneBtn(){
			this.selectNav="";
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
#searchdetail{
	background: #fff;
}
#searchdetail .arrow{
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
	z-index: -1;
}


.slideshow li.active{
	color: #007AFF;
}

.data{
	/*display: none;*/
	position: fixed;
    left: 0;
    right: 0;
    top: 84px;
    bottom: 0;
    z-index: 1;
    background: rgba(0,0,0,.2);
}
.classify,.sort,.screen{
	width: 100%;
	z-index: 1;
	background: #fff;
}
.classify{
	height: 400px;	
}
.sort{
	height: 350px;
}
.screen{
	height: 300px;
}
#searchdetail .classify-list{
	width: 33%;
	height: 100%;
	padding-left: 10px;
	overflow: hidden;
	background: #f9f9f9;
	overflow-y: auto;
}
.classify-list>li{
	font-size: 12px;
	height: 50px;
	line-height: 50px;
}
.sort-list>li{
	font-size: 12px;
	height: 50px;
	line-height: 50px;
	padding-left: 10px;	
}
.screen .dl-one{
	height: 75px;
}
.screen .dl-two{
	height: 130px;
}
.screen>dl{
	padding: 8px 8px;
	box-sizing: border-box;
}
.screen>dl>p{
	width: 100%;
	height: 20px;
	color: #999;
	font-size: 12px;
}
.screen>dl>span{
	display: block;
	height: 35px;
	float: left;
	line-height: 35px;
	padding: 0 13px;
	margin: 3px 9px;
	border: 1px solid #ddd;
	color: #666;
	font-size: 14px;
}
.screen>dl>span>span{
	
}
.screen>div{
	width: 100%;
}
.screen>div>a{
	display: block;
	float: left;
	margin: 5px 8px;
	width: 45%;
	flex: 1;
	text-align: center;
	height: 45px;
	line-height: 45px;
	border: 1px solid #ddd;
	color: #666;
	border-radius: 4px;
}
</style>