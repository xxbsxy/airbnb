import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner/HomeBanner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1/HomeSectionV1'
import HomeSectionV2 from './c-cpns/home-section-v2/HomeSectionV2'
import { isEmptyObject } from '@/utils'

const Home = memo(() => {
	const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo } = useSelector((state) => ({
		goodPriceInfo: state.home.goodPriceInfo,
		highScoreInfo: state.home.highScoreInfo,
		discountInfo: state.home.discountInfo,
		recommendInfo: state.home.recommendInfo
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
				{isEmptyObject(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
				{isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}
				{isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
				{isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
			</div>
		</HomeWrapper>
	)
})

export default Home