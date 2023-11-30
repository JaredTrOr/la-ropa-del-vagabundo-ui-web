import { Col, Container, Row } from "react-bootstrap"
import { Navbar } from "../components/Navbar"
import { Collection } from "../components/Collection"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export function Discounts() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Container className="mt-7"> 
            <Row className="text-center">
                <h2 className="bold">Ofertas</h2>
                <p>Rebajas de nuestra galeria</p>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h2>Filtros y calificaciones</h2>

                </Col>

                <Col className="d-flex justify-content-end">
                    Filtros
                </Col>
            </Row>

            <Collection/>
            <Collection/>
            
            <Container>
                <Row className="mt-5 text-center">
                    <Col className="d-flex justify-content-center gap-4">
                        <div className="circle-selection d-flex justify-content-center align-items-center">
                            1
                        </div>
                        <div className="circle-outline d-flex justify-content-center align-items-center">
                            2
                        </div>
                        <div className="circle-outline d-flex justify-content-center align-items-center">
                            3
                        </div>
                        <div className="circle-outline d-flex justify-content-center align-items-center">
                            ...
                        </div>
                    </Col>
                </Row>    
            </Container>

        </Container>
        <Footer/>

        </>
    )
}