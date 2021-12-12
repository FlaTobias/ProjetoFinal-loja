import React from 'react';
import Link from 'next/link';

const CardLinks = () => (
    <div className='Card-links flex'>
            <div className="enc flex-1 flex flex-center vertical">
                <Link href="/encontrar">
                    <img src="/static/cardEnc.png" className="cardEnc"  />
                </Link>
                <span className='cardFonte onde'>onde encontrar</span>
            </div>
            <div className="emb flex-1 flex flex-center vertical">
                <Link href="/cembalagens">
                    <img src="/static/cardEmb.png" className="cardEmb"  />
                </Link>
                <span className='cardFonte'>embalagens</span>
            </div>
            <div className="cert flex-1 flex flex-center vertical">
                <Link href="/certificados">
                    <img src="/static/cardCert.png" className="cardCert" />
                </Link>
                <span className='cardFonte'>certificações</span>
            </div>
    </div>
)

export default CardLinks;