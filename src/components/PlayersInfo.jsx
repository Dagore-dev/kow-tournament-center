import PlayerDetail from './PlayerDetail'
import Th from './Th'

export default function PlayersInfo ({ players }) {
  return (
    <table>
      <thead>
        <tr>
          <Th>Nombre</Th>
          <Th>Puntos de victoria</Th>
          <Th>Puntos destruidos</Th>
          <Th>Emparejado con</Th>
        </tr>
      </thead>
      <tbody>
        {
          players.map((player, index) => <PlayerDetail key={index} player={player} />)
        }
      </tbody>
    </table>
  )
}
