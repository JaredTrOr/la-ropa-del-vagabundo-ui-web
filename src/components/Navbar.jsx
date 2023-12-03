import { Button, Navbar as NavbarBootstrap } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export function Navbar () {
    return (
        <>
            <NavbarBootstrap collapseOnSelect expand="lg" bg="light">
                <Container>
                    <div className="logo-title">
                        <Link to="/landing" className="no-link-style-black">
                            <img src={logo} alt="logo" height="80"/>
                            La Ropa del Vagabundo
                        </Link>
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
                            {/* <i className="fa-regular fa-heart  m-2"></i> */}

                            <Link className="ml-3" to="/">
                                <Button variant="success">
                                    Registrate
                                </Button>
                            </Link>

                            <Link to="/profile" className="text-dark">
                                <i className="fa-regular fa-user m-2"></i>
                            </Link>

                            <Link to="/bag" className="text-dark">
                                <i className="fa-solid fa-bag-shopping m-2"></i>
                            </Link>
                        </InputGroup>
                    </div>
                </Container>
            </NavbarBootstrap>

            <div className="under-navbar bg-light">
                <Container className="pb-3">
                    <Row className="justify-content-md-center">
                        <Col lg="2" className="text-center mt-2">
                            <Link to="/men-clothes" className="no-link-style-black">
                                Hombre <i className="fa-solid fa-caret-down"></i>
                            </Link>
                            
                        </Col>
                        <Col lg="2" className="text-center mt-2">
                            <Link to="/women-clothes" className="no-link-style-black">
                                Mujer <i className="fa-solid fa-caret-down"></i>
                            </Link>
                        </Col>
                        <Col lg="2" className="text-center mt-2">
                            <Link to="/children-clothes" className="no-link-style-black">
                                Niños <i className="fa-solid fa-caret-down"></i> 
                            </Link>
                        </Col>
                        <Col lg="2" className="text-center mt-2">
                            <Link to="/discounts" className="no-link-style-black">
                                Crea tu outfit <i className="fa-solid fa-caret-down"></i>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            
        </>
    )
}