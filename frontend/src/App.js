import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/Error'
import HomePage from './pages/Home'
import EventPage, { getEvents } from './pages/Event'
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction
} from './pages/EventDetail'
import NewEventPage from './pages/NewEvent'
import EditEventPage from './pages/EditEvent'
import EventsRoot from './pages/EventsRoot'
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter'
import { action as persistingAction } from './actions/events-actions'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          { path: '', element: <EventPage />, loader: getEvents },
          {
            path: ':id',
            id: 'event',
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: 'edit', element: <EditEventPage />, action: persistingAction }
            ]
          },
          { path: 'new', element: <NewEventPage />, action: persistingAction }
        ]
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
