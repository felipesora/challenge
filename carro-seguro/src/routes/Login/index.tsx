import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem("users") || "[]");

    const user = userData.find((user: any) => user.email === email && user.senha === senha);

    if (user) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/app/pagina-inicial"); 
    } else {
      alert("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className="container_login">
      <h1 className="titulo_form">Entre na Conta</h1>
      <div className="div_texto_login">
        <p>
        Entre na sua conta para ter uma experiência melhor ao usar nosso site! Ainda não possui um conta? <a href="/cadastro" className="link_form">Cadastre-se aqui</a>
        </p>
        <form onSubmit={handleLogin}>
          <label htmlFor="" className="texto_form">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="" className="texto_form">Senha:</label>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
          <div>
            <button type="submit" className="button">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
