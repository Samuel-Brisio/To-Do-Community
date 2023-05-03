import React from "react";
import AlertDelete from "./AlertDelete";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Dropdown from "react-bootstrap/esm/Dropdown";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import AddItem from "./AddItemForm";
import items from "../data/items";

const ListCard = (props) => {
    const [alertShow, setAlertShow] = React.useState(false);

    const [itemFormShow, setItemFormShow] = React.useState(false);

    return (
        <Card style={{ display: "flex" }}>
            <Card.Header>
                <Row className="align-items-center">
                    <Col>{props.name}</Col>
                    <Col xs="auto">
                        <DropdownButton
                            id="dropdown-basic-button"
                            variant="dark"
                        >
                            <Dropdown.Item
                                action
                                onClick={() => setItemFormShow(true)}
                            >
                                Adicionar item
                            </Dropdown.Item>
                            <AddItem
                                show={itemFormShow}
                                onHide={() => setItemFormShow(false)}
                            />
                            <Dropdown.Item
                                action
                                onClick={() => setAlertShow(true)}
                            >
                                Deletar lista
                            </Dropdown.Item>
                            <AlertDelete
                                show={alertShow}
                                onHide={() => setAlertShow(false)}
                            />
                        </DropdownButton>
                    </Col>
                </Row>
            </Card.Header>
            <ListGroup variant="flush">
                {Array.from(items).map((item, idx) => (
                    <ListGroup.Item>
                        <Row className="align-items-center">
                            <Col>{item.name}</Col>
                            <Col xs="auto">
                                <DropdownButton
                                    id="dropdown-basic-button"
                                    variant="outline-dark"
                                >
                                    <Dropdown.Item>Riscar item</Dropdown.Item>
                                    <Dropdown.Item
                                        action
                                        onClick={() => setAlertShow(true)}
                                    >
                                        Deletar item
                                    </Dropdown.Item>
                                    <AlertDelete
                                        show={alertShow}
                                        onHide={() => setAlertShow(false)}
                                    />
                                </DropdownButton>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
};

export default ListCard;
