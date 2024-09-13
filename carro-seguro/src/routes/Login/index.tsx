import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>Entre na Conta</h1>
      <p>
      Entre na sua conta para ter uma experiência melhor ao usar nosso site! Ainda não possui um conta? <a href="/cadastro">Cadastre-se aqui</a>
      </p>
      <form onSubmit={handleLogin}>
        <label htmlFor="">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="">Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
