import React, { Component } from 'react';

import Layout from '../components/Layout';

import Cabecalho from '../containers/Cabecalho';
import Banners from '../containers/Banners';
import Beneficios from '../containers/Beneficios';
import CardCat from '../containers/CardCat';
import ProdutosPaginaInicial from '../containers/Lista/ProdutosPaginaInicial';
import Sociais from '../containers/Sociais';
import CardLinks from '../containers/CardLinks';
import Rodape from '../containers/Rodape';

import initialize from '../utils/initialize';
import callBaseData from '../utils/callBaseData';
import { fetchData } from '../utils/fetch';

import { connect } from 'react-redux';
import actions from '../redux/actions';


class Index extends Component {

    static async getInitialProps(ctx){
        initialize(ctx);
        return callBaseData([
            actions.fetchProdutosPaginaInicial   
        ], ctx);
    }

    async componentDidMount(){
        await this.props.getUser({ token: this.props.token });
    }

    render(){
        return(
            <Layout title="IBI - Cosméticos Naturais">
                <Cabecalho />
                <Banners />
                <Beneficios />
                <CardCat />
                <ProdutosPaginaInicial />
                <Sociais />
                <CardLinks />
                <Rodape />
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token
});

export default connect(mapStateToProps, actions)(Index);