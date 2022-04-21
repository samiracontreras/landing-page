import * as React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Confirmacion = ({ show, handleClose, titulo, subtitulo }) => {
  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header className="justify-content-center">
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{subtitulo}</Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Button className="btn-modal" onClick={handleClose}>
          Continuar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Confirmacion