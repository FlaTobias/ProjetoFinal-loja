import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import BannerCert from '../containers/BannersCert'
import Rodape from '../containers/Rodape';

export default class sobre extends Component {
    render(){
        return(
            <Layout title="IBI - Cosméticos Naturais">
                <Cabecalho />
                <BannerCert />
                
                <Rodape />
            </Layout>
        )
    }
}