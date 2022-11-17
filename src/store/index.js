import { configureStore } from '@reduxjs/toolkit'
import HomeReducer from './modules/home'
import EntireReducer from './modules/entire'

const store = configureStore({
	reducer: {
		home: HomeReducer,
		entire: EntireReducer
	}
})
export default store