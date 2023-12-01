import { Col, Container, Row } from "react-bootstrap";
import { Navbar } from "../components/Navbar"

export function Profile() {
    return (
        <>
            <Navbar/>
            <Container className="container-form mt-7 p-5">
                <Row>
                    <Col className="profile-cards p-5">
                        <h2>Información personal <i className="fa-regular fa-user"></i></h2>
                        <p>Javier Perez Hernández</p>
                        <p>javier@gmail.com</p>
                    </Col>

                    <Col className="profile-cards p-5">
                        <h2>Correo electrónico <i className="fa-regular fa-envelope"></i></h2>
                        <p>javier@gmail.com</p>
                        <p>Contraseña: ****</p>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col className="profile-cards p-5">
                        <h2>Dirección de entraga <i className="fa-solid fa-location-dot"></i></h2>
                        <p>San Juan del Río, Querétaro</p>
                        <p>Calle Jose Alfredo #35</p>
                        <p>La estancia</p>
                    </Col>

                    <Col className="profile-cards p-5">
                        <p>Otra información</p>
                        <p>------------------</p>
                        <p>------------------</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}