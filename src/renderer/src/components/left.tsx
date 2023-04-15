import styled from 'styled-components'
const SideBox = styled.div`
  &.leftContainer {
    width: 100%;
    height: calc(100% - 80px);
    padding: 10px;
    user-select: none;
    text-align: center;
    display: flex;
    flex-direction: column;
  }
  &.leftLogo {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
    font-weight: 900;
    -webkit-app-region: drag;
    user-select: none;
  }
  &.chatContainer {
    display: grid;
    flex: 1;
    overflow-y: auto;
    padding: 15px;
  }
  &.chatOperateRegion {
    display: flex;
    justify-content: space-between;
    padding: 15px;
  }
`

function LeftPanel() {
  return (
    <SideBox className={`leftContainer`}>
      <SideBox className={`leftLogo`}></SideBox>
      <SideBox className={`chatContainer`}></SideBox>
      <SideBox className={`chatOperateRegion`}></SideBox>
    </SideBox>
  )
}
export default LeftPanel
