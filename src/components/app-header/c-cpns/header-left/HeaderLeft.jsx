import React, { memo } from 'react'
import IconLogo from '@/assets/svg/icon_logo'
import { LeftWrapper } from './style'
import { useNavigate } from 'react-router-dom'
const HeaderLeft = memo(() => {
	const navigate = useNavigate()
	const logoClick = () => {
		navigate('/home')
	}
	return (
		<LeftWrapper>
			<div className="logo" onClick={logoClick}>
				<IconLogo />
			</div>
		</LeftWrapper>
	)
})

export default HeaderLeft