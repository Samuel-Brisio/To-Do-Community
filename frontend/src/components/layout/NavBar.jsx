import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top">
                <Container>
                    <Navbar.Brand href="home">
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
                            <Nav.Link href="home">Listas</Nav.Link>
                            <Nav.Link href="about">Sobre</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <NavDropdown title="Nome de Usuário" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    Configurações
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Adicionar Usuário
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    Alternar Conta
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Sair
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
