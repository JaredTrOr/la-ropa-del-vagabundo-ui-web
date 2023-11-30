import { Navbar as NavbarBootstrap } from "react-bootstrap"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import logo from "../assets/logo.png"

export function Navbar () {
    return (
        <>
            <NavbarBootstrap collapseOnSelect expand="lg" bg="light">
                <Container>
                    <div className="logo-title">
                        <img src={logo} alt="logo" height="80"/>
                        La Ropa del Vagabundo
                    </div>

                    <div className="navegation">
                        <InputGroup className="">
                            <InputGroup.Text className="input-height" id="basic-addon1"><i className="fa-solid fa-magnifying-glass"></i></InputGroup.Text>
                            <Form.Control
                                className="input-height"
                                placeholder="Buscar"
                                aria-label="Buscar"
                                aria-describedby="basic-addon1"
                            />
                            <i className="fa-regular fa-heart  m-2"></i>
                            <i className="fa-regular fa-user m-2"></i>
                            <i className="fa-solid fa-bag-shopping m-2"></i>
                        </InputGroup>
                    </div>
                </Container>
            </NavbarBootstrap>

            <div className="under-navbar bg-light">
                <Container className="pb-3">
                    <Row className="justify-content-md-center">
                        <Col lg="2" className="text-center mt-2">
                            Hombre <i className="fa-solid fa-caret-down"></i>
                        </Col>
                        <Col lg="2" className="text-center mt-2">
                            Mujer <i className="fa-solid fa-caret-down"></i>
                        </Col>
                        <Col lg="2" className="text-center mt-2">
                            Niños <i className="fa-solid fa-caret-down"></i>
                        </Col>
                        <Col lg="2" className="text-center mt-2">
                            Crea tu outfit <i className="fa-solid fa-caret-down"></i>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </>
    )
}