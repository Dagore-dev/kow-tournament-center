import { Link } from 'wouter'

import FormButton from '../components/FormButton'
import recreateDB from '../services/recreateDB'

export default function Landing () {
  async function handleClick () {
    const ok = window.confirm('¿Estás seguro de finalizar el torneo? Se eliminará toda la información.').valueOf()
    if (ok) {
      await recreateDB()
      console.log('Deleted')
    }
  }

  return (
    <>
      <Link to='/new/kow'><FormButton>Nuevo torneo de kow</FormButton></Link>
      <FormButton onClick={handleClick}>Finalizar torneo</FormButton>
    </>
  )
}
