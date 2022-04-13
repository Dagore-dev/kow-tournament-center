import playerComparer from './playerComparer.js'

export default function createRound (players) {
  const sortedPlayers = [...players].sort((a, b) => playerComparer(b, a))
  const pairings = []

  while (sortedPlayers.length > 0) {
    const playerOne = sortedPlayers[0]
    const playerTwoIndex = sortedPlayers.findIndex((player, index) => index !== 0 && !player.pairedWith.has(playerOne.name))
    const playerTwo = sortedPlayers[playerTwoIndex]

    pairings.push({ playerOne, playerTwo })
    sortedPlayers.splice(playerTwoIndex, 1)
    sortedPlayers.shift()
  }

  return pairings
}
