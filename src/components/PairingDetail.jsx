import Td from './Td'

export default function PairingDetail ({ playerOne, playerTwo }) {
  return (
    <tr>
      <Td>{playerOne.name}</Td>
      <Td>{playerTwo.name}</Td>
    </tr>
  )
}
