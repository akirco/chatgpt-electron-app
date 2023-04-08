import styled from 'styled-components'

const MBox = styled.div`
  width: 100%;
  height: 100%;
  &.chatTopic {
    position: fixed;
    top: 0;
    width: calc(100% - 300px);
    height: 80px;
    z-index: -1;
    display: flex;
    border-bottom: var(--titlebar-bt);
    background-color: var(--white-0);
    box-shadow: var(--border-shadow);
  }
  &.topicInfo {
    flex: 1;
    user-select: none;
    -webkit-app-region: drag;
  }
  &.topicExportNoUse {
    width: 150px;
    height: inherit;
    padding-top: 35px;
  }
  &.drag {
    width: 150px;
    height: 45px;
    user-select: none;
    -webkit-app-region: drag;
  }
  &.chatMessage {
    padding-top: 45px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`

function Main() {
  return (
    <MBox>
      <MBox className={`chatTopic`}>
        <MBox className={`topicInfo`}></MBox>
        <MBox className={`topicExportNoUse`}>
          <MBox className={`drag`}></MBox>
        </MBox>
      </MBox>
      <MBox className={`chatMessage`}></MBox>
    </MBox>
  )
}

export default Main
