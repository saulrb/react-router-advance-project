import MainNavigation from '../components/MainNavigation'
import PageContent from '../components/PageContent'
import { useRouteError } from 'react-router'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  let title = error.data ? error.data.title || 'An error occurred!' : 'An error occurred!'
  let message = error.data ? error.data.message || 'Something went wrong.' : 'Something went wrong.'
  return (
    <>
      <MainNavigation />
      <PageContent title={title}> {message} </PageContent>
    </>
  )
}

export default ErrorPage
