import EventsList from '../components/EventsList'

const DUMMY_EVENTS = [
  {
    id: 'e1',
    image: 'https://www.cervantes.to/images/photo/administration.jpg',
    title: 'Administration',
    date: '2021-05-12',
    description: 'Administration'
  },
  {
    id: 'e2',
    image: 'https://www.cervantes.to/images/photo/appartment.jpg',
    title: 'Appartment',
    date: '2021-05-12',
    description: 'Appartment'
  },
  {
    id: 'e3',
    image: 'https://www.cervantes.to/images/photo/beach.jpg',
    title: 'Beach meeting',
    date: '2021-05-12',
    description: 'Fun Meeting'
  },
  {
    id: 'e4',
    image: 'https://www.cervantes.to/images/photo/chicas_cocinero.jpg',
    title: 'Chicas Cocinero',
    date: '2021-05-12',
    description: 'Chicas Cocinero having fun at kitchen'
  }
]

const EventPage = () => {
  return (
    <div>
      <h1>Event Page</h1>
      <EventsList events={DUMMY_EVENTS} />
    </div>
  )
}

export default EventPage
