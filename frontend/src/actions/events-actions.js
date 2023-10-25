import { json, redirect } from 'react-router-dom'
export const action = async ({ request, params }) => {
  const method = request.method
  const data = await request.formData()
  const eventData = {
    title: data.get('title'),
    description: data.get('description'),
    image: data.get('image'),
    date: data.get('date')
  }

  let url = 'http://localhost:8080/events'

  if (method.toLowerCase() === 'patch') {
    url += '/' + params.id
  }

  const response = await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })

  if (response.status === 422) {
    return response
  }

  if (!response.ok) {
    throw json(
      { message: 'Something went wrong', title: 'Error while submitting' },
      { status: response.status }
    )
  }
  return redirect('/events')
}
