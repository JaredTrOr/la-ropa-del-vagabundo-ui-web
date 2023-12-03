import { Button, Col, Container, Row } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { discountClothes } from "../assets/src/clothes-information"
import { menClothes } from "../assets/src/men-clothes-info"
import { womenClothes } from "../assets/src/women-clothes-info"
import { childrenClothes } from "../assets/src/children-clothes-info"
import { Navbar } from "../components/Navbar"

export function ClothSelection() {

    const { id } = useParams()
    
    const cloth = discountClothes.find((object) => object.id === parseInt(id)) || 
    menClothes.find((object) => object.id === parseInt(id)) || 
    womenClothes.find((object) => object.id === parseInt(id)) || 
    childrenClothes.find((object) => object.id === parseInt(id))

    return (
        <>
            <Navbar/>
            <Container className="mt-5">
                <Row>
                    <h2 className="bold">Rebajas de nuestra galeria</h2>
                    <Col className="mt-5">
                        <p>Ropa del vagabundo / Colección de ofertas / Ropa de oferta</p>
                        <img className="mt-5" src={cloth.image} height="400" alt="" />
                    </Col>

                    <Col>
                        <h2 className="bold">{cloth.description}</h2>
                        <p className="mt-5">${cloth.price}</p>
                        <p className="mt-5">Seleccione el color</p>

                        <div className="color-circles mt-3 d-flex gap-4">
                            <div className="color-circle color-circle-1"></div>
                            <div className="color-circle color-circle-2"></div>
                            <div className="color-circle color-circle-3"></div>
                        </div>

                        <p className="mt-5">Seleccione la talla</p>

                        <Container className="sizes-container">
                            <Row>
                                <Col className="col-lg-4">
                                    <div className="sizes">
                                        XXS
                                    </div>
                                </Col>
                                <Col className="col-lg-4">
                                    <div className="sizes">
                                        S
                                    </div>
                                </Col>
                                <Col className="col-lg-4">
                                    <div className="sizes">
                                        M
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-4">
                                <Col className="col-lg-4">
                                    <div className="sizes">
                                        L
                                    </div>
                                </Col>
                                <Col className="col-lg-4">
                                    <div className="sizes">
                                        XL
                                    </div>
                                </Col>
                                <Col className="col-lg-4">
                                    <div className="sizes">
                                        XXL
                                    </div>
                                </Col>
                            </Row>

                            <Link to="/bag">
                                <Button className="mt-5 p-3" variant="success">
                                    Agregar a la bolsa
                                </Button>
                            </Link>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}