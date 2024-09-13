import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [placa, setPlaca] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleCadastro(event: React.FormEvent) {
    event.preventDefault();
    const newUser = { nome, email, cpf, placa, senha };
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Cadastro realizado com sucesso!");
    navigate("/"); 
  }

  return (
    <div>
      <h1>Cadastro</h1>
      <p>Crie um cadastro para ter uma experiência melhor ao usar nosso site! Já possui uma conta? <a href="/">Faça login aqui</a></p>
      <form onSubmit={handleCadastro}>
        <label htmlFor="">Nome Completo:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <label htmlFor="">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">CPF:</label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <label htmlFor="">Placa do Carro:</label>
        <input
          type="text"
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
          required
        />
        <label htmlFor="">Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <p>*Todos os campos são obrigatórios.</p>
        <button type="submit">Cadastrar-se</button>
      </form>
    </div>
  );
}
