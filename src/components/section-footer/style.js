import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: flex;
	margin-top: 10px;
  .content {
    display: flex;
    align-items: center;
    .text {
      margin-right: 6px;
      color: ${(props) => props.color};
      font-weight: 800;
      font-size: 17px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
