import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import BannerCert from '../containers/BannersCert';
import Certificacoes from '../containers/Certificacoes';
import Rodape from '../containers/Rodape';

export default class sobre extends Component {
    render(){
        return(
            <Layout title="IBI - Cosméticos Naturais">
                <Cabecalho />
                <BannerCert />
                <Certificacoes />
                <Rodape />
            </Layout>
        )
    }
}