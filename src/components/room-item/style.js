import styled from 'styled-components'

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  width: 25%;
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
