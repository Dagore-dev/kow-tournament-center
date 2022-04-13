import {
  Router,
  Route,
  Link
} from 'wouter'
import KowDashboard from './Views/KowDashboard'
import Landing from './Views/Landing'
import NewKowTournament from './Views/NewKowTournament'

function App () {
  return (
    <div className='min-h-screen bg-cyan-200 grid grid-rows-[5vh_95vh] align-middle justify-center'>
      <h1 className='text-xl text-center'><Link to='/'>Organizador de torneos</Link></h1>

      <main className='m-4'>
        <Router>
          <Route path='/new/kow' component={NewKowTournament} />
          <Route path='/dashboard/kow' component={KowDashboard} />
          <Route path='/' component={Landing} />
        </Router>
      </main>
    </div>
  )
}

export default App
