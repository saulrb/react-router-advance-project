import EventForm from '../components/EventForm'
const NewEventPage = () => {
  return (
    <div>
      <h1>Create an event</h1>
      <EventForm method={'post'} />
    </div>
  )
}

export default NewEventPage
