import Modal from 'react-bootstrap/esm/Modal';
import Button from 'react-bootstrap/Button';

function AlertDelete(props) {
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
          <h4>Tem certeza de que deseja deletar isto?</h4>
          <p>
            Esta é uma ação irreversível.
          </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={props.delete}>Deletar</Button>
            <Button variant="outline-dark" onClick={props.onHide}>Cancelar</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default AlertDelete;
