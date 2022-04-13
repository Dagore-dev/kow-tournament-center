import Dexie from 'dexie'

export const db = new Dexie('tournament')// Cuando quieras borrar la base de datos (cuando termines el torneo) usa el método Dexie.delete('database_name')
db.version(1).stores({
  players: '++id, name' // Primary key and indexed props
})
