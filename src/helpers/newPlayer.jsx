export default function createNewPlayer (name) {
  return {
    name,
    points: 0,
    destroyed: 0,
    pairedWith: new Set()
  }
}
