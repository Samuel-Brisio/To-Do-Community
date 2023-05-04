import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddList = (props) => {
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
                    />
                    <Button variant="dark" id="button-addon2">
                        +
                    </Button>
                </InputGroup>
            </div>
        </>
    );
};

export default AddList;
