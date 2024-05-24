import { nanoid } from 'nanoid'
import icons from './images'
import CharBox from './CharBox'

//TODO: Create styling for the large container
//TODO: Get endpoint setup for backend api to get usage data
function LargeContainer() {

  return (
    <div>
      {Object.values(icons).map((image: string) => (
        <CharBox key={nanoid()} src={image} usage='100%'/>
      ))}
    </div>
  )
}

export default LargeContainer
