import myRequest from '../index'

export function getEntireRoomData(offset = 0, size = 20) {
	return myRequest.get({
		url: '/entire/list',
		params: {
			offset,
			size
		}
	})
}