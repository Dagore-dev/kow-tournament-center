import {
  Router,
  Route
} from 'wouter'
import Landing from './Views/Landing'
import NewKowTournament from './Views/NewKowTournament'

function App () {
  return (
    <div className='min-h-screen bg-cyan-200 grid grid-rows-[5vh_95vh] align-middle justify-center'>
      <h1 className='text-xl text-center'>Organizador de torneos formato suizo</h1>

      <main className='w-4/5 mx-auto'>
        <Router>
          <Route path='/new/kow' component={NewKowTournament} />
          <Route path='/' component={Landing} />
        </Router>
      </main>
    </div>
  )
}

export default App
