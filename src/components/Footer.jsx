import { Col, Container, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer className="bg-main-green text-light p-5 mt-5">
            <Container>
                <Row className="">
                    <Col>
                        <div>
                            <img src={logo} alt="" height="80"/>
                            La ropa del vagabundo
                        </div>
                        
                        <div className="mt-3">
                            Unete a nuestra familia
                            <br />
                            <i className="fa-brands fa-facebook fa-2x m-3"></i>
                            <i className="fa-brands fa-instagram fa-2x m-3"></i>
                            <i className="fa-brands fa-twitter fa-2x m-3"></i>
                        </div>

                        <div>
                            <Form.Control type="text" placeholder="Tu dirección de correo" />
                            <Button variant="light" type="button" className="mt-3">
                                Registro
                            </Button>
                        </div>

                    </Col>
                        
                    <Col>
                        <h3>Tienda</h3>
                        <div className="mb-2"><Link className="no-link-style-white">Colección para hombre</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">Colección para mujer</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">Colección para niños</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">Chatbots</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">Ofertas especiales</Link></div>
                    </Col>

                    <Col>
                        <h3>Acerca de nosotros</h3>
                        <div className="mb-2"><Link className="no-link-style-white">Información</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">Envios</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">Métodos de pago</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">MSI</Link></div>
                    </Col>

                    <Col>
                        <h3>Ayuda y contáctos</h3>
                        <div className="mb-2"><Link className="no-link-style-white">Soporte</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">Por teléfono</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">Por email</Link></div>
                        <div className="mb-2"><Link className="no-link-style-white">FAQ</Link></div>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col>
                        <Link className="link-style-white">Términos y condiciones</Link> | 
                        <Link className="link-style-white">Política de privacidad</Link> |
                        <Link className="link-style-white">Configuración de cookies</Link>
                    </Col>
                </Row>

                <hr />

                <Row >
                    <Col className="text-light"> &copy; Todos los derechos reservados</Col>
                </Row>
            </Container>
        </footer>
    )
}