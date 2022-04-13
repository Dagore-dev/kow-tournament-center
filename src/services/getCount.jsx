import { db } from './db'

export default async function getCount () {
  return await db.players.count()
}
