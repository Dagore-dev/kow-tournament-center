import { useState, useEffect } from 'react'

import PlayersInfo from '../components/PlayersInfo'
import getPlayers from '../services/getplayers'

export default function KowDashborad () {
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
