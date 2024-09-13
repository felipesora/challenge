import './Menu.css'
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <ul className="ul_links">
            <li><Link to='/app/pagina-inicial' className='links'>Início</Link></li>
            <li><Link to='/app/diagnostico' className='links'>Diagnóstico</Link></li>
            <li><Link to='/app/faq' className='links'>FAQ</Link></li>
            <li><Link to='/app/contato' className='links'>Contato</Link></li>
        </ul>
    );
}