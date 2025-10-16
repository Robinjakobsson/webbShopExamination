import { Outlet } from 'react-router'
import './App.css'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchAllMovies } from './features/moviesSlice'

function App() {

  const dispatch = useDispatch();

    useEffect (() => {
        dispatch(fetchAllMovies())
    }, [dispatch])

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
