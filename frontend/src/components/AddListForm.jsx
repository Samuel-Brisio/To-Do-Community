import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import api from "../Services/api.js";

const AddList = (props) => {
    const [listName, setListName] = useState("");

    function handleListNameChange(event){
        setListName(event.target.value)
    }
    function handleSubmit(event){
        console.log('Handle Submit OK!');
        
        api.get("/users", {listName})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log("erro: ", err);
            })
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
                        placeholder={props.placeholder}
                        aria-label="name"
                        aria-describedby="basic-addon2"
                        type="text"
                        name="listName"
                        value={listName}
                        onChange={handleListNameChange}
                    />
                    <Button variant="dark" id="button-addon2" onClick={handleSubmit}>
                        +
                    </Button>
                </InputGroup>
            </div>
        </>
    );
};

export default AddList;
