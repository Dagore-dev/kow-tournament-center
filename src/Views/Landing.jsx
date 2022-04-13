import Dexie from 'dexie'
import { Link } from 'wouter'

import FormButton from '../components/FormButton'

export default function Landing () {
  async function handleClick () {
    const ok = confirm('¿Estás seguro de finalizar el torneo? Se eliminará toda la información.').valueOf()
    if (ok) {
      await Dexie.delete('tournament')
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
