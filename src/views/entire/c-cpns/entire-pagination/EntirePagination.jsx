import { Pagination } from '@mui/material'
import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAction } from '@/store/modules/entire/actionCreators'
import { PaginationWrapper } from './style'
import { fetchRoomListAction } from '@/store/modules/entire/actionCreators'

const EntirePagination = memo(() => {
	const dispatch = useDispatch()
	const { totalCount } = useSelector(state => ({

		totalCount: state.entire.totalCount
	}))
	const pageClickHandle = (e, value) => {
		dispatch(changeCurrentPageAction(value))
		dispatch(fetchRoomListAction())
		window.scrollTo(0, 0)
	}
	return (
		<PaginationWrapper>
			<Pagination count={totalCount / 20} size="large" onChange={pageClickHandle} />
		</PaginationWrapper>
	)
})

export default EntirePagination