import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter, redirect} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'


const router = createBrowserRouter([
  {
    path: "/movieflix",
    element: <HomePage />,
  },
  {
    path: '/movieflix/details/:typeMedia/:id/',
    element: <DetailPage />,
  },
  {
    path: '/',
    element: redirect('/movieflix'),
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
