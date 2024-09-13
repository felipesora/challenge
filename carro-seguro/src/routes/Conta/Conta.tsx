import { useEffect, useState } from "react";

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
    <div>
      <h1>Minha Conta</h1>
      <ul>
        <li><strong>Nome:</strong> {user.nome}</li>
        <li><strong>Email:</strong> {user.email}</li>
        <li><strong>CPF:</strong> {user.cpf}</li>
        <li><strong>Placa:</strong> {user.placa}</li>
        <li><strong>Senha:</strong> {user.senha}</li> {}
      </ul>
    </div>
  );
}
