import { useEffect, useState } from "react";
import './conta.css'

export default function Conta() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  if (!user) {
    return <div>Carregando dados...</div>;
  }

  return (
    <div id="container_main_conta">
      <div id="container_conta">
        <h1 className="titulo_conta">Minha Conta</h1>
        <p className="texto_conta">Abaixo estão seus dados cadastrados no sistema:</p>
        <ul className="ul_conta">
          <li><strong>Nome:</strong> {user.nome}</li>
          <li><strong>Email:</strong> {user.email}</li>
          <li><strong>CPF:</strong> {user.cpf}</li>
          <li><strong>Placa:</strong> {user.placa}</li>
          <li className="ultimo_li"><strong>Senha:</strong> {user.senha}</li> {}
        </ul>
      </div>
    </div>
  );
}
