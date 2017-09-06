
//const host = 'https://mainsite-restapi.ele.me';

const imgHost = 'http://fuss10.elemecdn.com/';

const addressApi='/bgs/poi/reverse_geo_coding';

const weatherApi = '/bgs/weather/current';

const hotWordsApi = '/shopping/v3/hot_search_words';

const categoryApi = '/shopping/v2/entries?templates[]=main_template';

const homeListApi = '/shopping/restaurants?offset=0&limit=20&extras[]=activities&terminal=h5';

const addressSearchApi = '/bgs/poi/search_poi_nearby?offset=0&limit=10';

//const discoverApi = 'https://mainsite-restapi.ele.me/member/v1/discover?platform=1&block_index=0&latitude=22.6290872&longitude=113.8320491'
const discoverApi = '/member/v1/discover?platform=1&block_index=0'

//搜索
var  hotSearchApi='/shopping/v3/hot_search_words?geohash=ws100tymghs0'

//店铺
//var detailHeadApi='/shopping/restaurant/155170084?extras[]=activities&extras[]=albums&extras[]=license&extras[]=identification'
var detailHeadApi='/shopping/restaurant/'
//商品
var detailSellApi='/shopping/v2/menu?restaurant_id='
//评价
var commentApi='https://mainsite-restapi.ele.me/ugc/v2/restaurants/155170084/ratings/tags'

export default{
//	host,
	imgHost,
	addressApi,
	weatherApi,
	hotWordsApi,
	categoryApi,
	homeListApi,
	addressSearchApi,
	discoverApi,
	hotSearchApi,
	detailHeadApi,
	detailSellApi
}
