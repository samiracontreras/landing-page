import Image from 'react-bootstrap/Image'
import logoPrincipal from '../images/logo_principal.png'
import fotoCambios from '../images/cambios_dos.jpg'
import fotoCambiosDos from '../images/cambios_uno.jpg'
import fotoCambiosTres from '../images/cambios_tres.jpg'
import galletitas from '../images/galletitas.jpg'
import panqueques from '../images/panqueques.jpg'
import panNube from '../images/pan_nube.jpg'
import line from '../images/line.svg'

export const MainBody = () => {
    return(

       <>
       <div className="container bg-white mt-5 mainBody p-4">
            <Image className='mainBody--logo' src={logoPrincipal} fluid />

            <h3 className='text-center mt-3 mainBody--title'>Como siempre que haces algo que te apasiona, lo demás llega solo</h3>

            <Image className='mainBody--line mt-4' src={line} fluid />

            <div className='d-flex flex-wrap justify-content-between mt-5 align-items-center'>
                <div className='mainBody-text'>
                    <p>Los trabajos aparecieron sin buscarlos, y cada vez más.</p>
                    <p>Desde hace dos años me estoy dedicnado casi de forma exclusiva al coaching online, y gracias a eso chicas de todo el país hoy entrenan con mis rutinas y mis clases virtuales</p>
                    <p>Todavía me parece un sueño, de los más lindos, jamás pensado pero que me hace muy feliz.</p>
                </div>
                <div className='d-flex flex-wrap align-items-start'>
                    <div className='mainBody--card m-2 p-2'>
                        <Image className='mainBody--card--img' src={fotoCambios} fluid />
                        <div className='mainBody--card--text rounded mt-3 p-1 text-center pt-3'><blockquote>Cuatro meses entrenando juntas: <span className='fst-italic'>"Pude recuperar la confianza en mi misma"</span></blockquote></div>
                    </div>
                    <div className='mainBody--card m-2 p-2'>
                        <Image className='mainBody--card--img' src={fotoCambiosDos} fluid />
                        <div className='mainBody--card--text rounded mt-3 p-1 text-center pt-3'><blockquote>Dos meses entrenando juntas: <span className='fst-italic'>"Estoy feliz, si supieras hace cuánto tiempo no me ponía un short, vivía en jeans"</span></blockquote></div>
                    </div>
                    <div className='mainBody--card m-2 p-2'>
                        <Image className='mainBody--card--img' src={fotoCambiosTres} fluid />
                        <div className='mainBody--card--text rounded mt-3 p-1 text-center pt-3'><blockquote>Un año y medio entrenando juntos: <span className='fst-italic'>"Por primera vez puedo ver mis abs!!!"</span></blockquote></div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <Image className='mainBody--foodImg m-5' src={galletitas} fluid />
                <Image className='mainBody--foodImg m-5' src={panqueques} fluid />
                <Image className='mainBody--foodImg m-5' src={panNube} fluid />
            </div>

       </div>

       </>

    )
}