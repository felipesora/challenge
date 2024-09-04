import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import './App.css'
import { Outlet } from "react-router-dom";

export default function App(){
  return(
    <>
    <Cabecalho/>
    <Outlet/>
    <Rodape/>
    </>
  )
}