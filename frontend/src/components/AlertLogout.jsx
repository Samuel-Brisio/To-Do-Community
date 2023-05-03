import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/Button';

function AlertLogout(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Atenção!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Tem certeza de que deseja sair?</h4>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" href="welcome" >Sair</Button>
            <Button variant="outline-dark" onClick={props.onHide}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default AlertLogout;
