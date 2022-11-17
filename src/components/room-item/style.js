import styled from 'styled-components'

export const ItemWrapper = styled.div`
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;
  .cover {
    position: relative;
    padding: 66.66% 8px 0;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 3px;
			cursor: pointer;
    }
  }
	.swiper{
		position: relative;
		color: #fff;
		cursor: pointer;
		&:hover .control{
			display: block;
		}
		.control{
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			display: none;
			.btn {
				display: flex;
				align-items: center;
				justify-content: center;
				width: 60px;
			}
			.left{
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				background-image: linear-gradient(to right, rgba(0,0,0,0.15), rgba(0,0,0,0));
			}
			.right{
				position: absolute;
				right: 0;
				top: 0;
				bottom: 0;
				background-image: linear-gradient(to left, rgba(0,0,0,0.15), rgba(0,0,0,0));
			}
		}
	}
  .desc {
    margin: 10px 0 5px;
    font-size: 14px;
    font-weight: 700;
    color: #39576a;
		cursor: pointer;
  }
  .name {
    font-size: 16px;
    font-weight: 800;
		color: rgb(72, 72, 72);
		cursor: pointer;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
	.price{
		margin-top: 6px;
		font-size: 14px;
		color: rgb(72, 72, 72)
	}
	.count{
		position: relative;
		bottom: 1px;
		left: 2px;
		font-size: 12px;
		color: #484848;
	}
`
