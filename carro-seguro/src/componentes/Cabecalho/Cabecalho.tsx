import { useLocation } from 'react-router-dom';
import './Cabecalho.css';
import Menu from '../Menu/Menu';

export default function Cabecalho() {
    const location = useLocation();

    const getTitulo = () => {
        switch (location.pathname) {
            case '/diagnostico':
                return 'Diagnóstico de Problemas';
            case '/faq':
                return 'FAQ de Manutenção';
            case '/contato':
                return 'Contato';
            case '/integrantes':
                return 'Integrantes';
            default:
                return 'Bem-vindo à CarroSeguro';
        }
    };

    return (
        <header>
            <h1 className="titulo_cabecalho">{getTitulo()}</h1>
            <Menu/>
        </header>
    );
}
