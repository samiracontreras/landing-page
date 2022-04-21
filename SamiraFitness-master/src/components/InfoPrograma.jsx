import * as React from 'react'
import { Footer } from './Footer'
import { Col, Container, Row, Stack } from 'react-bootstrap'
import Boton from './Boton'
import { CardProgramas } from './CardProgramas'
import data from '../programas.json'
import { MainContacto } from './MainContacto'
import { useParams } from 'react-router-dom'
// Imagenes
import programaMensual from '../images/programa-1.jpg'
import EightWeeksProgram from '../images/programa-2.jpg'
import TwelveWeeksProgram from '../images/programa-3.jpg'
import clasesAdvance from '../images/programa-4.jpg'
import TwelveClasesOnline from '../images/programa-5.jpg'
import TwentyClasesOnline from '../images/programa-6.jpg'
import recetario from '../images/programa-7.jpg'
import giftCard from '../images/programa-8.jpg'

const InfoPrograma = () => {
    let { tipo, programa } = useParams();
    const [id, setId] = React.useState(0)
    const [titulo, setTitulo] = React.useState("");
    const [deQue, setDeQue] = React.useState("");
    const [aQuien, setAQuien] = React.useState("");
    const [beneficios, setBeneficios] = React.useState("");
    const [imagen, setImagen] = React.useState("");
    const [tmb, setTmb] = React.useState([]);

    React.useEffect(() => {
        let programs;
        let program;
        switch (tipo) {
            case 'programas':
                programs = data.programas.filter(prog => prog.url === programa);
                setTmb(data.programas.filter(prog => prog.url !== programa));
                program = programs[0];
                break;
            case 'clases':
                programs = data.clases.filter(prog => prog.url === programa);
                setTmb(data.clases.filter(prog => prog.url !== programa));
                program = programs[0];
                break;
            case 'extras':
                programs = data.extras.filter(prog => prog.url === programa);
                setTmb(data.extras.filter(prog => prog.url !== programa));
                program = programs[0];
                break;
            default:
                console.error('Mal hecho pa');
                break;
        }
        setId(program)
        setTitulo(program.titulo)
        setDeQue(program.deQue);
        setAQuien(program.aQuien);
        setBeneficios(program.beneficios);
        switch (program.imagen) {
            case 'programaMensual':
                setImagen(programaMensual)
                break;
            case 'EightWeeksProgram':
                setImagen(EightWeeksProgram)
                break;
            case 'TwelveWeeksProgram':
                setImagen(TwelveWeeksProgram)
                break;
            case 'clasesAdvance':
                setImagen(clasesAdvance)
                break;
            case 'TwelveClasesOnline':
                setImagen(TwelveClasesOnline)
                break;
            case 'TwentyClasesOnline':
                setImagen(TwentyClasesOnline)
                break;
            case 'recetario':
                setImagen(recetario)
                break;
            case 'giftCard':
                setImagen(giftCard)
                break;
            default:
                setImagen(programaMensual)
                break;

        }
        console.log(program)
    }, [tipo, programa])

    return (
        <Container>
            <Row className="d-flex flex-column align-items-start">
                <h2 className="titulo fw-bold">{titulo}</h2>
                <hr style={{ width: '100%' }} />
            </Row>
            <Row>
                <Col xs={12} lg={7}>
                    <Row>
                        <h3>¿De que se trata?</h3>
                        <p>{deQue}</p>
                    </Row>
                    <Row>
                        <h3>¿A quién va dirigido?</h3>
                        <p>{aQuien}</p>
                    </Row>
                    <Row>
                        <h3>Beneficios</h3>
                        <p>{beneficios}</p>
                    </Row>
                </Col>
                <Col xs={12} lg={5} className="d-flex flex-column align-items-center justify-content-start">
                    <img src={imagen} alt="la fotito" width={380} height={380} className="mb-4" />
                    <Boton item={id} />
                </Col>
            </Row>
            <Row className="my-5">
                <h3>También te puede interesar:</h3>
                <hr />
                <Stack direction="horizontal" gap={3}>
                    {tmb?.map((programa, index) => <CardProgramas item={programa} tipo={tipo} />)}
                </Stack>
            </Row>
            <hr style={{ width: '100%' }} />
            <Row>
                <MainContacto titulo="¿Todavía tenes dudas?" subtitulo="Consultame y a la brevedad te estaré respondiendo" />
            </Row>
            <Footer />
        </Container>
    )
}

export default InfoPrograma