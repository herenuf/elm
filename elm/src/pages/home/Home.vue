<template>
<div id="home">
<div class="page main">
	<div class="wrap">
		<!--头部-->
		<home-header :address="address" :weather='weatherData' :hot-words='hotWords'></home-header>
		<!--轮播图-->
		<home-banner :data="bannerData"></home-banner>
		<p class="subTitle">推荐商家</p>
		<seller-list :data = "listData"></seller-list>
	</div>
</div>
<!--子页面-->
<transition enter-active-class="slideInRight animated"
	leave-active-class="slideOutRight animated">
	<router-view></router-view>
</transition>
</div>

</template>

<script>
	import {mapState} from 'vuex'
	
	import homeServices from '../../services/homeServices.js'
	import HomeHeader from '../../components/home/HomeHeader.vue'
	import HomeBanner from '../../components/home/HomeBanner.vue'
	import SellerList from '../../components/common/SellerList.vue'
	import bannerSellect from '../../components/bannerSellect/bannerSellect.vue'
	export default {
		data(){
			return {
				address:'',
				weatherData:{},
				hotWords:[],
				bannerData:[],
				listData:[],
				contentScroll:null
			}
		},
		computed: {
			...mapState([
				'longitude',
				'latitude'
			])
		},
		components:{
			'home-header':HomeHeader,
			'home-banner':HomeBanner,
			'seller-list':SellerList
		},
		methods:{
			requestData(){
//				console.log('发送请求');
				
				//请求地址	
				var lg = this.longitude;
				var lt = this.latitude;
				homeServices.getAddressData(lg,lt)
				.then((address)=>{
						this.address=address;
				})
				//请求天气
				homeServices.getWeatherData(lg,lt)
				.then((res)=>{
					this.weatherData=res;
				})
				//请求热搜词
				homeServices.getHotWordsData(lg,lt)
				.then((res)=>{
					this.hotWords=res;
				})
				//请求轮播图的数据
				homeServices.getHomeBannerData(lg,lt)
				.then((res)=>{
	//				console.log(res);
					this.bannerData=res;
				})
				//请求商家列表数据
				homeServices.getHomeListData(lg,lt)
				.then((res)=>{
	//				console.log(res);
					this.listData=res;
				})
			}
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
		},
		mounted(){
			this.contentScroll = new IScroll("#home .main",{
				probeType: 3
			})
		},
		updated(){
			this.contentScroll.refresh()
		}
	}
	
</script>

<style>
	#home header{
		width: 100%;
		height: 108px;
		background: #0085ff;
		
	}
	#home header a{
		color: #fff;
	}
	#home .subpage{
		z-index: 5;
		bottom: 0;
		background: #fff;
	}
	#home .subTitle{
		border-top: 10px solid #eee;
		height: 30px;
		line-height: 30px;
		padding-left: 10px;
		font-size: 14px;
		font-weight: bold;
		color: #333;
	}
</style>