import React, { useRef, useState } from 'react';
import iconTelefone from '../../assets/images/icone-telefone.png';
import iconEmail from '../../assets/images/icone-email.png';
import "./contato.css"

export default function Contato() {
  const inputNome = useRef<HTMLInputElement | null>(null);
  const inputMensagem = useRef<HTMLInputElement | null>(null);
  const [respostaNome, setRespostaNome] = useState<string>('');
  const [respostaMensagem, setRespostaMensagem] = useState<string>('');

  const btnContatoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const nomeUsuario = inputNome.current?.value.trim();
    const mensagemUsuario = inputMensagem.current?.value.trim();

    if (nomeUsuario && mensagemUsuario) {
      setRespostaNome(`Obrigado, ${nomeUsuario}`);
      setRespostaMensagem(
        'Obrigado por entrar em contato conosco. Recebemos sua mensagem e nossa equipe retornará o mais breve possível. Agradecemos por escolher a Porto Seguro.'
      );
      if (inputNome.current) inputNome.current.value = '';
      if (inputMensagem.current) inputMensagem.current.value = '';
    }
  };

  return (
    <main>
      <div id="container_main">
        <div id="container_contato">
          <h1 className="titulo_main">Entre em Contato</h1>
          <div id="box_icones">
            <div className="flex_contato">
              <img src={iconTelefone} alt="Ícone de telefone" className="icone_contato"/>
              <p>0800-123-456</p>
            </div>
            <div className="flex_contato flex_contato2">
              <img src={iconEmail} alt="Ícone de e-mail"/>
              <p>suporte@portoseguro.com.br</p>
            </div>
          </div>
          <div id="dados_contato">
            <form action="#">
              <label className="texto_dados">Nome:</label>
              <div>
                <input type="text" id="id_nome_usuario" name="nome_usuario" required ref={inputNome} />
              </div>
              <label className="texto_dados">Mensagem:</label>
              <div>
                <input type="text" id="id_mensagem_usuario" name="mensagem_usuario" required ref={inputMensagem} />
              </div>
              <button id="btnContato" className="botao_enviar" onClick={btnContatoClick}>
                Enviar
              </button>
            </form>
          </div>
          <p id="resposta_nome">{respostaNome}</p>
          <div id="resposta_botao">
            {respostaMensagem && <p className="resposta_botao">{respostaMensagem}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
