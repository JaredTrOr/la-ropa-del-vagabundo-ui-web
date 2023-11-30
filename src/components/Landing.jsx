import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import landingImage from '../assets/landing.png'
import { Link } from "react-router-dom"

export function Landing() {
    return (
        <>
            <div className="main-landing">
                <Container className="p-5">
                    <Row>
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h1 className="title">La ropa mas genial y variada</h1>
                                <p>Descubre nuestra galeria de ropa y se parte de nosotros</p>

                                <Link to="/">
                                    <Button variant="success" type="button">
                                        Registrar
                                    </Button>
                                </Link>
                                

                                <Button variant="success m-3" type="button">
                                    Ofertas
                                </Button>
                            </div>
                            
                        </Col>

                        <Col lg="6" className="d-flex align-items-center">
                            <img src={landingImage} alt="" height="500" className="img-fluid"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}