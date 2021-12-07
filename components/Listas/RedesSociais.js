import React from 'react';
import Link from 'next/link';

const REDES_SOCIAIS = [
    { nome: "facebook", url: "#" },
    { nome: "instagram", url: "#" },
    { nome: "twitter", url: "#" },
    { nome: "whatsapp", url: "#" },
];

const RedesSociais = () => (
    <div className="redessociais">
        <div>
            <h2>conheça nossas redes</h2>
            
        </div>
        <div className="blocoredes">
            {
                REDES_SOCIAIS.map((item, idx)=> (
                    <div className="redes" key={idx}>
                        <Link href={item.url}>
                            <i className={`fa fa-${item.nome} fa-lg`}></i>
                        </Link>
                    </div>
                ))
            }
        </div>
    </div>
)

export default RedesSociais;