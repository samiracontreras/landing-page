import * as React from 'react'
import Image from 'react-bootstrap/Image'
import { Col, Container, Row, Form } from 'react-bootstrap'
import line from '../images/line.svg'
import data from '../programas.json'
import { CardProgramas } from './CardProgramas'
import { useCart } from '../context/CartContext'
import Confirmacion from './Confirmacion'
// Imgs
// import programaMensual from '../images/programa-1.jpg'
// import EightWeeksProgram from '../images/programa-2.jpg'
// import TwelveWeeksProgram from '../images/programa-3.jpg'
// import clasesAdvance from '../images/programa-4.jpg'
// import TwelveClasesOnline from '../images/programa-5.jpg'
// import TwentyClasesOnline from '../images/programa-6.jpg'
// import recetario from '../images/programa-7.jpg'
// import giftCard from '../images/programa-8.jpg'

const Carrito = () => {
    const { cart, removeItem, getTotal } = useCart();
    const remove = async (id) => removeItem(id);
    const total = getTotal();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Container className='mainContainer'>
            <Confirmacion show={open} handleClose={handleClose} titulo={'Gracias por tu compra!'} subtitulo={'Revisá el mail que ingresaste recién para confirmar el pago'} />
            <Row className="d-flex flex-column align-items-start mb-5">
                <h2 className="tituloMain pt-2 text-center fw-bold">Finalizá tu compra</h2>
                <Image className='mainBody--line my-2' src={line} fluid />
                <h5 className='text-center'>Al finalizar revisá tu correo!</h5>
            </Row>
            <Row>
                <Col xs={12} lg={6} className="d-flex justify-content-center">
                    <Form action="mailto:samira.contreras93@gmail.com" method="get" className="w-100 mx-5">
                        <Form.Group className="mb-3">
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-5">
                            <Form.Label>Correo</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <button type="submit" className="btn-add-to-cart" onClick={handleOpen}>Finalizar compra</button>
                    </Form>
                </Col>
                <Col xs={12} lg={6}>
                    <hr />
                    {cart.length > 0
                        ? cart.map((item, index) =>
                            <Row key={index} className="my-2 d-flex align-items-center">
                                <Col className="d-flex justify-content-center text-center fs-5"><img src={item.item.imagen} alt="fotito" width={71} height={71} /></Col>
                                {/* <Col className="d-flex justify-content-center text-center fs-5"><span style={{ width: '70px', height: '70px', backgroundColor: '#ccc' }} /></Col> */}
                                <Col className="d-flex justify-content-center text-center fs-5">{item.item.titulo}</Col>
                                <Col className="d-flex justify-content-center text-center fs-5">$ {item.item.precio}</Col>
                                <Col className="d-flex justify-content-center text-center fs-5"><span className="iconoCarrito" onClick={() => remove(item.itemId)}>X</span></Col>
                            </Row>
                        )
                        : <Row className="text-center"><h5>Todavía no hay productos en el carrito</h5></Row>}

                    <hr />
                    <Row className="mx-5">
                        <Col>
                            <h4>Total</h4>
                            <h6>*IVA incluido en el valor total</h6>
                        </Col>
                        <Col><h4 className="ms-4">$ {total}</h4></Col>
                    </Row>
                </Col>
            </Row>
            <hr />
            <Row style={{ maxWidth: '325px' }}>
                <CardProgramas item={data.extras[1]} tipo='extras' />
            </Row>
        </Container>
    )
}

export default Carrito