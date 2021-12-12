import React from 'react';


const Sociais = () => (
    <div className='redes-sociais flex flex-center'>
        <div className='instagrans flex'>
        <div className="insta1">
            <img src="/static/insta1.png" className="insta1" />

        </div>
        <div className='insta2'>
            <img src="/static/insta2.png" className="insta2" />
    
        </div>
        </div>
        <div className='texto-insta text-center'>
            <h2>área rede social</h2>
            <br/>
            <p> também marcamos nossa presença nas redes sociais.
            marque a gente na sua postagem e você pode aparecer aqui!
            mostre para o mundo como a ibi te ajudou.</p>
            <br/>
            <a href="https://www.instagram.com/ibicosmeticosnaturais/"><button className='btn btn-insta '><i class="fa fa-instagram"> conheça nosso instagram</i></button></a>
        </div>
    </div>
)

export default Sociais;