<template>
<div>
	<ul class="slideshowsaibi border-bottom">
		<li v-for="(val,key) in header" :class="{'active':val==selectNav}" @click="navClick(val)">
			<span>{{val}}<span class="iconfont1 icon-f11"></span></span>
		</li>
	</ul>
	<div class="data-shaibi" v-show="selectNav" @click="noneBtn">
		<div class="classifysaibi border-top" v-if="selectNav=='分类'">
			<ul class="classifysaibi-list">
				<li v-for="index in data" class="border-bottom">{{index}}</li>
			</ul>
		</div>
		<div class="sortsaibi border-top" v-else-if="selectNav=='排序'">
			<ul class="sortsaibi-list">
				<li v-for="index in sort" class="border-bottom"><span class="iconfont1 icon-f11"></span>{{index}}</li>
			</ul>
		</div>
		<div class="screensaibi border-top" v-else-if="selectNav=='筛选'">
			<dl class="dl-onesaibi">
				<p>配送方式</p>
				<span class="span"><span class="iconfont1 icon-f11"></span>蜂鸟专送</span>
			</dl>
			<dl class="dl-twosaibi">
				<p>商家属性(可多选)</p>
				<span class="span"><span class="iconfont1 icon-f11"></span>蜂鸟专送</span>
				<span class="span"><span class="iconfont1 icon-f11"></span>蜂鸟专送</span>
				<span class="span"><span class="iconfont1 icon-f11"></span>蜂鸟专送</span>
				<span class="span"><span class="iconfont1 icon-f11"></span>蜂鸟专送</span>
				<span class="span"><span class="iconfont1 icon-f11"></span>蜂鸟专送</span>
				<span class="span"><span class="iconfont1 icon-f11"></span>蜂鸟专送</span>
			</dl>
			<div>
				<a>清空</a>
				<a style="background: #4CD964;color: #fff;">确定</a>
			</div>
		</div>
	</div>
</div>	
	
</template>

<script>
import {mapState} from 'vuex'
import homeServices from '../../services/homeServices.js'
import SellerList from '../../components/common/SellerList.vue'
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
		}
}
</script>


<style>
.slideshowsaibi{
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
.slideshowsaibi>li{
	flex: 1;
	text-align: center;
}
.slideshowsaibi>li>.icon-f11{
	color: #999;
    width: 20px; 
    height: 20px; 
    font-size: 16px;
    text-align: center;

}
#elementsaibi{
	position: absolute;
	width: 100%;
	left: 0;
	top: 84px;
	bottom: 0;
	overflow: hidden;
	z-index: -1;
}


.slideshowsaibi li.active{
	color: #007AFF;
}

.data-shaibi{
	/*display: none;*/
	position: fixed;
    left: 0;
    right: 0;
    top: 84px;
    bottom: 0;
    z-index: 1;
    background: rgba(0,0,0,.2);
}
.classifysaibi,.sortsaibi,.screensaibi{
	width: 100%;
	z-index: 1;
	background: #fff;
}
.classifysaibi{
	height: 400px;	
}
.sortsaibi{
	height: 350px;
}
.screensaibi{
	height: 300px;
}
#searchdetail .classifysaibi-list{
	width: 33%;
	height: 100%;
	padding-left: 10px;
	overflow: hidden;
	background: #f9f9f9;
	overflow-y: auto;
}
.classifysaibi-list>li{
	font-size: 12px;
	height: 50px;
	line-height: 50px;
}
.sortsaibi-list>li{
	font-size: 12px;
	height: 50px;
	line-height: 50px;
	padding-left: 10px;	
}
.screensaibi .dl-onesaibi{
	height: 75px;
}
.screensaibi .dl-twosaibi{
	height: 130px;
}
.screensaibi>dl{
	padding: 8px 8px;
	box-sizing: border-box;
}
.screensaibi>dl>p{
	width: 100%;
	height: 20px;
	color: #999;
	font-size: 12px;
}
.screensaibi>dl>span{
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
.screensaibi>dl>span>span{
	
}
.screensaibi>div{
	width: 100%;
}
.screensaibi>div>a{
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