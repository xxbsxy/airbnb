import React, { memo } from 'react'
import { FilterWrapper } from './style'
import filterData from '@/assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo(() => {
	const itemClickHandle = (e) => {
		if (!e.target.classList.contains('active')) {
			e.target.classList.add('active')
		} else {
			e.target.classList.remove('active')
		}
	}
	return (
		<FilterWrapper>
			<div className="filter">
				{
					filterData.map((item, index) => {
						return (
							<div
								key={item}
								onClick={e => itemClickHandle(e)}
								className={classNames('item')}
							>
								{item}
							</div>
						)
					})
				}
			</div>
		</FilterWrapper>
	)
})

export default EntireFilter