import PropTypes from 'prop-types'
import React, { memo, useCallback, useState } from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRoom from '@/components/section-room/SectionRoom'
import SectionTabs from '@/components/section-tabs/SectionTabs'
import SectionFooter from '@/components/section-footer/SectionFooter'
const HomeSectionV2 = memo((props) => {
	const { infoData } = props


	const tabNames = infoData.dest_address?.map(item => item.name)
	const initialName = Object.keys(infoData.dest_list)[0]
	//点击tabs切换数据
	const [name, setName] = useState(initialName)
	const tabClickHandle = useCallback((name) => {
		setName(name)
	}, [])
	return (
		<SectionV2Wrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
			<SectionRoom roomList={infoData.dest_list?.[name]} itemWidth='33.33%' />
			<SectionFooter name={name} />
		</SectionV2Wrapper>
	)
})

HomeSectionV2.propTypes = {
	infoData: PropTypes.object

}

export default HomeSectionV2