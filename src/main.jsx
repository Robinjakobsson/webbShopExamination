import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage.jsx'
import LibraryPage from './pages/LibraryPage.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import CartPage from './pages/CartPage.jsx'
import PayPage from './pages/PayPage.jsx'
import { RouterProvider } from 'react-router'
import moviesSliceReducer from './features/moviesSlice'
import cartReducer from './features/cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import GenreDetailPage from './pages/GenreDetailPage.jsx'
import SupportPage from './pages/SupportPage.jsx'
import FilterPage from './pages/FilterPage.jsx'

const store = configureStore({
  reducer: {
    movies: moviesSliceReducer,
    cart: cartReducer
  }
})


const router = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      {index: true, Component: WelcomePage},
      {path: '/library', Component: LibraryPage},
      {path: '/detail', Component: MovieDetailPage},
      {path: '/cart', Component: CartPage},
      {path: '/pay', Component: PayPage},
      {path: '/genre', Component: GenreDetailPage},
      {path: '/support', Component: SupportPage},
      {path: '/filter', Component: FilterPage}  
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
