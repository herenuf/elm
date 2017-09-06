<template>
<div>
	<ul class="seller-list">
		<li v-for="item in data" class="border-top" id="list" @click="btnDetails(item)">
			<div class="list-img">
				<img :src="item.imgPath | imgFilter" />
			</div>
			<div class="text">
				<h3>{{item.name}}</h3>
				<li>
					<span class="rating"><span data-score="4" id="read-only"></span>{{item.rating}}</span>
					<span>月售{{item.orderNum}}单</span>
				</li>
				<li>
					<span>￥{{item.minimun}}起送</span>
					/
					<span>配送费￥{{item.delivery}}</span>
					<span class="distance">
						<span>{{item.distance}}m</span>/
						<span class="blue">{{item.time}}分钟</span>
					</span>
				</li>
				<ul class="activity">
					<div class="activebtn" @click.stop="show(item)">
						<span>{{item.length}}个活动</span>
					</div>
					<ul>
						<li v-for="val in item.show">	
							<span :style="{background:'#'+val.icon_color}"><span style="color: #fff;">{{val.icon_name}}</span></span>
							<span>{{val.description}}</span>
						</li>
					</ul>
					<ul v-if="item.isShow">
						<li v-for="val1 in item.hide">
							<span :style="{background:'#'+val1.icon_color}"><span style="color: #fff;">{{val1.icon_name}}</span></span>
							<span>{{val1.description}}</span>
						</li>
					</ul>
				</ul>
			</div>
		</li>
	</ul>
</div>

</template>

<script>

export default{
	props:{
		data:Array
	},
	updated(){
//		console.log($.fn)
//		console.log(this.data);
		var a = this.data[0].rating;
		$.fn.raty.defaults.path = 'static/img/images';
//		console.log(123)
		$(function(){
				$('#read-only').raty({
					readOnly: false,
				  	score:a,
			});
		})
	},
	methods:{
		btnDetails(item){
			this.$router.push('/home/detail/'+item.id)
		},
		show(item){
			item.isShow=!item.isShow;
		}
	}
}

</script>

<style>
#list{
	display: flex;
	font-size: 12px;
	font-weight: 300;
	color: #666;
}
.list-img{
	width: 60px;
	height: 60px;
	padding-top: 10px;
	padding-left: 10px;
	padding-right:10px;
}
.list-img img{
	width: 100%;
	height: 100%;
}	
.text{
	/*padding-left: 10px;*/
	padding-top: 10px;
	padding-right: 10px;
}
.text>li{
	width: 280px;
	line-height: 22px;	
}
.text h3{
	color: #000000;
	font-size: 16px;
}
.text .distance{
	margin-left:54px;
	float: right;
}
.text .blue{
	color: #0085FF;
}
.activity{
	width: 280px;
	padding-top: 5px;
	color: #939393;
	font-size: 12px;
}
.item{
	border-bottom: 1px solid #ddd;
	position: relative;
}
.item h1{
	font-size: 14px;
	line-height: 20px;
}
.item button{
	position: absolute;
	top: 5px;
	right: 5px;
}
.item .item-activity span{
	display: block;
	line-height: 20px;
	border-bottom: 1px solid #ddd;
}
#read-only{
	float: left;
}
#read-only img{
	float: left;
	padding-top: 4px;
	width: 12px;
}
.activebtn{
	float: right;
}
.activity>ul>li{
	margin-bottom: 5px;
}
</style>