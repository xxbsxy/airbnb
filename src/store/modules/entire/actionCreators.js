import { getEntireRoomData } from '@/api/module/entire'
import * as  actionTypes from './constants'

export const changeCurrentPageAction = (currentPage) => ({
	type: actionTypes.CHANGE_CURRENT_PAGE,
	currentPage
})

export const changeRoomListAction = (roomList) => ({
	type: actionTypes.CHANGE_ROOM_LIST,
	roomList
})

export const changeTotalCountAction = (totalCount) => ({
	type: actionTypes.CHANGE_TOTAL_COUNT,
	totalCount
})

export const changeIsLoadingtAction = (isLoading) => ({
	type: actionTypes.CHANGE_IS_LOADING,
	isLoading
})


export const fetchRoomListAction = () => {
	return async (dispatch, getState) => {
		dispatch(changeIsLoadingtAction(true))
		const currentPage = getState().entire.currentPage
		const res = await getEntireRoomData(currentPage * 20)
		dispatch(changeIsLoadingtAction(false))
		const roomList = res.list
		const totalCount = res.totalCount
		dispatch(changeRoomListAction(roomList))
		dispatch(changeTotalCountAction(totalCount))
	}
}