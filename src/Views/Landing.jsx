import { Link } from 'wouter'

import FormButton from '../components/FormButton'
import useCount from '../hooks/useCount'

export default function Landing () {
  const [isLoading, count] = useCount()

  if (isLoading) return <h2>Cargando ...</h2>

  return (
    <>
      <Link to={(count !== 0 ? '/dashboard/kow' : '/new/kow')}><FormButton>Nuevo torneo de kow</FormButton></Link>
    </>
  )
}
