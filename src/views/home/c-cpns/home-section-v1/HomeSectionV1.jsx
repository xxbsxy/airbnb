import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRoom from '@/components/section-room/SectionRoom'
import { SectionV1Wrapper } from './style'
import SectionFooter from '@/components/section-footer/SectionFooter'

const HomeSectionV1 = memo((props) => {
	const { infoData } = props
	return (
		<SectionV1Wrapper>
			<SectionHeader title={infoData.title} />
			<SectionRoom roomList={infoData.list} />
			<SectionFooter />
		</SectionV1Wrapper>
	)
})

HomeSectionV1.propTypes = {
	infoData: PropTypes.object
}

export default HomeSectionV1