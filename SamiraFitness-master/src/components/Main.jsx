import Image from 'react-bootstrap/Image'
import mainCirculo from'../images/mainCirculo.png'
import { Footer } from './Footer'
import { MainBody } from './MainBody'
import { MainContacto } from './MainContacto'
import { ArrowUp } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export const Main = () => {
    return(

       <>
        <div id='header' className="d-flex flex-wrap align-items-center container mainContainer justify-content-between">
            <div>
                    <h2 id="sobreMi" className="tituloMain fw-bold mb-4">Una meta sin un plan es solo un deseo</h2>
                
                    <div className='textMain'>
                        <p>Hola! Me llamo Samira y soy entrenadora.</p>
                        <p>Siempre me apasionó entrenar y tener una vida saludable, motivo por el cual quise aprender más acerca del entrenamiento y sobre distintas disciplinas.</p>
                        <p>Con el tiempo entendí que la alimentación, entrenamiento y descanso son parte de un todo, y por eso decidí certificarme también en nutrición deportiva.</p>
                    </div>
                    <Link to="/programas"><button className="botonMain btn btn-light rounded-pill px-5 fw-bold mt-4">Ver programas</button></Link>
            </div>
            <div>
            <Image className='mainCirculo' src={mainCirculo} fluid />
            </div>
        </div>

        <MainBody/>
        <MainContacto/>
        <div className="text-end container"><a href='#header'><ArrowUp className='footer__arrow' size={25} /></a></div>
        <Footer/>

       </>

    )
}