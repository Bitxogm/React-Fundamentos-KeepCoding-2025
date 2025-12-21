import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { routes } from '@core/router/Routes.tsx'
import './index.css'

const appRouter = createBrowserRouter(routes);

createRoot(document.getElementById('root')as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
)
