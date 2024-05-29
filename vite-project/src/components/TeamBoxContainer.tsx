import { nanoid } from 'nanoid'
import icons from './images'
import TeamBox from './TeamBox'

//TODO: Create styling for the large container
//TODO: Get endpoint setup for backend api to get usage data
function TeamBoxContainer() {

  return (
    <div>
      {Object.values(icons).map((data: object) => (
        <TeamBox key={nanoid()} data={data}/>
      ))}
    </div>
  )
}

export default TeamBoxContainer
