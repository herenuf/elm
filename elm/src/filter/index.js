import Vue from 'vue'
import API from '../url-api'

Vue.filter('imgFilter',function(val){
//	console.log('过滤器调用了');
	if(val==null){
		return '';
	}
	var pex = val.endsWith('png')? '.png' : '.jpeg';
	return API.imgHost + val + pex;
})


