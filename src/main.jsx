import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/:typeMedia',
    element: <HomePage />,
  },
  {
    path: '/details/:nameMedia/:id/:typeMedia',
    element: <DetailPage />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
