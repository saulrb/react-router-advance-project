import { useEffect } from 'react'
import classes from './NewsletterSignup.module.css'
import { useFetcher } from 'react-router-dom'

function NewsletterSignup() {
  const fetcher = useFetcher()
  const { state, data } = fetcher

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      alert(data.message)
    }
  }, [data, state])

  return (
    <fetcher.Form method="post" action="/newsletter" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  )
}

export default NewsletterSignup
