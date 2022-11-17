import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'
import EntireFilter from './c-cpns/entire-filter/EntireFilter'
import EntirePagination from './c-cpns/entire-pagination/EntirePagination'
import EntireRoom from './c-cpns/entire-room/EntireRoom'
import { EntireWrapper } from './style'

const Entire = memo(() => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchRoomListAction())
	}, [dispatch])
	return (
		<EntireWrapper>
			<EntireFilter />
			<EntireRoom />
			<EntirePagination />
		</EntireWrapper>
	)
})

export default Entire