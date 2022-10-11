import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from './modules/home'
const store = configureStore({
	reducer: {
		home: HomeReducer
	}
})
export default store