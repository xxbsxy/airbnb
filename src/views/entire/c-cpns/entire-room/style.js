import styled from 'styled-components'

export const RoomWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  .list {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;
  }
  .title {
    font-size: 22px;
    font-weight: 800;
    padding-left: 10px;
  }
   .room-cover {
    position: absolute;
		z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`
