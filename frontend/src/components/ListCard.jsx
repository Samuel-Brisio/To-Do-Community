import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ListCard() {
    const alertClicked = () => {
        alert("You clicked the third ListGroupItem");
    };

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Header>
                <Row className="align-items-center">
                    <Col xs="auto">Lista</Col>
                    <Col xs="auto">
                        <Button variant="outline-dark">Deletar</Button>
                    </Col>
                </Row>
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Nome 1</ListGroup.Item>
                <ListGroup.Item>Nome 2</ListGroup.Item>
                <ListGroup.Item action onClick={alertClicked}>
                    Nome 3
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

export default ListCard;
