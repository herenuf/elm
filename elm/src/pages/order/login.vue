<template>
<div class="page" id="login">
		<div class="header">
			<img src="../../../static/img/1.png" />
			<ul class="login-check">
				<li v-for="(val,key) in navData" :class="{'active':val==selectNav}" @click="navClick(val)">{{val}}</li>
			</ul>
		</div>
		<div class="form" v-if="selectNav=='短信验证'">
			<input type="text" placeholder="手机号" />
			<input type="text" placeholder="验证码" />
			<p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<span class="agreement">《用户服务协议》</span></p>
			<span class="text-login">登录</span>
		</div> 
		<div class="form" v-else="selectNav=='密码登录'">
			<input type="text" placeholder="手机号/邮箱/用户名" />
			<input type="password" placeholder="密码" />
			<span class="text-login">登录</span>
		</div>
		<p class="about-us">关于我们</p>
</div>	

</template>

<script>
export default{
	data(){
		return{
			navData:['短信验证','密码登录'],
			selectNav:'短信验证'
		}
	},
	methods:{
		navClick(index){
//			console.log(index)
			this.selectNav=index;
		}
	}
}
</script>

<style>
#login{
	z-index: 2;
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	background:#fff;
}
.header{
	width: 300px;
	height: 114px;
	margin: 25px auto;
	position: relative;
}
.header img{
	margin: 0 auto;
}
.login-check{
	width: 100%;
	position: absolute;
	bottom: 0;
	display: flex;
}
.login-check li{
	display: block;
	width: 58px;
	height: 22px;
	text-align: center;
	font-size: 14px;
	margin: 0 auto;
}
.form{
	width: 300px;
	height: 246px;
	margin: 0 auto;
}
.form input{
	width: 300px;
	height: 48px;
	border: 1px solid #ddd;
	margin-bottom: 15px;
	border-radius: 4px;
	text-indent: 10px;
	outline-color:dodgerblue;
}
.form p{
	font-size: 14px;
	color: #999;
}
.form p .agreement{
	color: #007AFF;
}
.text-login{
	display: block;
	width: 300px;
	height: 42px;
	line-height: 42px;
	background: #4cd964;
	text-align: center;
	color: #fff;
	margin: 20px auto;
	border-radius: 3px;
}
.about-us{
	text-align: center;
	font-size: 12px;
	color: #999;
}
.login-check li.active{
	color: #007AFF;
	width: 58px;
	border-bottom: 2px solid #007AFF;
}
</style>