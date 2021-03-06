import { useRef, useState } from 'react'
import { useLocation } from 'wouter'

import PreviewPlayers from './PreviewPlayers'
import FormButton from './FormButton'
import insertPlayers from '../services/insertPlayers'

export default function PlayersForm () {
  const playerName = useRef()
  const [players, setPlayers] = useState([])
  const [, setLocation] = useLocation()

  function handleClick (e) {
    e.preventDefault()
    const newPlayer = playerName.current.value

    if (newPlayer && !players.includes(newPlayer)) {
      playerName.current.value = ''
      setPlayers([...players, newPlayer])
    }
  }

  async function handleSubmit (e) {
    e.preventDefault()

    insertPlayers(players)
      .then(setLocation('/dashboard/kow'))
      .catch(console.error)
  }

  return (
    <form onSubmit={handleSubmit} className='h-4/5 grid grid-rows-[repeat(3,0.5fr)_8fr_0.5fr]'>

      <label className='block text-center text-lg font-semibold my-1' htmlFor='playerName'>Nombre del jugador</label>
      <input className='w-full my-1 focus:outline-none focus:shadow-[0_0px_3px_3px_rgba(249,168,212,1)]' type='text' name='playerName' id='playerName' ref={playerName} />

      <FormButton onClick={handleClick}>Insertar</FormButton>

      <PreviewPlayers players={players} setPlayers={setPlayers} />

      <FormButton>Crear Torneo</FormButton>
    </form>
  )
}
