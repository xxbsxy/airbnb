import React, { memo, useEffect, useState } from 'react'
import IconGlobal from '@/assets/svg/icon-global'

import { RightWrapper } from './style'
import IconProfileMenu from '@/assets/svg/icon-profile-menu'
import IconProfileAvatar from '@/assets/svg/icon-profile-avatar'

const HeaderRight = memo(() => {
	const [showPanel, setShowPanel] = useState(false)
	useEffect(() => {
		function windowClickHnadle() {
			setShowPanel(false)
		}
		window.addEventListener('click', windowClickHnadle, true)
		return () => {
			window.removeEventListener('click', windowClickHnadle, true)
		}
	}, [])
	const profileClickHandle = () => {
		setShowPanel(true)
	}
	return (
		<RightWrapper>
			<div className="btns">
				<span>登录</span>
				<span>注册</span>
				<span className='global'>
					<IconGlobal />
				</span>
				<div className="profile" onClick={profileClickHandle}>
					<IconProfileMenu />
					<IconProfileAvatar />
					{showPanel &&
						(
							<div className="panel">
								<div className="top">
									<div className="item register">注册</div>
									<div className="item login">登录</div>
								</div>
								<div className="buttom">
									<div className="item">出租房源</div>
									<div className="item">开展体验</div>
									<div className="item">帮助</div>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</RightWrapper>
	)
})

export default HeaderRight