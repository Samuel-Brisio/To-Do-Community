import ListCard from "./ListCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import lists from "../../data/lists";

function ListGrid() {
    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {Array.from(lists).map((list, idx) => (
                    <Col key={idx}>
                        <ListCard name={list.name} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ListGrid;
