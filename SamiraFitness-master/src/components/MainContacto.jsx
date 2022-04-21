import * as React from 'react';
import Image from 'react-bootstrap/Image'
import line from '../images/line.svg'
import Confirmacion from './Confirmacion'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export const MainContacto = ({titulo = "¿Querés entrenar de forma personalizada online?", subtitulo = "Consultame precios y disponibilidad horaria"}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [valorDisabled, setValorDisabled] = useState(true)

    return (
        <>
        <Confirmacion show={open} handleClose={handleClose} titulo={'Listo!'} subtitulo={'Tu consulta fue enviada con éxito. A la brevedad te estaré respondiendo'} />
        <div id='contacto' className='container mt-5'>
            <h3 className='text-center mainBody--title'>{titulo}</h3>
            <p className="text-center mainContacto--bajada">{subtitulo}</p>
            <Image className='mainBody--line mt-3' src={line} fluid />

            <Form action="mailto:samira.contreras93@gmail.com" method="get" className='mt-5'>
                <div className='mainContacto--form'>
                    <Form.Group className="mb-3 mainContacto--form--nombre" >
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3 mainContacto--form--apellido" >
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3 mainContacto--form--email" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3 mainContacto--form--direccion" >
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3 mainContacto--form--consulta" >
                        <Form.Label>Dejá tu consulta</Form.Label>
                        <Form.Control className='mainContacto--form--consulta__resize' as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="mb-3 mainContacto--form--sexo">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Select className='mainContacto__form__sexo--ancho'>
                            <option>Femenino</option>
                            <option>Masculino</option>
                            <option>Otro</option>
                        </Form.Select>
                        <Form.Check onClick={() => setValorDisabled((prevCheck) => !prevCheck)} className='mt-3' type="checkbox" label="Acepto términos y condiciones" />
                    </Form.Group>
                    <div className='mainContacto--form--boton'>
                        <Button className='botonMain btn-light rounded-pill px-5 fw-bold mt-4' disabled={valorDisabled} variant="primary" type="button" onClick={handleOpen}>
                            Enviar
                        </Button>
                    </div>

                </div>
            </Form>
        </div>
        </>
    )
}