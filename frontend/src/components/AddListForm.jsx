import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from 'react';
import api from "../Services/api";
import "./layout/ListGrid";
import "./ListCard";
//import { ListGroup } from "react-bootstrap";

const AddList = (props) => {

    const [listName, setListName] = useState('');

    function handleListNameChange(event){
        setListName(event.target.value)
    }
    function handleAddList(event){
        console.log('Handle Submit OK! '+listName);
        api.post('/lists/', {listName, groupId : 1})
            .then(function (response){
                console.log('Handle THEN OK! ');
                console.log(listName);
                console.log(event)
                response.refreshLists();
            })
            .catch(function (err) {
                console.log("Não foi possível adicionar item na lista "+props.listName,"!!!")
            });
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyItems: "center",
                    minWidth: "12rem",
                    marginLeft: "19.5rem",
                    marginRight: "19.25rem",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                }}
            >
                <InputGroup size={props.size}>
                    <Form.Control
                        onChange={handleListNameChange}
                        value={listName}
                        placeholder={props.placeholder}
                        aria-label="name"
                        aria-describedby="basic-addon2"
                    />
                    <Button onClick={handleAddList} variant="dark" id="button-addon2">
                        +
                    </Button>
                </InputGroup>
            </div>
        </>
    );
};

export default AddList;
