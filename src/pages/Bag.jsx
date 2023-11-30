import { Button, Col, Container, Row } from "react-bootstrap"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import image1 from "../assets/clothes/image1.png"
import image2 from "../assets/clothes/image2.png"
import { CardBag } from "../components/CardBag"
import { Header } from "../components/Header"
import { Link } from "react-router-dom"

export function Bag() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Container>
                <Row className="mt-5 text-center">
                    <Col className="d-flex justify-content-center gap-4">
                        <div>
                            <div className="circle-selection d-flex justify-content-center align-items-center">
                                1
                            </div>
                            <p className="mt-3">Bolsa</p>
                        </div>
                        
                        <div>
                            <div className="circle-outline d-flex justify-content-center align-items-center">
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
                        <CardBag image={image1}/>   
                        <CardBag image={image2}/>   
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
                                <Link to="/shipment" className="width-100">
                                    <Button variant="success width-100">
                                        PAGO
                                    </Button>
                                </Link>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <Footer/>  
        </>
    )
}