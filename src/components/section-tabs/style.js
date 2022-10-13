import styled from "styled-components";

export const TabWrapper = styled.div`
	
	.item {
		box-sizing: border-box;
		flex-basis: 120px;
		flex-shrink: 0;
		padding: 14px 16px;
		margin-left: 16px;
		border-radius: 4px;
		font-size: 17px;
		text-align: center;
		border: 0.5px solid #D8D8D8;
		white-space: nowrap;
		cursor: pointer;
		${props => props.theme.mixin.boxShadow}
		&.active{
			background-color: ${props => props.theme.color.secondaryColor};
			color: #fff;
		}
	}
`