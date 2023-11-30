import Carousel from 'react-bootstrap/Carousel';
import { Container, Row } from "react-bootstrap"
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'

export function CarouselC() {
    return (
        <>
            <div className="season-colection mt-5">
                <Container className="p-5">
                    <Row className="text-center">
                        <h2 className="bold">Colección de temporada</h2>
                        <p>Descubre la moda que transformará tu estilo este año. ¡Sé la tendencia que todos siguen!</p>
                    </Row>
                </Container>
            </div>
            
            <Container>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item className="text-center">
                        <img src={slide1} height="400" alt="" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="text-center">
                        <img src={slide2} height="400" alt="" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="text-center">
                        <img src={slide3} height="400" alt="" />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
            
        </>
        
    )
}