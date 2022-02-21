import { FunctionComponent } from 'react'
import { useParams } from 'react-router-dom'
import topImage from '../../img/image1.jpg'

interface RoomPageProps {}

const RoomPage: FunctionComponent<RoomPageProps> = () => {
  const params = useParams()
  const name = params.room

  return (
    <div className="flex flex-col">
      <div className="text-2xl">{name}</div>
      <img src={topImage} className="object-fill rounded-xl" />
    </div>
  )
}

export default RoomPage
