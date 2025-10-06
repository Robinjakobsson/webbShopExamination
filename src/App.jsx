import { Outlet } from 'react-router'
import './App.css'
import WelcomePage from './pages/WelcomePage'

function App() {

  return (
    <main className='mainGrid'>
      <header>Header</header>
        <section className='mainContent'>
          <Outlet/>
        </section>
      <footer>Footer</footer>
    </main>
  )
}

export default App
