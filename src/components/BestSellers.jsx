import { Button, Col, Container, Row } from "react-bootstrap"
import { Collection } from "./Collection"
import { Link } from "react-router-dom"

export function BestSellers() {

    return (
        <Container className="mt-7"> 
            <Row className="text-center">
                <h2 className="bold">Más vendidos</h2>
                <p>Descubre el fenómeno de la moda con nuestras prendas. Prendas irresistibles que han elevado el estilo de quienes eligen lo mejor</p>
            </Row>

            <Row className="mt-5">
                <Col>
                    <h2>Colección essentials</h2>

                </Col>

                <Col className="d-flex justify-content-end">
                    <Link to="/discounts">
                        <Button variant="outline-success">
                            Ver más
                        </Button>
                    </Link>
                    
                </Col>
            </Row>

            <Collection/>
            
        </Container>
    )
}