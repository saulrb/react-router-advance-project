//import { useEffect, useState } from 'react'
//import useHttp from '../hooks/use-http'
import EventsList from '../components/EventsList'
import { useLoaderData, json, defer, Await } from 'react-router-dom'
import { Suspense } from 'react'
const EventPage = () => {
  // const { isLoading, error, sendRequest: fetchEvents } = useHttp()
  // const [loadedEvents, setLoadedEvents] = useState([])

  // useEffect(() => {
  //   const copyEvents = eventsArray => {
  //     setLoadedEvents(eventsArray.events)
  //   }

  //   fetchEvents(
  //     {
  //       url: 'http://localhost:8080/events'
  //     },
  //     copyEvents
  //   )
  // }, [fetchEvents])
  const { events } = useLoaderData()
  // if (data.isError) {
  //   return <p>{data.message}</p>
  // }
  // return (
  //   <div>
  //     <h1>Event Page</h1>
  //     <EventsList events={data} />
  //   </div>
  // )
  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>{loadedEvents => <EventsList events={loadedEvents} />}</Await>
    </Suspense>
  )
}

export default EventPage

async function loader() {
  const response = await fetch('http://localhost:8080/events')
  if (!response.ok) {
    // throw new Response(
    //   JSON.stringify({ message: 'Could not load events.', title: 'Data not available' }),
    //   { status: response.status }
    // )
    throw json(
      { message: 'Could not load events.', title: 'Something went wrong...' },
      { status: 500 }
    )
  } else {
    const data = await response.json()
    return data.events
  }
}
export function getEvents() {
  return defer({ events: loader() })
}
