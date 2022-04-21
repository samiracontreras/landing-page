import { Whatsapp, Instagram, Youtube } from 'react-bootstrap-icons';
import ReactWhatsapp from 'react-whatsapp';

export const Footer = () => {

    return (

        <div className='footer__container'>
            <div className="container">

                <div className="d-flex flex-wrap justify-content-center mt-5 p-5">
                    <div className='mx-5 footer__container--marginItems'><Whatsapp size={20} /><ReactWhatsapp className="reactWhatsapp ms-1" number="+54 11 6139-2929" message="Quiero contactarme">+54 11 6139-2929</ReactWhatsapp></div>
                    <div className='mx-5 footer__container--marginItems'><Instagram size={20} /> instagram.com/i.m.samira</div>
                    <div className='mx-5 footer__container--marginItems'><Youtube size={20} /> Youtube</div>
                </div>

                <div className="d-flex flex-wrap justify-content-between mt-2">
                    <div className='mx-5 footer__container--marginItems'>
                        <h5 className='fw-bold mb-3'>Planes de Entrenamiento</h5>
                        <p>Personalizado a distancia</p>
                        <p>Advance</p>
                    </div>

                    <div className='mx-5 footer__container--marginItems'>
                        <h5 className='fw-bold mb-3'>Programas</h5>
                        <p>12 semanas de Entrenamiento</p>
                        <p>12 semanas Advance</p>
                    </div>

                    <div className='mx-5 footer__container--marginItems'>
                        <h5 className='fw-bold mb-3'>Clases</h5>
                        <p>Online</p>
                        <p>Presenciales grupales</p>
                    </div>
                </div>
            </div>
        </div>

    )
}