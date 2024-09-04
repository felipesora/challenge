import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './routes/PaginaInicial/index.tsx';
import Diagnostico from './routes/Diagnostico/index.tsx';
import FAQ from './routes/FAQ/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <PaginaInicial/>
      },
      {
        path:'/diagnostico',
        element: <Diagnostico/>
      },
      {
        path:'/faq',
        element: <FAQ/>
      },
      {
        path:'/contato',
        element: <Contato/>
      },
      {
        path: '/integrantes',
        element: <Integrantes/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>,
)
