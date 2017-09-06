<template>
<div>
<div class="page" id="address">
	<div class="title">
		<div class="title-poi">
			<span class="iconfont1 icon-fanhui" @click="btnAction"></span>
			<h3>选择地址</h3>
		</div>
		<input type="text" placeholder="请输入地址" v-model="keyword"/>
	</div>
	<ul class="location">
		<li v-for="address in addressList" class="border-bottom list" @click="btnAddress(address)">
			<h3>{{address.name}}</h3>
			<p>{{address.address}}</p>
		</li>
	</ul>
</div>

</div>
</template>

<script>
	import {mapState} from 'vuex'
	import homeServices from '../../services/homeServices.js'
	var timer = null;
	export default {
		data(){
			return{
				keyword:'',
				addressList:[]
			}
		},
		computed: {
			...mapState([
				'longitude',
				'latitude'
			])
		},
		methods:{
			btnAction(){
				this.$router.back();
			},
			btnAddress(info){
				this.$eventHandle.$emit('get-address',info.name);
				//修改经纬度全局状态
				this.$store.dispatch('changeLocation',{
					lg:info.longitude,
					lt:info.latitude
				})
				this.$router.back();
			}
		},
		mounted(){
			this.$watch('keyword',(newVal,oldVal)=>{
				console.log(newVal,oldVal)
				clearTimeout(timer);
				timer = setTimeout(()=>{
//					console.log('发送请求');
					homeServices.getSearchData(newVal, this.longitude, this.latitude)
					.then((res)=>{
						this.addressList=res;
					})
				},500)
			})
		}
	}
</script>

<style>
#address{
	background: #fff;
}
#address .title{
	width: 100%;
	height: 88px;
	position: absolute;
	top: 0;
	left: 0;
	background:#0af;
}
#address .title .title-poi{
	width: 100%;
	height: 43px;
	color: #fff;
}
#address .title .title-poi .icon-fanhui{
	display: block;
	width: 30px;
	height: 30px;
	font-size: 21px;
	float: left;
	position: absolute;
	top: 10px;
	left:10px;
	padding-left: 5px;
	line-height: 30px;
}
#address .title .title-poi h3{
	text-align: center;
	padding-top: 10px;
	font-weight: normal;
}
#address .title input{
	display: block;
	width: 90%;
	margin: 6px auto;
	padding: 6px 12px;
	height: 27px;
	box-sizing: border-box;
	border-radius: 15px;
	border: none;
	outline: none;
	font-size: 12px;
}
#address .location{
	width: 100%;
	position: absolute;
	left: 0;
	top: 88px;
	bottom: 0px;
	overflow: auto;
	overflow-x: inherit; 
}
#address .location .list{
	width: 100%;
	padding: 7px 0px 7px 15px;
}
#address .location .list h3{
	font-size: 14px;
}
#address .location .list p{
	font-size: 12px;
	color: #999;
}
</style>