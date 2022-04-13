import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'

import PlayersInfo from '../components/PlayersInfo'
import FormButton from '../components/FormButton'
import getPlayers from '../services/getplayers'
import recreateDB from '../services/recreateDB'

export default function KowDashborad () {
  const [players, setPlayers] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [, setLocation] = useLocation()

  useEffect(() => {
    const data = getPlayers()

    data.then(res => {
      setPlayers(res)
      setLoading(false)
    })
  }, [])

  async function handleClick () {
    const ok = window.confirm('¿Estás seguro de finalizar el torneo? Se eliminará toda la información.').valueOf()
    if (ok) {
      await recreateDB()
      console.log('Deleted')
      setLocation('/')
    }
  }

  if (isLoading) return <h2>Cargando...</h2>

  return (
    <>
      <PlayersInfo players={players} />
      <FormButton onClick={handleClick}>Finalizar torneo</FormButton>
    </>
  )
}
