import { useLocation } from 'wouter'
import recreateDB from '../services/recreateDB'

import FormButton from './FormButton'

export default function FinishButton () {
  const [, setLocation] = useLocation()

  async function handleClick () {
    const ok = window.confirm('¿Estás seguro de finalizar el torneo? Se eliminará toda la información.').valueOf()
    if (ok) {
      await recreateDB()
      console.log('Deleted')
      setLocation('/')
    }
  }

  return (
    <FormButton onClick={handleClick}>Finalizar torneo</FormButton>
  )
}
