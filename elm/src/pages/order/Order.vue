<template>
	
	<div id="order">
		<div class="order">
			<h3><span class="iconfont1 icon-fanhui" @click="btn"></span>订单</h3>
		</div>
		<div class="man-login">
			<div class="main"><img src="//fuss10.elemecdn.com/f/18/9fb04779371b5b162b41032baf5f3gif.gif"/></div>
			<h3>登录后查看外卖订单</h3>
			<!--<a class="login">立即登录</a>-->
			<a class="login" @click="login">立即登录</a>
		</div>
		<router-view></router-view>
	</div>
	
</template>

<script>


export default{
	methods:{
		btn(){
			this.$router.push('/home')
		},
		login(){
			this.$router.push('/order/login')
		}
	}
	
}
</script>

<style>
#order{
	box-sizing: border-box;
	z-index: 1;
	width: 100%;
	height: 100%;
	background: #f5f5f5;
}
.order{
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
.order h3{
	display: block;
	width: 100%;
	color: #fff;
	text-align: center;
	position: absolute;
	top: 0;
	left: 0;
}
.man-login{
	width: 100%;
	height: 320px;
	position: absolute;
	top: 144px;
	text-align: center;
}
.man-login .main img{
	width:60% ;
	margin: 0 auto;
}
.man-login h3{
	color: #666;
	font-size: 16px;
}
.man-login .login{
	display: block;
	width: 120px;
	height: 40px;
	line-height: 40px;
	text-align: center;
	color: #fff;
	background: #56d176;
	margin: 10px auto;
	
}
</style>