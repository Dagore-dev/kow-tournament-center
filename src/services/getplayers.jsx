import { db } from './db'

export default async function getPlayers () {
  const response = await db.players.toCollection()
  const players = response.toArray()
  return players
}
