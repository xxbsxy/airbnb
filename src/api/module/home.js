import myRequest from '../index'

export function getHomeGoodPriceData() {
	return myRequest.get({
		url: '/home/goodprice'
	})
}