export default function PlayerRow ({ player, index, onClick }) {
  return (
    <li data-index={index} className='flex justify-between'>
      {player}
      <button onClick={onClick}>❌</button>
    </li>
  )
}
