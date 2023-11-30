import { Button, Col, Container, Row } from "react-bootstrap"
import Form from 'react-bootstrap/Form'
import imageVisa from "../assets/visa.png"
import imageMastercard from "../assets/mastercard.png"
import { NavbarLogo } from "../components/NavbarLogo"

export function Payment() {
    return (
        <>
            <NavbarLogo/>
            <Container>
                <Row className="mt-5 text-center">
                    <Col className="d-flex justify-content-center gap-4">
                        <div>
                            <div className="circle-selection d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <p className="mt-3">Bolsa</p>
                        </div>

                        <div>
                            <div className="circle-selection d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            <p className="mt-3">Envío</p>
                        </div>

                        <div>
                            <div className="circle-selection d-flex justify-content-center align-items-center">
                                3
                            </div>
                            <p className="mt-3">Pago</p>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-5">
                <Row>
                    <Col className="col-lg-6">
                        <Container className="card p-5 text-center">
                            <h3 className="bold">SELECCIONE UN MÉTODO DE PAGO</h3>
                        </Container>

                        <Container className="mt-5 card p-5">
                            <Row className="text-center">
                                <Col>
                                    <h4 className="bold">TARJETAS DE CRÉDITO / DÉBITO</h4>
                                </Col>

                                <Col>
                                    <img className="m-2" src={imageVisa} alt="" />
                                    <img className="m-2" src={imageMastercard} alt="" />
                                </Col>
                            </Row>

                            <Row className="mt-5">
                                <p>Información de la tarjeta</p>
                                <Container className="">
                                    <Form>
                                        <Form.Group className="mt-2 mb-4" controlId="formBasicPassword">
                                            <Form.Control type="email" placeholder="Escriba su nombre" />
                                        </Form.Group>

                                        <Form.Group className="mb-4" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="Número de tarjeta" />
                                        </Form.Group>

                                        <Form.Group className="mb-4 width-50" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="MM/YY*" />
                                        </Form.Group>
                
                                        <Form.Group className="mb-4 width-50" controlId="formBasicPassword">
                                            <Form.Control type="password" placeholder="CVC*" />
                                        </Form.Group>

                                        <Row>
                                        <Button variant="success" type="button">
                                            CONFIRMAR PEDIDO
                                        </Button>
                                        </Row>

                                    </Form>
                                </Container>
                            </Row>
                        </Container>
                    </Col>

                    <Col className="col-lg-6">
                        <Container className="card p-5">
                            <Row>
                                <Col>
                                    <p className="bold">2 PRODUCTOS</p>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <p className="bold">MEX $370.00</p>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col>
                                    <p className="bold">Envio</p>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <p className="bold">MEX $0.00</p>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col>
                                    <p className="bold">IVA</p>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <p className="bold">MEX $46.00</p>
                                </Col>
                            </Row>

                            <Row className="mt-3">
                                <Col>
                                    <p className="bold">TOTAL</p>
                                </Col>
                                <Col className="d-flex justify-content-end">
                                    <p className="bold">MEX $406.00</p>
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}