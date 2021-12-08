import React, { Component } from 'react';

import Layout from '../components/Layout';
import BannersProduto from '../containers/BannersProduto';
import Cabecalho from '../containers/Cabecalho';

import Rodape from '../containers/Rodape';

export default class sobre extends Component {
    render(){
        return(
            <Layout title="IBI - Cosméticos Naturais">
                <Cabecalho />
                <BannersProduto />
                
                <Rodape />
            </Layout>
        )
    }
}