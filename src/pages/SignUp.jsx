import { Navbar } from "../components/Navbar"
import { Header } from "../components/Header"
import { Container, Row, Col } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { Footer } from "../components/Footer"

export function SignUp() {

    const toLogin = () => {

    }

    return (
        <>
            <Header/>
            <Navbar/>

            <Container>
                <Row className="mt-3 justify-content-md-center">
                    <Col lg="6" className="text-center">
                        <img src={logo} alt="" />
                        <br />
                        <h3>La Ropa del Vagabundo</h3>
                    </Col>
                </Row>
            </Container>

            <Container className="container-form mt-3 p-5">
                <Form>
                    <h2 className="bold">Registro</h2>

                    <Form.Group className="mt-5 mb-4" controlId="formBasicEmail">
                        <Form.Label className="bold">Nombre:</Form.Label>
                        <Form.Control type="text" placeholder="Escriba su nombre" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className="bold">Apellidos:</Form.Label>
                        <Form.Control type="text" placeholder="Escriba sus apellidos" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className="bold">Email:</Form.Label>
                        <Form.Control type="email" placeholder="Escriba su email" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formBasicPassword">
                        <Form.Label className="bold">Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Escriba su contraseña" />
                    </Form.Group>

                    <Row className="mt-3 justify-content-md-center">
                        <Col lg="6" className="text-center">
                            <p>¿Ya tienes una cuenta? <Link to="log-in" className="text-success">inicio sesión</Link> </p>
                            <br />
                            <Button variant="success" type="button" onClick={toLogin}>
                                Registro
                            </Button>
                            <br/>
                            <br/>
                            <i className="fa-brands fa-google fa-3x m-3"></i>
                            <i className="fa-brands fa-facebook fa-3x m-3"></i>
                        </Col>
                    </Row>
                    
                </Form>
            </Container>

            <Footer/>
        </>
    )
}