import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header/SectionHeader'
import { LongForWrapper } from './style'
import LongForItem from '@/components/longfor-item/LongForItem'
import ScrollView from '../../../../base-ui/scroll-view/ScrollView'

const HomeLongFor = memo((props) => {
	const { infoData } = props
	return (
		<LongForWrapper>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<div className="longfor-list">
				<ScrollView>
					{
						infoData.list.map(item => {
							return <LongForItem itemData={item} key={item.city} />
						})
					}
				</ScrollView>
			</div>
		</LongForWrapper>
	)
})

HomeLongFor.propTypes = {
	infoData: PropTypes.object
}

export default HomeLongFor