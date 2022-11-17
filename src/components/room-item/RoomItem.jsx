import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import { ItemWrapper } from './style'
import { Rating } from '@mui/material'
import { Carousel } from 'antd';
import IconArrowLeft from '../../assets/svg/icon-arrow-left';
import IconArrowRight from '../../assets/svg/icon-arrow-right';
const RoomItem = memo((props) => {
	const { itemData, itemWidth = '25%' } = props
	const carouselRef = useRef()
	const leftClickHandle = () => {
		carouselRef.current.prev()
	}
	const rightClickHandle = () => {
		carouselRef.current.next()

	}
	return (
		<ItemWrapper itemWidth={itemWidth}>
			<div className="inner">
				{/* <div className="cover">
					<img src={itemData.picture_url} alt="" />
				</div> */}
				<div className="swiper">
					<div className="control">
						<div className="btn left" onClick={leftClickHandle}>
							<IconArrowLeft width='30' height='30' />
						</div>
						<div className="btn right" onClick={rightClickHandle}>
							<IconArrowRight width='30' height='30' />
						</div>
					</div>
					<Carousel dots={false} ref={carouselRef}>
						{
							itemData?.picture_urls?.map(item => {
								return (
									<div className="cover" key={item}>
										<img src={item} alt="" />
									</div>
								)

							})
						}
					</Carousel>
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