import LeftPanel from '@renderer/components/leftpanel'
import Main from '@renderer/components/mainpanel'
import Box from '@renderer/layout/flexbox'

function Space() {
  return (
    <Box>
      <Box width="300px">
        <LeftPanel />
      </Box>
      <Box flex="1">
        <Main />
      </Box>
    </Box>
  )
}

export default Space
