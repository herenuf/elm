<template>

<div class="page" id="detail">
	<div class="detail">
		<h3><span class="iconfont1 icon-fanhui" @click="btn"></span></h3>
		<div class="shop-head-shaibi">	
			<dl>
				<dt><img :src="heaData.image_path | imgFilter"/></dt>
				<dd class="dd-one">{{heaData.name}}</dd>
				<dd class="dd-two"><span>商家配送/{{heaData.order_lead_time}}分钟到达</span>/<span>配送费{{heaData.float_delivery_fee}}</span></dd>
				<dd class="dd-threee">公告：欢迎光临，用餐高峰期请提前下单，谢谢</dd>
			</dl>
			<p v-if="heaData.activities"><span :style="{background:'#'+heaData.activities[0].icon_color}">{{heaData.activities[0].icon_name}}</span>{{heaData.activities[0].description}}<span class="activity-right">{{heaData.activities.length}}个活动</span></p>
		</div>
	</div>
	<div class="saibi">
		<ul class="slideshow border-bottom">
			<li v-for="(val,key) in header" :class="{'active':val==selectNav}" @click="navClick(val)">
				<span>{{val}}</span>
			</li>
		</ul>
		<div class="data1" v-show="selectNav">
			<div class="classify border-top" v-if="selectNav=='商品'">
				<ul class="classify-left">
					<div class="wrap">
						<li v-for="index in sellData">{{index.name}}</li>
					</div>
				</ul>
				<ul class="classify-right">
					<div class="wrap">
						<dl v-for="index in sellData">
							<p>{{index.name}}<span>{{index.description}}</span></p>
							<ul v-for="item in index.foods" class="border-bottom">
								<li class="foods-img"><img :src="item.image_path | imgFilter"/></li>
								<ul>
									<li class="foods-title">{{item.name}}</li>
									<li class="fooddescription">{{item.description}}</li>
									<li class="on-sale"><span>月售{{item.month_sales}}份</span><span>好评率{{item.satisfy_rate}}%</span></li>
									<li class="foods-price">￥{{item.specfoods[0].price}}起</li>
								</ul>
							</ul>
						</dl>
					</div>
				</ul>
			</div>
			<div class="sort border-top" v-else-if="selectNav=='评价'">
				
			</div>
			<div class="screen border-top" v-else-if="selectNav=='店铺'">
				<div class="property">
					<p class="border-bottom">活动与属性</p>
					<li v-for="item in heaData.activities"><span :style="{background:'#'+item.icon_color}"><span style="color: #fff;">{{item.icon_name}}</span></span>{{item.description}}</li>					
				</div>
				<div class="screen-foot">
					<p class="information">商家信息</p>
					<p>{{heaData.description}}</p>
					<p class="border-top location">地址：{{heaData.address}}</p>
					<p class="border-top">营业时间：{{heaData.opening_hours[0]}}</p>
						
				</div>
			</div>
		</div>
	</div>
</div>	
</template>

<script>
import {mapState} from 'vuex'
import homeServices from '../../services/homeServices.js'

export default{
	data(){
		return {
			heaData:{},
			sellData:[],
			header:['商品','评价','店铺'],
			selectNav:'商品',
			id:this.$route.params.id,
			myScroll:null
		}
	},
	computed: {
			...mapState([
				'longitude',
				'latitude'
			])
	},
	methods:{
		btn(){
			this.$router.back();
		},
		navClick(val){
//			console.log(123);
			this.selectNav=val;
		},
		requestData(){
			//请求地址	
			var lg = this.longitude;
			var lt = this.latitude;
			
			//请求商家详情1
			homeServices.getDetHeaData(lg,lt,this.id)
			.then((res)=>{
//				console.log(res);
				this.heaData=res;
			})
			//请求商家详情2
			homeServices.getDetSellData(lg,lt,this.id)
			.then((res)=>{
//				console.log(res);
				this.sellData=res;
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
	}
}
	
</script>

<style>
#detail{
	box-sizing: border-box;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: #f5f5f5;
}

#detail>.detail{
	width: 100%;
	height: 144px;
	/*line-height: 44px;*/
	position: relative;
	left: 0;
	top: 0;
	background:linear-gradient(90deg,#0af,#0085ff);
}
#detail .icon-fanhui{
	width: 30px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: #fff;
	font-size: 20px;
	position: absolute;
	left: 5px;
}
#detail .detail h3{
	display: block;
	width: 100%;
	height: 40px;
	color: #fff;
	position: relative;
	top: 0;
	left: 0;
}
#detail .saibi{
	width: 100%;
	height: 100%;
	position: relative;
	top: 0;
	left: 0;
	bottom: 0;
}
.saibi .slideshow{
	width: 100%;
	height: 40px;
	position: relative;
	top: 0px;
	left: 0;
	display: flex;
	text-align: center;
	line-height: 40px;
	color:#666;
	font-size: 14px;
}
.saibi .slideshow>li{
	flex: 1;
	text-align: center;
}
.saibi .data1{
	width: 100%;
	height: 100%;
	position: relative;
}
.saibi .slideshow li.active{
	color: #007AFF;
	
}

