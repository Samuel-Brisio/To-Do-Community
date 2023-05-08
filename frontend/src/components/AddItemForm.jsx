import { useState } from "react";
import Modal from "react-bootstrap/esm/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import api from "../Services/api";

function AddItem(props) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");

    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
    function handleSubmit(event){
        console.log('Handle Submit OK!');
        
        api.get("/items", {name, quantity})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("erro: ", err);
            })
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Form className="p-3">
                <Row>
                    <Col xs={7}>
                        <Form.Control
                        placeholder="Nome"
                        value={name}
                        onChange={handleNameChange}/>
                    </Col>
                    <Col>
                        <Form.Control
                        placeholder="Quantidade" 
                        value={quantity}
                        onChange={handleQuantityChange}/>
                    </Col>
                    <Col xs="auto">
                        <Button
                        variant="dark"
                        type="submit"
                        className="mb-2"
                        onClick={handleSubmit}
                        >
                            +
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Modal>
    );
}

export default AddItem;
