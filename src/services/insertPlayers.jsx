import addPlayer from './addPlayer'

export default function insertPlayers (players) {
  const adding = players.map(addPlayer)
  return Promise.all(adding)
}
