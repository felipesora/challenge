import { Outlet, useLocation } from "react-router-dom";
import './App.css';
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";

export default function App() {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/' && location.pathname !== '/cadastro';

  return (
    <>
      {showHeaderFooter && <Cabecalho />}
      <Outlet />
      {showHeaderFooter && <Rodape />}
    </>
  );
}
