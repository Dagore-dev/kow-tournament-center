import { useState, useEffect } from 'react'

import getPlayers from '../services/getplayers'
import PlayersInfo from '../components/PlayersInfo'

export default function KowDashboard () {
  const [players, setPlayers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const data = getPlayers()

    data.then(res => {
      setPlayers(res)
      setLoading(false)
    })
  }, [])

  return isLoading
    ? <h2>Cargando...</h2>
    : <PlayersInfo players={players} />
}
