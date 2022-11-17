import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item/RoomItem'
import { RoomWrapper } from './style'

const EntireRoom = memo(() => {

	const { roomList, totalCount, isLoading } = useSelector(state => ({
		roomList: state.entire.roomList,
		totalCount: state.entire.totalCount,
		isLoading: state.entire.isLoading
	}), shallowEqual)
	return (
		<RoomWrapper>
			<div className="title">共{totalCount}多处住所</div>
			<div className="list">
				{
					roomList.map(item => {
						return (
							<RoomItem itemData={item} itemWidth='20%' key={item._id} />
						)
					})
				}
				{isLoading && <div className="room-cover"></div>}
			</div>

		</RoomWrapper>
	)
})

export default EntireRoom