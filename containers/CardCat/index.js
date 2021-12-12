import React from 'react';
import Link from 'next/link';

const CardCat = () => (
    <div className='Card-categorias flex'>
            <div className="sh flex-2 flex flex-center">
                <Link href="/categoria">
                    <img src="/static/cardSH.png" className="cardSH"  />
                </Link>
                <span className='cardFonte'>shampoo/condicionador</span>
            </div>
            <div className="hb flex-2 flex flex-center">
                <Link href="/">
                    <img src="/static/cardHB.png" className="cardHB"  />
                </Link>
                <span className='cardFonte'>higiene bucal</span>
            </div>
            <div className="cp flex-2 flex flex-center">
                <Link href="/">
                    <img src="/static/cardCP.png" className="cardCP" />
                </Link>
                <span className='cardFonte'>cuidado do corpo</span>
            </div>
    </div>
)

export default CardCat;