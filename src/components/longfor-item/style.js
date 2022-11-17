import styled from "styled-components";

export const ItemWrapper = styled.div`
flex-shrink: 0;
overflow: hidden;
.inner{
	position: relative;
	padding: 0 8px;
}
	.cover{
		img{
			width: 192px;
			height: 242px;
		}
	}
	.info{
		position: absolute;
		left: 50%;
		transform: translate(-50% , 0);
		bottom: 20px;
		text-align: center;
		font-size: 17px;
		color: #f5f5f5;
		.price{
			margin-top: 5px;
			font-size: 14px;
		}
	}
`