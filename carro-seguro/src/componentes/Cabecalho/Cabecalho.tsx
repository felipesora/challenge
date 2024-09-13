import perfil from '../../assets/images/icone-perfil.png';
import logout from '../../assets/images/icone-sair.png';

import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Cabecalho.css';
import Menu from '../Menu/Menu';

export default function Cabecalho() {
    const location = useLocation();

    const getTitulo = () => {
        switch (location.pathname) {
            case '/app/diagnostico':
                return 'Diagnóstico de Problemas';
            case '/app/faq':
                return 'FAQ de Manutenção';
            case '/app/contato':
                return 'Contato';
            case '/app/integrantes':
                return 'Integrantes';
            default:
                return 'Bem-vindo à CarroSeguro';
        }
    };

    const navigate = useNavigate();
    
    function handleLogout() {
        localStorage.removeItem("loggedIn");
        navigate("/");
    }

    function hanldeConta() {
        navigate("/app/conta")
    }

    return (
        <header>
            <h1 className="titulo_cabecalho">{getTitulo()}</h1>
            <button onClick={hanldeConta} className='botao_icones_cabecalho'><img src={perfil} alt="icone de perfil" className='icones_cabecalho'/></button>
            <button onClick={handleLogout} className='botao_icones_cabecalho'><img src={logout} alt="icone de logout" className='icones_cabecalho'/></button>
            <Menu/>
        </header>
    );
}
