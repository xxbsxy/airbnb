import styled from "styled-components";

export const FilterWrapper = styled.div`
	height: 48px;
	border-bottom: 1px solid #eee;
	.filter{
		display: flex;
		align-items: center;
		height: 48px;
		.item{
			padding: 6px 12px;
			font-size: 14px;
			color: rgb(72, 72, 72);
			border-radius: 4px;
			border: 1px solid rgb(220, 224, 224);
			margin-left: 8px;
			cursor: pointer;
		}
		.active{
			background: rgb(0, 132, 137);
			border: 1px solid rgb(0, 132, 137);
			color: #fff;
		}
	}
`