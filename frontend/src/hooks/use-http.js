import { useState, useCallback } from 'react'

const errorsMap = new Map()
errorsMap.set(401, 'Unauthorized')
errorsMap.set(403, 'Forbidden')
errorsMap.set(404, 'Not Found')
errorsMap.set(405, 'Method Not Allowed')
errorsMap.set(500, 'Internal Server Error')

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
      })
      if (response.status !== 200) {
        throw new Error(errorsMap.get(response.status))
      }
      const data = await response.json()

      applyData(data)
    } catch (error) {
      setError(error.message || 'Something went wrong!')
    }
    setIsLoading(false)
  }, [])
  return {
    isLoading,
    error: error,
    sendRequest
  }
}

export default useHttp
