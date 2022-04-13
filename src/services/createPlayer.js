export default function createPlayer (name) {
  return {
    name,
    points: 0,
    destroyed: 0,
    pairedWith: new Set()
  }
}
