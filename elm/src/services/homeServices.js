//专门为home处理请求
import API from '../url-api'
import axios from 'axios'

//请求地址
function getAddressData(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.addressApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
//			console.log(response)
			resolve(response.data.name);
		})
		//请求失败
		.catch(function(error){
			console.log(error);
		});
	})		
}

//请求天气
function getWeatherData(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.weatherApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			resolve(response.data);
		})
		//请求失败
		.catch(function(error){
			console.log(error);
		});
	})		
}

//请求热搜词
function getHotWordsData(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.hotWordsApi}?longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
//			console.log(response);
			var newArr=response.data.map((item)=>{
				return item.word;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error);
		})
	})
	
}

//请求轮播图
function getHomeBannerData(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.categoryApi}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
//			console.log(response);
			var newArr = response.data[0].entries.map((item)=>{
				var newItem={};
				newItem.name=item.name;
				newItem.id=item.id;
				newItem.imgPath=item.image_hash;
				newItem.flag=item.business_flag;
				return newItem;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

//请求商家列表数据
function getHomeListData(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.homeListApi}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
//			console.log(response);
			var newArr = response.data.map((sellerItem)=>{
				var newItem={};
				newItem.id=sellerItem.id;
				newItem.name=sellerItem.name;
				newItem.imgPath=sellerItem.image_path;
				newItem.rating=sellerItem.rating;
				newItem.orderNum=sellerItem.recent_order_num;
				newItem.delivery=parseInt(sellerItem.float_delivery_fee);
				newItem.minimun=sellerItem.float_minimum_order_amount;
				newItem.time=sellerItem.order_lead_time;
				newItem.distance=sellerItem.distance;
//				newItem.activities=sellerItem.activities;
				
				newItem.length=sellerItem.activities.length;
				newItem.show=sellerItem.activities.splice(0,2);
				newItem.hide=sellerItem.activities.splice(0,);
				newItem.supports=sellerItem.supports;
				newItem.isShow=false;
				return newItem;
			})
//			console.log(newItem.length)
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//请求地址
function getSearchData(keyword, lg, lt){
	return new Promise((resolve,reject)=>{
		axios.get(API.addressSearchApi+'&keyword='+keyword)
		axios.get(`${API.addressSearchApi}&longitude=${lg}&latitude=${lt}&keyword=${keyword}`)
			.then((response)=>{
//				console.log(response);
				resolve(response.data);
			})
			.catch((error)=>{
				console.log(error);
			})
	})
	
}
//请求热门搜索
function getHotData(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.hotSearchApi}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			console.log(response);
			var newArr=response.data.map((item)=>{
				return item.word;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//请求商家详情1
//function getDetHeaData(lg,lt){
//	return new Promise((resolve,reject)=>{
//		axios.get(`${API.detailHeadApi}&longitude=${lg}&latitude=${lt}`)
//		.then((response)=>{
//			console.log(response.data);
//
//		})
//		.catch((error)=>{
//			console.log(error)
//		})
//	})
//}
function getDetHeaData(lg,lt,id){
	var extras ='?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification'
	return new Promise((resolve,reject)=>{
		axios.get(`${API.detailHeadApi}${id}${extras}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
//			console.log(response.data);
			resolve(response.data);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
//155170084?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification
//请求商家详情2
function getDetSellData(lg,lt,id){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.detailSellApi}${id}`)
		.then((response)=>{
//			console.log(response);
			var newArr = response.data.map((data)=>{
				var newItem={};
				newItem.description=data.description;
				newItem.foods=data.foods;
				newItem.name=data.name;
				newItem.img=data.icon_url;
				newItem.type=data.type;
				return newItem;
			})
			resolve(newArr);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}

export default{
	getAddressData,
	getWeatherData,
	getHotWordsData,
	getHomeBannerData,
	getHomeListData,
	getSearchData,
	getHotData,
	getDetHeaData,
	getDetSellData
}
