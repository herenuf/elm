<template>
	
<div class="page" id="me">
	<div class="me">
		<h3><span class="iconfont1 icon-fanhui" @click="btn"></span>我的</h3>
	</div>
	<div class="login-register">
		<a href="#/order/login">
			<div class="head-portrait">
				<ul>
					<li class="moral"><span class="iconfont1 icon-gerenyonghutouxiang"></span></li>
					<ul class="float-right">
						<li>登录/注册</li>
						<li><span class="iconfont1 icon-mjiantou"></span></li>
						<li><span class="iconfont1 icon-shouji"></span><span>登录后享受更多特权</span ></li>
					</ul>
				</ul>
			</div>
		</a>
	</div>
	<ul class="fonta">
		<li >
			<span class="iconfont1 icon-youhui red"></span>
			<span>优惠</span>
		</li>
		<li class="border-left">
			<span class="iconfont1 icon-jifen yellowgreen"></span>
			<span>积分</span>
		</li>
	</ul>
	<ul class="list">
		<a href="#/order"><li class="border-bottom"><span class="iconfont1 icon-dingdan"></span><span>我的订单</span><span class="iconfont1 icon-mjiantou right"></span></li></a>
		<a href="#/order"><li class="border-bottom"><span class="iconfont1 icon-huaqiangxincheng-icon-"></span><span>积分商城</span><span class="iconfont1 icon-mjiantou right"></span></li></a>
		<a href="#/order"><li class="border-bottom"><span class="iconfont1 icon-huiyuan"></span><span>饿了么会员卡</span><span class="iconfont1 icon-mjiantou right"></span></li></a>
	</ul>
	<ul class="list">
		<a href="#/order"><li class="border-bottom"><span class="iconfont1 icon-huaduo"></span><span>服务中心</span><span class="iconfont1 icon-mjiantou right"></span></li></a>
		<a href="#/order"><li class="border-bottom"><span class="iconfont1 icon-changyonglogo40"></span><span>下载饿了么APP</span><span class="iconfont1 icon-mjiantou right"></span></li></a>
	</ul>
</div>
	
</template>

<script>
export default{
	methods:{
		btn(){
			this.$router.back()
		}
	}
}
</script>

<style>
#me{
	background: #f5f5f5;
}
.me{
	width: 100%;
	height: 44px;
	line-height: 44px;
	position: relative;
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
.me h3{
	display: block;
	width: 100%;
	color: #fff;
	text-align: center;
	position: absolute;
	top: 0;
	left: 0;
}
.login-register{
	width: 100%;
	height: 110px;
	background: #0085FF;
	position: relative;
	top: 0px;
}
.head-portrait{
	padding: 24px 20px;
}
.moral{
	display: block;
	width: 55px;
	height: 55px;
	line-height: 70px;
	text-align: center;
	border-radius: 50%;
	background: #fff;
	float: left;
	
}
.moral .iconfont1{
	font-size: 35px;
	color: #999;
}
.float-right{
	padding-left: 70px;
	color: #fff;
}
.float-right>li{
	padding: 3px 0;
}
.float-right>li:nth-child(1){
	font-size: 23px;
}
.float-right>li:nth-child(2){
	position: absolute;
	right:20px;
	top: 48px;
}
.red,.yellowgreen{
	border-radius: 50%;
	width: 30px;
	display: block;
	height: 30px;
	line-height: 30px;
	text-align: center;
	color: #fff;
	margin: 0 auto;
}
.red{
	background: red;
}
.yellowgreen{
	background: yellowgreen;
}
.fonta{
	display: flex;
	text-align: center;
	background: #fff;
}
.fonta>li{
	flex: 1;
	padding: 10px 5px;
	text-align: center;
	font-size: 14px;
	line-height: 30px;
	
}
.list{
	margin-top: 10px;
	background: #fff;
}
.list>a>li{
	height: 40px;
	line-height: 40px;
	padding: 0 15px;
}
.list a>li .right{
	float: right;
}
.list li>span:nth-child(2){
	margin-left: 10px;
}
.icon-dingdan{
	color: rgb(74, 165, 240);
}
.icon-huaqiangxincheng-icon-{
	color: rgb(252, 123, 83);
}
.icon-huiyuan{
	color: rgb(255, 198, 54);
}
.icon-huaduo,.icon-changyonglogo40{
	color: rgb(74, 165, 240);
}
</style>