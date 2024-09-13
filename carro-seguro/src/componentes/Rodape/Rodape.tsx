import './Rodape.css'
import { Link } from "react-router-dom";

export default function Rodape(){
    return(
        <footer>
        <Link to='/app/integrantes' className="links link_footer">Integrantes</Link>
        <p className="copyright">© 2024 Porto Seguro. Todos os direitos reservados.</p>
    </footer>
    );
}