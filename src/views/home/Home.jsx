import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { fetchHomeDataAction } from '@/store/modules/home'
import HomeBanner from './c-cpns/home-banner/HomeBanner'
import { HomeWrapper } from './style'
import HomeSectionV1 from './c-cpns/home-section-v1/HomeSectionV1'
import HomeSectionV2 from './c-cpns/home-section-v2/HomeSectionV2'
import { isEmptyObject } from '@/utils'
import HomeLongFor from './c-cpns/home-longfor/HomeLongFor'
import HomeSectionV3 from './c-cpns/home-section-v3/HomeSectionV3'

const Home = memo(() => {
	const { goodPriceInfo, highScoreInfo, discountInfo, recommendInfo, longForInfo, plusInfo } = useSelector((state) => ({
		goodPriceInfo: state.home.goodPriceInfo,
		highScoreInfo: state.home.highScoreInfo,
		discountInfo: state.home.discountInfo,
		recommendInfo: state.home.recommendInfo,
		longForInfo: state.home.longForInfo,
		plusInfo: state.home.plusInfo
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
				{isEmptyObject(longForInfo) && <HomeLongFor infoData={longForInfo} />}
				{isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
				{isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
				{isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
			</div>
		</HomeWrapper>
	)
})

export default Home