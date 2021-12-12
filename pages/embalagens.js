import React, { Component } from 'react';

import Layout from '../components/Layout';
import Cabecalho from '../containers/Cabecalho';
import BannerEmb from '../containers/BannersEmb';
import Embalagens from '../containers/Embalagens'
import Rodape from '../containers/Rodape';

export default class sobre extends Component {
    render(){
        return(
            <Layout title="IBI - Cosméticos Naturais">
                <Cabecalho />
                <BannerEmb />
                <Embalagens />
                <Rodape />
            </Layout>
        )
    }
}