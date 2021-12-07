import React from 'react';
import Link from 'next/link';

const DadosDaLoja = () => (
    <div className="footer">
        <div>
            <h2>precisa de ajuda?</h2>
            
        </div>
        <Link href="/">
            <span>privacidade</span>
        </Link>
        <Link href="/">
            <span>troca e devolução</span>
        </Link>
        <Link href="/">
            <span>fale com a gente</span>
        </Link>
    </div>
)

export default DadosDaLoja;