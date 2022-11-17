import React, { memo, useEffect, useRef, useState } from 'react'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { ViewWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'

const ScrollView = memo((props) => {
	const [showLeft, setShowLeft] = useState(false) //左边按钮
	const [showRight, setShowRight] = useState(false) //右边边按钮
	const [posIndex, setPosIndex] = useState(0)
	const totalDistanceRef = useRef()
	//组件渲染完毕判断是否显示右侧按钮
	const scrollContentRef = useRef()
	useEffect(() => {
		const scrollWidth = scrollContentRef.current.scrollWidth //可滚动的宽度
		const clientWidth = scrollContentRef.current.clientWidth //本身占据的宽度
		const totalDistance = scrollWidth - clientWidth
		totalDistanceRef.current = totalDistance
		setShowRight(totalDistance > 0)
	}, [props.children])

	//控制滚动
	const controlClickHandle = (isLeft) => {
		let newIndex = 0
		if (isLeft) {
			newIndex = posIndex - 1
		} else {
			newIndex = posIndex + 1
		}
		const newEl = scrollContentRef.current.children[newIndex]
		const newElOffectleft = newEl.offsetLeft
		scrollContentRef.current.style.transform = `translate(-${newElOffectleft}px)`
		setPosIndex(newIndex)
		setShowRight(totalDistanceRef.current > newElOffectleft)
		setShowLeft(newElOffectleft > 0)
	}

	return (
		<ViewWrapper>
			{showLeft &&
				<div onClick={e => controlClickHandle(true)} className='icon left'>
					<IconArrowLeft />
				</div>
			}
			{showRight &&
				<div onClick={e => controlClickHandle(false)} className='icon right'>
					<IconArrowRight />
				</div>
			}
			<div className="scoll">
				<div className="content" ref={scrollContentRef}>
					{props.children}
				</div>
			</div>

		</ViewWrapper>
	)
})

export default ScrollView