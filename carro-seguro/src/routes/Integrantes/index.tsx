import Felipe from '../../assets/images/felipe-750px.jpg';
import Vitor from '../../assets/images/vitor-750px.jpg';
import Pedro from '../../assets/images/pedro-750px.jpg';

import './integrantes.css'

export default function Integrantes(){
    return(
        <div id='container_main_integrantes'>
            <div id='container_integrantes'>
                <h1 className='titulo_main'>Integrantes:</h1>
                <div className='integrante'>
                    <div className='imagem_dados'>
                        <img src={Felipe} alt="Foto do Felipe" />
                        <div className='dados_integrante'>
                            <p>Nome: Felipe Sora</p>
                            <p>RM: 555462</p>
                            <p>1TDSPH</p>
                            <p>GitHub: <a href="https://github.com/felipesora" target='_blank' className='link_github'>github.com/felipesora</a></p>
                        </div>
                    </div>
                </div>
                <div className='integrante'>
                    <div className='imagem_dados'>
                        <img src={Pedro} alt="Foto do Pedro" />
                        <div className='dados_integrante'>
                            <p>Nome: Pedro Paulo</p>
                            <p>RM: 556370</p>
                            <p>1TDSPH</p>
                            <p>GitHub: <a href="https://github.com/PBPedro" target='_blank' className='link_github'>github.com/PBPedro</a></p>
                        </div>
                    </div>
                </div>
                <div className='integrante vitor'>
                    <div className='imagem_dados'>
                        <img src={Vitor} alt="Foto do Vitor" />
                        <div className='dados_integrante'>
                            <p>Nome: Vitor Tadeu</p>
                            <p>RM: 559105</p>
                            <p>1TDSPH</p>
                            <p>GitHub: <a href="https://github.com/ovitortadeu" target='_blank' className='link_github'>github.com/ovitortadeu</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}