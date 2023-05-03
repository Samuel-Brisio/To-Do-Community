import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import AlertLogout from "../AlertLogout";

function NavBar() {
    const [alertShow, setAlertShow] = React.useState(false);

    return (
        <>
            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="/" id="justify-content-center">
                        <img
                            alt=""
                            src={"/img/logo.svg"}
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{" "}
                        VIP List
                    </Navbar.Brand>
                    <Navbar.Collapse id="justify-content-center">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Listas</Nav.Link>
                            <Nav.Link href="about">Sobre</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavDropdown
                                title="Nome de Usuário"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="settings">
                                    Configurações
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item
                                    action
                                    onClick={() => setAlertShow(true)}
                                >
                                    Sair
                                </NavDropdown.Item>
                                <AlertLogout
                                    show={alertShow}
                                    onHide={() => setAlertShow(false)}
                                />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
