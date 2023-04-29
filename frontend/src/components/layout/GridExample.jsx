import ListCard from "../ListCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample() {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col key={idx}>
                    <ListCard />
                </Col>
            ))}
        </Row>
    );
}

export default GridExample;
