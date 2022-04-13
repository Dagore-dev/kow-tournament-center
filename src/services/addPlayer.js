import { db } from './db'
import createPlayer from './createPlayer'

export default async function addPlayer (playerName) {
  try {
    const player = createPlayer(playerName)
    const id = await db.players.add(player)
    console.log(`${playerName} added with id = ${id}.`)
  } catch (e) {
    console.error(e)
  }
}
