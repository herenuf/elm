//处理发现的请求
import API from '../url-api'
import axios from 'axios'


//请求地址
function getAddressData(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.addressApi}?longitude=${lg}&latitude=${lt}`)
		//请求成功
		.then((response)=>{
			console.log(response)
			resolve(response.data.name);
		})
		//请求失败
		.catch(function(error){
			console.log(error);
		});
	})		
}
//积分商城请求
function getDiscoverData(lg,lt){
	return new Promise((resolve,reject)=>{
		axios.get(`${API.discoverApi}&longitude=${lg}&latitude=${lt}`)
		.then((response)=>{
			console.log(response);
		})
		.catch((error)=>{
			console.log(error)
		})
	})
}
export default{
	getAddressData,
	getDiscoverData
}
