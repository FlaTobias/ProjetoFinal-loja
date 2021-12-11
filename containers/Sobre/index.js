import React from 'react';


const Sobre = () => (
    <div className='trajetoria'>
        <div className="texto-sobre">
            <span>
                a ibi tem uma história jovem, começamos pela trajetória de marcos e gracie recem casados em 2019 resolvem construir  um negocio de estética próprio. com a vinda da pandemia surgiram as dificuldades financeiras, o negócio fechou e as contas continuavam! como bons trabalhadores resolveram se virar sozinhos e se inspiraram naquilo que acreditavam e que carregam consigo como modo de vida, o vegetarianismo e a consciência com os cuidados da natureza e animais. foi assim que surgiu a ibi. 
                Ele, químico ficou responsável pela alquimia do desenvolvimento dos produtos.
                Ela, estéticista e artista, assumiu a criação da marca, sua simbologia 
                e dos toques de fragância dos nossos produtos.
            </span>
        </div>

    <div className='historia flex'>

        <img src="/static/casal.png" className="casal" width="100%" />

        <div className='texto-historia'>
            <h4> mas e a pergunta, o que é ibi?</h4>
            <p>
                acreditamos que mais do que cosméticos naturais, a ibi é a terra que aproxima as pessoas. fazemos isso através de conversas e pesquisas atenciosas onde continuamos desenvolvendo fórmulas incríveis e inspiradoras .
                contribuir para não agredir o planeta é uma escolha, e são essas escolhas que nos trazem consequências para os nossos corpos, nossa família, a natureza e todo o mundo em que vivemos.
                escolher usar produtos naturais e orgânicos é o melhor caminho para incentivarmos um hábito que traga mais consciência e qualidade de vida para todas as pessoas.
            </p>
        </div>
    
    </div>
    <div className='historia flex'>
        <div className='texto-historia'>
            <h4>o que fazemos?</h4>
            <p>
            fazemos aquilo que amamos e acreditamos, melhorar a vida de cada pessoa. trabalhando com produtos
             que nascem e extraímos da nossa terra, trazemos os aromas e benefícios dos produtos naturais para
              nossa vida.
            além também de contribuir para uma pegada mais ecológica sem o uso de plásticos e totalmente
             recicláveis, sem parabenos e óleo de palma para garantir que não agridam nossos corpos e também 
             nosso planeta. de pouquinho em pouquinho fazemos a nossa parte e tentamos tornar o nosso mundo um 
             lugar melhor para se viver.
            </p>
        </div>

        <img src="/static/arvore.png" className="arvore" width="100%" />
    
    </div>
    </div>
)

export default Sobre;