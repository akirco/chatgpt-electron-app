import Button from '@renderer/components/button'
import FlexBox from '@renderer/layout/flexbox'
import { Link } from 'react-router-dom'
function Landing({ toggleTheme }: { toggleTheme: () => void }) {
  return (
    <FlexBox>
      <Link to={'/space'}></Link>
      <Button onClick={toggleTheme} text="Toggle" />
    </FlexBox>
  )
}

export default Landing
