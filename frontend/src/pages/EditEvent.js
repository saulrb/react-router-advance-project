import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router'
const EditEventPage = () => {
  const data = useRouteLoaderData('event')
  return (
    <div>
      <h1>Edit Event Page</h1>
      <EventForm event={data.event} method={'patch'} />
    </div>
  )
}

export default EditEventPage
