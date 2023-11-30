import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export function CardBag({ image }) {

    const [counter, setCounter] = useState(0)

    return (
        <Container className="card p-5 mb-3">
            <Row className="">
                <Col className="col-lg-4">
                    <img src={image} height="200" alt="" />

                </Col>

                <Col className="col-lg-4">
                    <p className="bold text-justify">Patrón De Cuadros Camisa Con Capucha De Manga Larga Para Hombres</p>
                    <p>$ 250.20</p>
                    
                    <div className="d-flex gap-2">
                        <p className="counter">{counter >= 0 ? counter : setCounter(0)}</p>
                        <button className="add-button" onClick={() => setCounter(counter - 1)}>-</button>
                        <button className="add-button" onClick={() => setCounter(counter + 1)}>+</button>
                    </div>
                    
                </Col>

                <Col className="col-lg-4 d-flex justify-content-center align-items-center">
                    <div className="cancel-button d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-xmark fa-2x"></i>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}