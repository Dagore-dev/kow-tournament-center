import { useState, useEffect } from 'react'
import getCount from '../services/getCount'

export default function useCount () {
  const [count, setCount] = useState(0)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const data = getCount()

    data.then(res => {
      setCount(res)
      setLoading(false)
    })
  }, [])

  return [isLoading, count]
}
