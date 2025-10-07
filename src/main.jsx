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
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
