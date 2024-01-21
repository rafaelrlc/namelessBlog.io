import { useState, useEffect } from 'react'

const useGetData = (url: string) => {
  // url example : /post/${slug} or /post
  const [data, setData] = useState(undefined)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api${url}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [url])

  return { data, error }
}

export default useGetData
