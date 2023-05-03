import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";

function AddItem(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form className="p-3" >
                <Row >
                    <Col xs={7}>
                        <Form.Control placeholder="Nome" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Quantidade" />
                    </Col>
                    <Col xs="auto">
                        <Button variant="dark" type="submit" className="mb-2">
                            +
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

export default AddItem;
