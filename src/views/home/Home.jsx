import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner/HomeBanner'
import { HomeWrapper } from './style'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRoom from '../../components/section-room/SectionRoom'

const Home = memo(() => {
	const { goodPriceInfo } = useSelector((state) => ({
		goodPriceInfo: state.home.goodPriceInfo
	}), shallowEqual)
	// 派发网络请求
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchHomeDataAction())
	}, [dispatch])
	return (
		<HomeWrapper>
			<HomeBanner />
			<div className="content">
				<SectionHeader title={goodPriceInfo.title} />
				<SectionRoom roomList={goodPriceInfo.list} />
			</div>
		</HomeWrapper>
	)
})

export default Home