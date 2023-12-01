import { Col, Row } from "react-bootstrap";
import { clothes } from "../assets/src/clothes-information";
import { Card } from "./Card";

export function Collection() {
    return (
        <Row className="mt-5">
            {
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