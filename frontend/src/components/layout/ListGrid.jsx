import ListCard from "../ListCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import { useState, useEffect } from "react";
// import lists from "../../data/lists";

import api from '../../Services/api.js';

function ListGrid() {

    const [lists, setLists] = useState([]);

    function refreshLists() {
        api.get("lists/group/1")
            .then((res) => {
                console.log(res.data);
                setLists(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=> {
        refreshLists();
    }, [])


    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
                {Array.from(lists).map((list, idx) => (
                    <Col key={idx}>
                        <ListCard refreshLists={refreshLists} id={list.id} name={list.name} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ListGrid;
