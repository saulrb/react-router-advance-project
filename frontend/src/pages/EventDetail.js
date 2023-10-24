import { NavLink, useParams } from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetailPage = () => {
  const params = useParams()

  return (
    <div>
      <h1>Event Detail Page</h1>
      <p>{params.id}</p>
      {/* <EventItem /> */}
      <NavLink to="..">Back to Events</NavLink>
    </div>
  )
}

export default EventDetailPage
