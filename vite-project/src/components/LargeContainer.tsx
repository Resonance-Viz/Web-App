import { nanoid } from 'nanoid'
import icons from './images'
import CharBox from './CharBox'

//TODO: Create styling for the large container
function LargeContainer() {
  return (
    <div>
      {Object.values(icons).map((image: string) => (
        <CharBox key={nanoid()} src={image} />
      ))}
    </div>
  )
}

export default LargeContainer
