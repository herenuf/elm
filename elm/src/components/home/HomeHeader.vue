<template>
	<div class="home-header">
		<div class="info">
			<div class="index-3vsmj"><span class="iconfont1 icon-position-o"></span><router-link to="/home/address"><p class="address">{{address}}</p></router-link><span class="iconfont1 icon-f11"></span></div>
			<div class="weather">
				<span>{{weather.temperature}}°</span>
				<span>{{weather.description}}</span>
				<img :src="weather.image_hash | imgFilter" />
			</div>
		</div>
		<router-link to="/home/search"><div class="search">搜索商家、商品</div></router-link>
		<div class="hot-words">
				<span v-for="word in hotWords" @click="toSeachDetail(word)">{{word}}</span>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		address:String,
		weather:Object,
		hotWords:Array
	},
	methods:{
		toSeachDetail(word){
			this.$router.push('/home/search-detail/'+word)
		}
	}
}
</script>

<style>
.home-header{
	width: 100%;
	height: 108px;
	background: #0085FF;
	padding: 10px;
	box-sizing: border-box;
}
.home-header .info .address{
	white-space: nowrap;
    overflow: hidden;
    max-width: 80%;
	height: 30px;
	line-height: 30px;
	font-size: 16px;
	color: #fff;
	text-overflow: ellipsis;
	float: left;
}
.info .icon-position-o,.info .icon-f11{
	color: #fff;
	width: 20px;
	height: 20px;
	font-size: 16px;
	display: block;
	float:left;
}
.home-header .info{
	height: 30px;
	line-height: 30px;
}
.home-header .info .index-3vsmj{
	width: 60%;
	height: 30px;
}
.home-header .info .weather{
	float: right;
    width: 19%;
    height: 30px;
    position: absolute;
    top: 11px;
    right: 10px;
}
.home-header .info .weather img{
	width: 30px;
	float: right;
}
.home-header .info .weather>span{
	font-size: 12px;
	position: absolute;
	right: 30px;
	color: #fff;
}
.home-header .info .weather>span:nth-child(1){	
	top: -7px;
	height: 0;
}
.home-header .info .weather>span:nth-child(2){
	padding-top: 7px;
	height: 0;
}
.home-header .search{
	display: block;
	width: 100%;
	height: 30px;
	margin: 8px 0;
	background: #fff;
	border-radius: 15px;
	text-align: center;
	font-size: 12px;
	line-height: 30px;
	color: #666;
}
.home-header .hot-words{
	font-size: 12px;
	overflow-x: auto;
}
.home-header .hot-words span{
	margin-right: 20px;
	color: #fff;
	white-space: nowrap;
}
</style>