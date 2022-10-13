import styled from "styled-components";

export const FooterWrapper = styled.div`
	display: flex;
	.content{
		display: flex;
		align-items: center;
		&:hover{
			text-decoration: underline;
		}
		.text{
			margin-right: 6px;
			color: ${props => props.color};
			font-weight: 800;
			font-size: 17px;
		}
	}

`