import styled from 'styled-components'


export const CenterWrapper = styled.div`
.search{
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding-left: 20px;
  padding-right: 10px;
	font-weight: 600;
	width: 300px;
	height: 46px;
	border: 1px solid #DDDDDD;
	border-radius: 25px;
	cursor: pointer;
	${props => props.theme.mixin.boxShadow}
	.icon{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 32px;
		height: 32px;
		color: #fff;
		background-color: ${props => props.theme.color.primaryColor};
		border-radius: 50%;
	}
}
`