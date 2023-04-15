import IconButton from '@renderer/components/iconbutton'
import { Settings } from '@renderer/components/icons'
import Box from '@renderer/layout/box'

interface LandingProps {
  toggleTheme?: () => void
}

function Landing({ toggleTheme }: LandingProps) {
  return (
    <Box width={'100%'} height={'100%'} display="flex">
      <Box width={125} padding={'md'}>
        <Box
          borderRight={'$1'}
          borderRadius={'lg'}
          boxShadow={'large'}
          display={'flex'}
          height={'fit'}
          justifyContent={'center'}
        >
          <IconButton
            icon={<Settings width={'42px'} height={'42px'} />}
            bg={'bg2'}
            h={'50px'}
            w={'50px'}
            text="dark"
            onClick={toggleTheme}
          />
        </Box>
      </Box>
      <Box flex={1} display="flex">
        <Box display={'flex'} height={'fit'} width={'fit'} flexDirection={'column'}>
          <Box display={'flex'} height={150} width={'fit'}></Box>
          <Box display={'flex'} height={60} width={'fit'} bg="bg2" border="none"></Box>
          <Box flex={1}></Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Landing
