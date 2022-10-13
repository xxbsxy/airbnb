import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
const RoomItem = memo((props) => {
	const { itemData, itemWidth = '25%' } = props
	return (
		<ItemWrapper itemWidth={itemWidth}>
			<div className="inner">
				<div className="cover">
					<img src={itemData.picture_url} alt="" />
				</div>
				<div className="desc">
					{itemData.verify_info.messages?.join(' · ')}
				</div>
				<div className="name">{itemData.name}</div>
				<div className="price">¥{itemData.price}/晚</div>
				<div className="buttom">
					<Rating
						value={itemData.star_rating ?? 5}
						readOnly
						sx={{ fontSize: '12px', color: '#008489' }}
						precision={0.1}
					/>
					<span className='count'>{itemData.reviews_count}</span>
				</div>

			</div>
		</ItemWrapper>
	)
})

RoomItem.propTypes = {
	itemData: PropTypes.object
}

export default RoomItem