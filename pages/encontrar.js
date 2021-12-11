import React, { Component } from 'react';

import Layout from '../components/Layout';
import BannersEncontrar from '../containers/BannersEncontrar';
import Cabecalho from '../containers/Cabecalho';
import Rodape from '../containers/Rodape';

export default class sobre extends Component {
    render(){
        return(
            <Layout title="IBI - Cosméticos Naturais">
                <Cabecalho />
                <BannersEncontrar />
                <Rodape />
            </Layout>
        )
    }
}