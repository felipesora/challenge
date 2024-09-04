import './Menu.css'
import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <ul className="ul_links">
            <li><Link to='/' className='links'>Início</Link></li>
            <li><Link to='/diagnostico' className='links'>Diagnóstico</Link></li>
            <li><Link to='/faq' className='links'>FAQ</Link></li>
            <li><Link to='/contato' className='links'>Contato</Link></li>
        </ul>
    );
}