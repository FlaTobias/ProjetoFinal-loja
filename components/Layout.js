import Head from './Head';

import Style from './Style';

const IMAGES = [
    "/static/cartoes.png"
];

const Layout = ({ children, title, description, url, image, pagSeguro }) => (
    <div>
        <Head
            title={title}
            description={description}
            url={url}
            ogImage={image}
            pagSeguro={pagSeguro}></Head>
        <Style />
        <div className="body">
            { children }
        </div>
        <footerfinal>
            <div className="flex-1 flex vertical flex-center">
                <div className="cartoes">
                <img src={IMAGES} alt="cartoes"/>
                </div>
        
                <small>
                    &copy; Ibi Cosméticos Naturais - 2021 - Gama Experience 39
                </small>
            </div>
        </footerfinal>
    </div>
);

export default Layout;