import { db } from './db'

export default function recreateDB () {
  return db.delete().then(() => db.open())
}
