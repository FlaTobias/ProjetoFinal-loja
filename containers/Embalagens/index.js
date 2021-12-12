import React from 'react';


const Embalagens = () => (
    <div className='container-embalagens'>
        <div className='section-one-embalagens'>
            <span className='introducao-embalagens'>
                Nós estamos pensando sempre em utilizar da melhor forma nossos recursos para ajudar você e o meio ambiente. 
            </span>

        </div>

        
        <div className='lista-embalagens'>
                
            <div className='item-embalagens'>
                <img src="/static/foto1-embalagens.png" className="foto-embalagens" />
                <div className='texto-embalagens'>
                    <h4 className='titulo-embalagens'>1.sem plástico</h4>
                    <p className='descricao-embalagens'>
                            Contribuir em não agredir o planeta é uma escolha, e nós da Ibis escolhemos todos os dias ajudar a não espalhar mais plásticos no nosso planeta. Todas as nossas embalagem são feitas com produtos biodegradáveis, sem plástico.
                    </p>
                </div>                        
            </div>
            <div className='item-embalagens'>
                <div className='texto-embalagens'>
                    <h4 className='titulo-embalagens'>2.material reciclável</h4> 
                    <p className='descricao-embalagens'>
                        Nossas embalagens são todas confeccionadas com materiais recicláveis e sustentáveis. A utilização dos 3 "R's" (reduzir, reutilizar e reciclar) são nossa prioridade nessa etapa!
                    </p>
                </div>
                <img src="/static/foto2-embalagens.png" className="foto-embalagens" />
            </div>
            <div className='item-embalagens'>
                <img src="/static/foto3-embalagens.png" className="foto-embalagens" />
                <div className='texto-embalagens'>
                    <h4 className='titulo-embalagens'>3.proteção natural</h4> 
                     <p className='descricao-embalagens'>"
                        Toda vez que   poluímos o planeta, matamos um pouquinho do futuro". Por isso nós da Ibis nos importamos tanto em cuidar e proteger o meio ambiente 
                    </p>
                 </div>                        
            </div>
        </div>
        
    </div>
)

export default Embalagens;