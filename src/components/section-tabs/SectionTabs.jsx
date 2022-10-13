import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import ScrollView from '@/base-ui/scroll-view/ScrollView'
import { TabWrapper } from './style'

const SectionTabs = memo((props) => {
	const { tabNames, tabClick } = props
	const [currentIndex, setCurrentIndex] = useState(0)
	const itemClickHandle = (item, index) => {
		setCurrentIndex(index)
		tabClick(item)
	}
	return (
		<TabWrapper>
			<ScrollView>
				{
					tabNames?.map((item, index) => {
						return (
							<div key={item}
								className={classNames('item', { active: currentIndex === index })}
								onClick={e => itemClickHandle(item, index)}
							>
								{item}
							</div>
						)
					})
				}
			</ScrollView>

		</TabWrapper>
	)
})

SectionTabs.propTypes = {
	tabNames: PropTypes.array
}

export default SectionTabs