import PlayerRow from './PlayerRow'

export default function PreviewPlayers ({ players, setPlayers }) {
  function handleDelete (e) {
    e.preventDefault()
    const indexToDelete = getIndex(e)
    const updatePlayers = players.filter((_, index) => index !== indexToDelete)

    setPlayers(updatePlayers)
  }

  function getIndex (e) {
    return parseInt(e.target.parentElement.dataset.index)
  }

  return (
    <ul className='overflow-auto'>
      {
        players.map((player, index) => <PlayerRow key={index} index={index} player={player} onClick={handleDelete} />)
      }
    </ul>
  )
}
