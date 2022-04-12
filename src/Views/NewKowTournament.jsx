import PlayersForm from '../components/PlayersForm'

export default function NewKowTournament () {
  return (
    <>
      <h2 className='text-lg my-1'>Nuevo torneo de King of wars</h2>

      <p className='my-1'>
        Introduce los nombres de los jugadores. Cuando estes listo pulsa el botón "Crear Torneo".
      </p>

      <PlayersForm />
    </>
  )
}
