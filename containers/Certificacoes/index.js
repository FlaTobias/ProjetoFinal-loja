import React from 'react';


const Certificacoes = () => (
    <div>
        <div className='section-one-certificacoes'>
            <span className='texto-certificacoes'>
                nossas certificações podem ser implementadas independentemente umas das outras ou combinadas em uma abordagem empresarial responsável e abrangente.
            </span>
            <div className='imagens-certificacoes'>
                <img src="/static/selo-eureciclo.png" className="selo-certificacoes" />
                <img src="/static/selo-verde-divulgacao.png" className="selo-certificacoes" />
                <img src="/static/selo-fsc.png" className="selo-certificacoes" />
            </div>

        </div>

        <div className='section-two-certificacoes'>

            <img src="/static/foto-pagina-certificacoes.png" className="foto-certificacoes" />

            <div className='texto-lista-certificacoes'>
                <h4 className='titulo-certificacoes'>nossas certificações garantem produtos que:</h4>
                <ul className='lista-certificacoes'>
                    <li className='item-certificacoes'>
                        possuem o máximo possível de ingredientes orgânicos e naturais, preservando suas qualidades originais;
                    </li>
                    <li className='item-certificacoes'>
                        Procuram amenizar o impacto ambiental;
                    </li>
                    <li className='item-certificacoes'>
                        Não são prejudiciais à saúde, tampouco testado em animais; 
                    </li>
                    <li className='item-certificacoes'>
                        Privilegiam o uso de matérias-primas renováveis;
                    </li>
                    <li className='item-certificacoes'>
                        Contém matérias-primas com origem na agricultura biodinâmica. Além de contemplar todos os princípios da agricultura orgânica, a biodinâmica ainda respeita a relação entre os vários seres vivos presentes na prática agrícola, tal como considera a influência do cosmos no reino vegetal. A terra também é tratada com preparados homeopáticos;
                    </li>
                    <li className='item-certificacoes'>
                        Possuem embalagens produzidas a partir do Polietileno Verde, matéria-prima de fonte renovável (etanos de cana-de-açúcar), 100% reciclável;
                    </li>
                    <li className='item-certificacoes'>
                        Possuem embalagens fabricadas com matéria-prima de floresta certificada ou de origem controlada segundo as normas do Conselho de Manejo Florestal – (Forest Stewardship Council), provenientes de uma produção responsável, respeitando aspectos ambientais, sociais e econômicos;
                    </li>
                    <li className='item-certificacoes'>
                        E ainda, somos a primeira marca de cosméticos brasileiros a ter uma linha certificada pela NATRUE, certificadora europeia para produtos naturais e orgânicos com alto grau de exigência.
                    </li>
                </ul>
            </div>
    
        </div>
    </div>
)

export default Certificacoes;