import { Outlet } from 'react-router'
import './App.css'
import WelcomePage from './pages/WelcomePage'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
    <main className='mainGrid'>
      <HeaderComponent/>
        <section className='mainContent'>
          <Outlet/>
        </section>
      <FooterComponent />
    </main>
  )
}

export default App
