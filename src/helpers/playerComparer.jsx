export default function playerComparer (p1, p2) {
  let result

  if (p1.points !== p2.points) {
    result = p1.points > p2.points ? 1 : -1
  } else {
    if (p1.destroyed !== p2.destroyed) {
      result = p1.destroyed > p2.destroyed ? 1 : -1
    } else {
      result = 0
    }
  }

  return result
}
