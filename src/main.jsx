import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.css'
import { RouterProvider } from 'react-router'
import { router } from './Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
)
