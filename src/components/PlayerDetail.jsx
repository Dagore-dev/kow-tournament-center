import OpponentsList from './OpponentsList'
import Td from './Td'

export default function PlayerDetail ({ player: { name, points, destroyed, pairedWith } }) {
  return (
    <tr>
      <Td>{name}</Td>
      <Td>{points}</Td>
      <Td>{destroyed}</Td>
      <Td><OpponentsList opponents={pairedWith} /></Td>
    </tr>
  )
}
