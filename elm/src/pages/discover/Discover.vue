<template>
	
	<div class="page" id="discover">
		<div class="discover">
			<h3><span class="iconfont1 icon-fanhui" @click="btn"></span>发现</h3>
		</div>
	</div>	
</template>

<script>
import {mapState} from 'vuex'
import discoverServices from '../../services/discoverServices.js'


export default{
	data(){
		return {
			listData:[]
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
		requestData(){
//			console.log('发送请求');
			//请求地址	
				var lg = this.longitude;
				var lt = this.latitude;
				discoverServices.getAddressData(lg,lt)
				.then((address)=>{
						this.address=address;
				})
			//请求头部积分商城数据
			discoverServices.getDiscoverData(lg,lt)
				.then((res)=>{
					console.log(res);
					this.listData=res;
				})
		}	
	}
}

</script>

<style>
.discover{
	width: 100%;
	height: 44px;
	line-height: 44px;
	position: absolute;
	left: 0;
	top: 0;
	background: #0085FF;
}
.icon-fanhui{
	color: #fff;
	font-size: 20px;
	position: absolute;
	left: 5%;
}
.discover h3{
	display: block;
	width: 100%;
	color: #fff;
	text-align: center;
	position: absolute;
	top: 0;
	left: 0;
}
</style>