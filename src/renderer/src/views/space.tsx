import LeftPanel from '@renderer/components/left'
import Main from '@renderer/components/main'
import Box from '@renderer/layout/box'

function Space() {
  return (
    <Box display="flex">
      <Box width={300} display="block">
        <LeftPanel />
      </Box>
      <Box flex="1" display="block">
        <Main />
      </Box>
    </Box>
  )
}

export default Space
