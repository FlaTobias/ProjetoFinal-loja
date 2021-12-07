import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples';
import { API, versao } from '../../../config';

import { connect } from 'react-redux';
import actions from '../../../redux/actions';

import AlertGeral from '../../../components/Alert/Geral';

class LoginContainer extends Component {
    state = {
        email: "",
        senha: "",
        aviso: null,
        erros: {}
    }

    validate(){
        const { email, senha } = this.state;
        const erros = {};

        if(!email) erros.email = "Preencha aqui com o seu email";
        if(!senha) erros.senha = "Preencha aqui com a sua senha";

        this.setState({ erros, aviso: null });
        return (Object.keys(erros).length === 0);
    }

    handleSubmit(){
        if(!this.validate()) return;
        const { email, senha } = this.state;
        this.props.autenticar({ email, password: senha }, false, (error) => {
            if(error) this.setState({ aviso: { status: false, message: error.message } });
            else this.setState({ aviso: null });
        });
    }

    onChange = (field, value) => this.setState({ [field]: value }, () => this.validate());

    render(){
        const { email, senha, erros } = this.state;
        return (
            <div className="Login-Container">
                <h2 className="text-start">olá novamente!</h2>
                <span className="text-start">logue com seu email</span>
                <div className="form-login">
                <br/>
                    <FormSimples
                        value={email} 
                        erro={erros.email}
                        name="email" 
                        type="email" 
                        placeholder="Email"
                        onChange={(e) => this.onChange('email', e.target.value)} />
                    <FormSimples 
                        value={senha} 
                        erro={erros.senha}
                        name="senha" 
                        type="password" 
                        placeholder="Senha"
                        onChange={(e) => this.onChange('senha', e.target.value)}  />
                    <div className="flex flex-right">
                        <a href={`${API}/${versao}/api/usuarios/recuperar-senha`} >
                            <small>esqueceu a senha?</small>
                        </a>
                    </div>
                    <br />
                    <AlertGeral aviso={this.state.aviso} />
                    <div className="flex flex-center">
                        <button 
                            className="btn-login" 
                            onClick={() => this.handleSubmit()}>
                            entrar
                        </button>
                    </div>
                    <br />
                    <hr />
                    <div className="link-acesso text-center">   
                        <span onClick={this.props.changeAcesso}>ou não tem cadastro? crie sua conta aqui!</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(LoginContainer);