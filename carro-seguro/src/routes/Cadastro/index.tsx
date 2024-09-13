import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastro.css";

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
    <div className="container_cadastro">
      <h1 className="titulo_form_cadastro">Cadastro</h1>
      <div className="div_texto_cadastro">
        <p>Crie um cadastro para ter uma experiência melhor ao usar nosso site! Já possui uma conta? <a href="/" className="link_form_cadastro">Faça login aqui</a></p>
        <form onSubmit={handleCadastro}>
          <label htmlFor="" className="texto_form_cadastro">Nome Completo:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <label htmlFor="" className="texto_form_cadastro">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="" className="texto_form_cadastro">CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <label htmlFor="" className="texto_form_cadastro">Placa do Carro:</label>
          <input
            type="text"
            value={placa}
            onChange={(e) => setPlaca(e.target.value)}
            required
          />
          <label htmlFor="" className="texto_form_cadastro">Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <p className="campos_obrigatorios">*Todos os campos são obrigatórios.</p>
          <button type="submit">Cadastrar-se</button>
        </form>
      </div>
    </div>
  );
}
