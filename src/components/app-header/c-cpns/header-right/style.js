import styled from 'styled-components';


export const RightWrapper = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
.btns {
	display: flex;
	align-items: center;
	font-size: 14px;
	font-weight: 600;
	color: ${props => props.theme.textColor.primaryColor};
	span {
		padding: 12px 15px;
		height: 18px;
		width: 28px;
		text-align: center;
		line-height: 18px;
		border-radius: 25px;
		cursor: pointer;
		&:hover {
			background-color: #f5f5f5;
		}
	}
}
.profile {
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	position: relative;
	width: 77px;
	height: 42px;
	margin-right: 24px;
	border: 1px solid #DDDDDD;
	background-color: #fff;
	border-radius: 25px;
	cursor: pointer;
	${props => props.theme.mixin.boxShadow};
	.panel{
		position: absolute;
		right: 0;
		top: 54px;
		width: 240px;
		background-color: #fff;
		box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
		border-radius: 12px;
		.top, .buttom {
			padding: 10px 0;
			.item{
				padding: 0 15px;
				height: 40px;
				color: #666;
				line-height: 40px;
				&:hover {
					background-color: #f5f5f5;
				}
			}
		}
		.top{
			border-bottom: 1px solid #ddd;
		}
	}
}
`