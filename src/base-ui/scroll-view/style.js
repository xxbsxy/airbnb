import styled from "styled-components";

export const ViewWrapper = styled.div`
position: relative;
.scoll{
	overflow: hidden;
}
.content{
	display: flex;
	transition: all .3s ease;
	
}
.icon{
	position: absolute;
	z-index: 9;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 50%;
	transform: translate(0, -50%);
	height: 28px;
	width: 28px;
	background-color: #fff;
	border: 0.5px solid #D8D8D8;
	border-radius: 50%;
	box-shadow: 0 2px 2px rgba(0,0,0,0.2);
	cursor: pointer;
}
.left{
	left: -25px;
}
.right{
	right: -25px;
}

`