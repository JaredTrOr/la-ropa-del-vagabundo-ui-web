import { Col, Container, Row } from "react-bootstrap"

// eslint-disable-next-line react/prop-types
export function Card({image, description, price}) {
    return (
        <div className="card image-card">
            <i className="fa-regular fa-heart text-success fa-3x heart-card"></i>
            <div className="card-header text-center">
                <img src={image} height="300" alt="" />
            </div>

            <div className="card-body">
                <p className="bold">{description}</p>
            </div>

            <div className="card-body">
                <Container>
                    <Row>
                        <Col className="col-lg-6">
                            <p className="m-2">${price}</p>
                        </Col>

                        <Col className="col-lg-6 d-flex justify-content-end">
                            <i className="fa-solid fa-bag-shopping fa-2x m-2 text-success"></i>
                            <i className="fa-solid fa-circle-plus fa-2x m-2 text-success"></i>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}