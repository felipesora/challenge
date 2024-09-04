import React, { useRef, useState } from 'react';
import './diagnostico.css'

export default function Diagnostico(){
    
    const input = useRef<HTMLInputElement | null>(null);
    const [respostaBtn, setRespostaBtn] = useState<string>('');

    const btnDiagnosticoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (input) {
            setRespostaBtn('Seu problema foi relatado com sucesso. Nossa equipe entrará em contato com você em breve para fornecer suporte e orientações. Obrigado por escolher a Porto Seguro.');
        }
        if (input.current) input.current.value = '';
    }

    return(
        <main>
        <div id="container_main">
            <div id="container_diagnostico">
                <h1 className="titulo_main">Descreva o problema do seu carro</h1>
                <p className="descritivo">Aqui você tem a oportunidade de detalhar os problemas que está enfrentando com seu carro. Com base na sua descrição, nossa plataforma fornecerá possíveis soluções para ajudá-lo a identificar e resolver a situação de forma eficaz. Preencha o formulário abaixo com o máximo de detalhes possível para que possamos oferecer a melhor assistência. Quanto mais informações você fornecer, mais preciso será o nosso suporte.</p>
                <h2 className="subtitulo">Relatar Problema:</h2>
                <form action="#">
                    <div>
                        <input type="text" id="id_relatar_problema" name="relatar_problema" required placeholder="Ex: Meu carro não liga, o motor está fazendo um barulho estranho, etc."/>
                    </div>
                    <button id="btnProblema" className="botao_enviar" onClick={btnDiagnosticoClick}>
                        Enviar
                    </button>
                </form>
                <div id="resposta_botao">
                    {respostaBtn}
                </div>
            </div>
        </div>
    </main>
    );
}