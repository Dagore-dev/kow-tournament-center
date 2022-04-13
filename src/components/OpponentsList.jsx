export default function OpponentList ({ opponents }) {
  const formatter = new Intl.ListFormat('es', { style: 'long', type: 'conjunction' })

  return (
    <p>{formatter.format(opponents)}</p>
  )
}
