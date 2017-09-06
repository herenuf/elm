<template>
  <div id="app">
  	
   		<router-view></router-view>
   		
   		<nav class="tabs">
   			<router-link  v-for="tab in tabsData" :to="tab.path">
   				<span class="iconfont" :class="tab.icon"></span>
   				<em>{{tab.title}}</em>
   			</router-link>
   		</nav>
   		
  </div>
</template>

<script>
	export default{
		data(){
			return{
				tabsData:[
					{title:'外卖',path:'/home',icon:'icon-eleme'},
					{title:'发现',path:'/discover',icon:'icon-discover'},
					{title:'订单',path:'/order',icon:'icon-order'},
					{title:'我的',path:'/me',icon:'icon-me'}				
				]
			}
		}
	}

</script>

<style>
#app{
	width: 100%;
	height: 100%;
}
#app .page{
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	bottom: 50px;
	z-index: 1;
}
#app>.tabs{
	width: 100%;
	height: 49px;
	position: absolute;
	left: 0;
	bottom: 0;
	display: flex;
}
#app>.tabs a{
	display: block;
	flex: 1;
}
/*a标签选中的状态*/
#app>.tabs a.router-link-active{
	color: #2395ff;
}


#app>.tabs a em{
	display: block;
	width: 100%;
	flex: 1;
	font-style: normal;
	height: 20px;
	line-height: 15px;
	text-align: center;
	font-size: 12px;
}
#app>.tabs a span{
	display: block;
	width: 100%;
	height: 29px;
	text-align: center;
	line-height: 30px;
	font-size: 20px;
}
#app>.tabs:before{
	content: "";
	display: block;
	width: 100%;
	height: 1px;
	position: absolute;
	top: -1px;
	left: 0;
	border-top: 1px solid #ddd;
	transform: scaleY(0.5);
}

</style>
