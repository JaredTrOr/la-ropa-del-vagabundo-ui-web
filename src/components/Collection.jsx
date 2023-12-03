import { Col, Row } from "react-bootstrap";
import { Card } from "./Card";

// eslint-disable-next-line react/prop-types
export function Collection( {clothes} ) {
    console.log(clothes)
    return (
        <Row className="mt-5">
            {
                // eslint-disable-next-line react/prop-types
                clothes.map((object, index) => 
                    (
                        <Col className="col-lg-4 mb-4" key={index}>
                            <Card 
                                id={object.id}
                                image={object.image} 
                                description={object.description} 
                                price={object.price}
                            />
                        </Col>
                    )
                )
            }
        </Row>
    )
}