import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddList = (props) => {
    return (
        <>
            <InputGroup className="p-5" size={props.size}>
                <Form.Control
                    placeholder={props.placeholder}
                    aria-label="name"
                    aria-describedby="basic-addon2"
                />
                <Button variant="dark" id="button-addon2">
                    +
                </Button>
            </InputGroup>
        </>
    );
};

export default AddList;
