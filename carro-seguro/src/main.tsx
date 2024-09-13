import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './routes/PaginaInicial/index.tsx';
import Diagnostico from './routes/Diagnostico/index.tsx';
import FAQ from './routes/FAQ/index.tsx';
import Contato from './routes/Contato/index.tsx';
import Integrantes from './routes/Integrantes/index.tsx';
import Login from './routes/Login/index.tsx';
import Cadastro from './routes/Cadastro/index.tsx';
import Conta from './routes/Conta/Conta.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Login />, 
  },
  {
    path: '/cadastro',
    element: <Cadastro /> 
  },
  {
    path: '/app',
    element: <App />, 
    children: [
      {
        path: '/app/pagina-inicial',
        element: <PaginaInicial />
      },
      {
        path: '/app/diagnostico',
        element: <Diagnostico />
      },
      {
        path: '/app/faq',
        element: <FAQ />
      },
      {
        path: '/app/contato',
        element: <Contato />
      },
      {
        path: '/app/integrantes',
        element: <Integrantes />
      },
      {
        path: '/app/conta',
        element: <Conta/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
