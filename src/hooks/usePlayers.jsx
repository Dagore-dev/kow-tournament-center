import { useState, useEffect } from 'react'
import getPlayers from '../services/getplayers'

export default function usePlayers () {
  const [players, setPlayers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const data = getPlayers()

    data.then(res => {
      setPlayers(res)
      setLoading(false)
    })
  }, [])

  return [isLoading, players]
}
