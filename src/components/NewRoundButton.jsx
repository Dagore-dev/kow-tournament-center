import { useLocation } from 'wouter'

import FormButton from './FormButton'

export default function NewRoundButton () {
  const [, setLocation] = useLocation()

  function handleClick () {
    setLocation('/newRound/kow')
  }

  return (
    <FormButton onClick={handleClick}>Nueva Ronda</FormButton>
  )
}
