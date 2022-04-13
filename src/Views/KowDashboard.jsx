import PlayersInfo from '../components/PlayersInfo'
import FinishButton from '../components/FinishButton'
import NewRoundButton from '../components/NewRoundButton'
import usePlayers from '../hooks/usePlayers'

export default function KowDashborad () {
  const [isLoading, players] = usePlayers()

  if (isLoading) return <h2>Cargando...</h2>

  return (
    <>
      <NewRoundButton />
      <PlayersInfo players={players} />
      <FinishButton />
    </>
  )
}
