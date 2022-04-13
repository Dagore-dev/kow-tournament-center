import usePlayers from '../hooks/usePlayers'
import newRound from '../helpers/newRound'

import Th from '../components/Th'
import PairingDetail from '../components/PairingDetail'

export default function KowNewRound () {
  const [isLoading, players] = usePlayers()

  if (isLoading) return <h2>Cargando...</h2>

  const pairings = newRound(players, true)

  return (
    <table>
      <thead>
        <tr>
          <Th>Jugador 1</Th>
          <Th>Jugador 2</Th>
        </tr>
      </thead>
      <tbody>
        {pairings.map(([playerOne, playerTwo], index) => <PairingDetail key={index} playerOne={playerOne} playerTwo={playerTwo} />)}
      </tbody>
    </table>
  )
}