.shop-head-shaibi{
	width: 100%;
	height: 104px;
	padding: 5px 10px;
	box-sizing: border-box;
}
.shop-head-shaibi>dl>dt{
	width: 60px;
	height: 60px;
	float: left;
}
.shop-head-shaibi>dl>dt img{
	width: 100%;
}
.shop-head-shaibi>dl>dd{
	padding-left:70px;
	color: #fff;
	font-size: 12px;
	line-height: 20px;
}
.shop-head-shaibi>dl .dd-one{
	font-size: 16px;
	font-weight: 900;
}
.shop-head-shaibi p{
	color: #fff;
	font-size: 12px;
	padding-top:10px ;
}
.shop-head-shaibi p>span:nth-child(1){
	margin-right:8px ;
}
.activity-right{
	position: absolute;
	right: 10px;
}
/*商品*/
.classify,.sort,.screen{
	width: 100%;
	height: 100%;
	position: absolute;
	top:0px;
	left: 0;
	bottom: 0;
}
.data1>.classify{
	background: yellow;
	height: 100%;
}
.sort{
	background: yellowgreen;
}

.classify-left{
	width: 25%;
	height: 100%;
	position: absolute;
	left: 0;
	overflow-y: auto;
}
.classify-left .wrap>li{

	position: relative;
    padding: 16px 2px;
    border-bottom: 1px solid #ededed;
    font-size: 12px;
    color: #666;
    background: #F9F9F9;	
}
.classify-right{
	width: 75%;
	height: 100%;
	background: #fff;
	position: absolute;
	right: 0;
	overflow-y: auto;
}
.classify-right .wrap>dl>p{
	width: 100%;
	height: 30px;
	line-height: 30px;
	background: #f1f1f1;
}
.classify-right .wrap>dl>p>span{
	font-size: 12px;
	color: #999;
}
.classify-right .wrap>dl>ul{
	padding: 5px 10px;
	box-sizing: border-box;
}
.foods-img{
	width: 50px;
	height: 50px;
	float: left;
}
.foods-img img{
	width: 100%;
}
.classify-right .wrap>dl>ul>ul>li{
	padding-left:60px ;
	font-size: 12px;
	line-height: 18px;
	color: #999;
}
.classify-right .wrap>dl>ul>ul .foods-title{
	color: #000000;
	font-size: 14px;
	font-weight: 900;
}
.classify-right .wrap>dl>ul>ul .fooddescription{
	line-height: 15px;
}
.classify-right .wrap>dl>ul>ul .on-sale{
	color: #666;
}
.classify-right .wrap>dl>ul>ul .foods-price{
	color: orange;
}
/*店铺*/
.screen{
	background: #eee;
}
.screen .property{
	padding: 5px 10px;
	box-sizing: border-box;
	background: #fff;
}
.screen .property>p{
	width: 100%;
	height: 30px;
	line-height: 30px;
}
.screen .property>li{
	font-size: 12px;
	padding: 9px 0;
	color: #999;
}
.screen .property>li>span:nth-child(1){
	margin-right: 8px;
}
.screen .screen-foot{
	margin-top: 10px;
	padding: 5px 10px;
	box-sizing: border-box;
	background: #fff;
}
.screen .screen-foot>p{
	font-size: 12px;
	color: #999;
	width: 100%;
	height: 38px;
	line-height:38px;
}
.screen .screen-foot .information{
	font-size: 16px;
	color: #000000;
}
.screen .screen-foot .location{
	line-height: 18px;
}
</style>