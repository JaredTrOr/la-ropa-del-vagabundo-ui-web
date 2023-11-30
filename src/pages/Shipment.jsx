import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import { NavbarLogo } from "../components/NavbarLogo"

export function Shipment() {
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
                                2
                            </div>
                            <p className="mt-3">Envío</p>
                        </div>

                        <div>
                            <div className="circle-outline d-flex justify-content-center align-items-center">
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
                        <Container className="container-form mt-3 p-5">
                            <Form>
                                <h2 className="bold">Direcciones de envío</h2>

                                <Form.Group className="mt-5 mb-4" controlId="formBasicPassword">
                                    <Form.Label className="bold">Nombre:</Form.Label>
                                    <Form.Control type="text" placeholder="Escriba su nombre" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className="bold">Apellidos:</Form.Label>
                                    <Form.Control type="text" placeholder="Escriba sus apellidos" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className="bold">Calle y número:</Form.Label>
                                    <Form.Control type="text" placeholder="Escriba su calle y número" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className="bold">Colonia:</Form.Label>
                                    <Form.Control type="text" placeholder="Escriba su el nombre de su colonia" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className="bold">Estado/Provincia:</Form.Label>
                                    <Form.Control type="text" placeholder="Escriba su estado" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className="bold">Código postal:</Form.Label>
                                    <Form.Control type="text" placeholder="Escriba su código postal" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className="bold">País:</Form.Label>
                                    <Form.Control type="text" placeholder="Escriba el nombre de su país" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formBasicPassword">
                                    <Form.Label className="bold">Teléfono:</Form.Label>
                                    <Form.Control type="text" placeholder="Escriba su número de teléfono" />
                                </Form.Group>

                            </Form>
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

                            <Row className="mt-5">
                                <Link to="/payment" className="width-100">
                                    <Button variant="success width-100">
                                        VALIDAR PAGO
                                    </Button>
                                </Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}