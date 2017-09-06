<template>
<div class="swiper-container banner">
    <div class="swiper-wrapper">
        <ul class="swiper-slide" v-for="page in pageData">
        	<li v-for="item in page" class="item1" @click="toSeachDetail(item.name)">
        		<img :src="item.imgPath | imgFilter" />
        		<span>{{item.name}}</span>
        	</li>
        </ul>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>

</template>

<script>
export default{
	props:{
		data:Array,
		page:Array

	},
	computed:{
		pageData(){
			//将外部数据拷贝为自身的数据(深拷贝)
			var bannerData = Array.from(this.data);
			var arr=[];
			while(bannerData.length>0){
				arr.push(bannerData.splice(0,8))
			}
			return arr;
		}
	},
	mounted(){
		//创建swiper
		var bannerSwiper = new Swiper('#home .banner', {
			loop: true,
			pagination: '.swiper-pagination',
//			autoplay : 5000,
//			autoplayDisableOnInteraction:false
		});
		
		this.$watch('pageData', function(){
			bannerSwiper.update();
		})
		
	},
	methods:{
		toSeachDetail(item){
			console.log('点击了')
			console.log(item)
			this.$router.push('/bannerSellect/banner/'+item)
		}
	}
	
	
}
</script>

<style>
.banner{
	width: 100%;
	height: 146px;
}
.banner ul{
	display: flex;
	flex-wrap: wrap;
	height: 132px;
}
.banner .item1{
	margin-top: 10px;
	width: 25%;
	height: 56px;
	flex-shrink: 0;
}
.banner .item1 img{
	width: 50%;
	margin: 0 auto;
}
.banner .item1 span{
	display: block;
	height: 16px;
	text-align: center;
	color: #666;
	font-size: 12px;
	line-height: 16px;
}
.banner .swiper-pagination-bullets{
	bottom: 2px;
}
.swiper-pagination-bullet {
    width: 4px;
    height: 4px;
}
.swiper-pagination-bullet-active {
    background: #666;
}
#home ul{
	background: #fff;
}	
.swiper-container{
	background: #fff;
}	
</style>