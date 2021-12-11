import React from 'react';
import Link from 'next/link';

const Paginas = () => (
    <div className="footer">
        <div>
            <h2>sobre a ibi</h2>
            
        </div>
        <Link href="/sobre">
            <span>nossa história</span>
        </Link>
        <Link href="/encontrar">
            <span>onde encontrar</span>
        </Link>
        <Link href="/certificados">
            <span>certificações</span>
        </Link>
    </div>
)

export default Paginas;