import React, { Component } from 'react';


import Paginas from '../../components/Listas/Paginas';
import RedesSociais from '../../components/Listas/RedesSociais';
import DadosDaLoja from '../../components/Item/DadosDaLoja';

class Rodape extends Component {
    render(){
        return (
            <div className="Rodape">
                <div className="roda">
                    <Paginas />
                    <DadosDaLoja />
                    <RedesSociais />
                </div>
                
            </div>
        )
    }
}

export default Rodape;