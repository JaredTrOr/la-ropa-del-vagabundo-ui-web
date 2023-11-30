import { Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button'
import landingImage from '../assets/landing.png'

export function Landing() {
    return (
        <>
            <div className="main-landing">
                <Container className="p-5">
                    <Row>
                        <Col className="d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h1 className="title">La ropa mas genial y variada</h1>
                                <p>Descubre nuestra galeria de ropa</p>

                                <Button variant="success" type="button">
                                    Comprar
                                </Button>

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