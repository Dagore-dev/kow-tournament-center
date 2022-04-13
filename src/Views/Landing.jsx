import { useState, useEffect } from 'react'
import { Link } from 'wouter'

import FormButton from '../components/FormButton'
import getCount from '../services/getCount'

export default function Landing () {
  const [count, setCount] = useState(0)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    const data = getCount()

    data.then(res => {
      setCount(res)
      setLoading(false)
    })
  }, [])

  if (isLoading) return <h2>Cargando ...</h2>

  return (
    <>
      <Link to={(count !== 0 ? '/dashboard/kow' : '/new/kow')}><FormButton>Nuevo torneo de kow</FormButton></Link>
    </>
  )
}
