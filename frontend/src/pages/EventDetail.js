import { NavLink, json, useRouteLoaderData, redirect, defer, Await } from 'react-router-dom'
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList'
import { Suspense } from 'react'

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData('event')

  return (
    <div>
      <h1>Event Detail Page</h1>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={event}>{loadedEvent => <EventItem event={loadedEvent} />}</Await>
      </Suspense>
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <Await resolve={events}>{loadedEvents => <EventsList events={loadedEvents} />}</Await>
      </Suspense>
      <NavLink to="..">Back to Events</NavLink>
    </div>
  )
}

export default EventDetailPage

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id)
  if (!response.ok) {
    throw json(
      { message: 'Something went wrong', title: 'Error while deleting' },
      { status: response.status }
    )
  } else {
    const data = await response.json()
    return data.event
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events')
  if (!response.ok) {
    throw json(
      { message: 'Could not load events.', title: 'Something went wrong...' },
      { status: 500 }
    )
  } else {
    const data = await response.json()
    return data.events
  }
}

export const loader = async ({ request, params }) => {
  return defer({
    event: await loadEvent(params.id),
    events: loadEvents()
  })
}

export const action = async ({ request, params }) => {
  const response = await fetch('http://localhost:8080/events/' + params.id, {
    method: request.method
  })
  if (!response.ok) {
    throw json(
      { message: 'Something went wrong', title: 'Error while deleting' },
      { status: response.status }
    )
  }
  return redirect('/events')
}
