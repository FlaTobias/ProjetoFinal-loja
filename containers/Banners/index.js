import React, { Component } from 'react';

const IMAGES = [
    "/static/banner.png"
];

class Banners extends Component {
    state = { 
        img: IMAGES[0],
        idx: 0
    }

    onChange = (index) => {
        let opcao = (index < 0) ? 
                        IMAGES.length - 1 : 
                        ( index >= IMAGES.length ) ? 
                            0 : 
                            index;
        this.setState({ img: IMAGES[opcao], idx: opcao });
    }

    componentDidMount(){
        this.scroll = window.setInterval(() => this.onChange(this.state.idx + 1), 5000);
    }

    componentWillUnmount(){
        window.clearInterval(this.scroll);
    }

    renderBanners(){
        const { img } = this.state;
        return (
            <div className="banner-info">
                
                    <h2 className="display-1">cuida do planeta e de você!</h2>
                    <p>produtos 100% sustentáveis</p>
                    <a href="/" className="botao-banner">comprar</a>
                    <img src={img} className="banner" alt="banner" width="100%" />
                
                
            </div>
        )
    }

    render(){
        return (
            <div className="Banners flex">
                { this.renderBanners() }
            </div>
        )
    }
}

export default Banners;