import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getHomeGoodPriceData, getHomeHighScoreData, getHomeDiscountData, getHomeHotRecommendData } from '@/api/module/home'

export const fetchHomeDataAction = createAsyncThunk('goodPriceData', (payload, { dispatch }) => {
	getHomeGoodPriceData().then(res => {
		dispatch(changeGoodPriceInfoAction(res))
	})
	getHomeHighScoreData().then(res => {
		dispatch(changeHighScoreInfoAction(res))
	})
	getHomeDiscountData().then(res => {
		dispatch(changeDiscountInfoAction(res))
	})
	getHomeHotRecommendData().then(res => {
		dispatch(changeRecommendInfoAction(res))
	})
})

const homeSlice = createSlice({
	name: 'home',
	initialState: {
		goodPriceInfo: {},
		highScoreInfo: {},
		discountInfo: {},
		recommendInfo: {}
	},
	reducers: {
		changeGoodPriceInfoAction(state, { payload }) {
			state.goodPriceInfo = payload
		},
		changeHighScoreInfoAction(state, { payload }) {
			state.highScoreInfo = payload
		},
		changeDiscountInfoAction(state, { payload }) {
			state.discountInfo = payload
		},
		changeRecommendInfoAction(state, { payload }) {
			state.recommendInfo = payload
		}
	}
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction, changeRecommendInfoAction } = homeSlice.actions

export default homeSlice.reducer