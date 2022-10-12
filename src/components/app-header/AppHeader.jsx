import React, { memo } from 'react'
import HeaderCenter from './c-cpns/header-center/HeaderCenter.jsx'
import HeaderLeft from './c-cpns/header-left/HeaderLeft.jsx'
import HeaderRight from './c-cpns/header-right/HeaderRight.jsx'
import { HeaderWrapper } from './style.js'

const AppHeader = memo(() => {
	return (
		<HeaderWrapper>
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</HeaderWrapper>
	)
})

export default AppHeader