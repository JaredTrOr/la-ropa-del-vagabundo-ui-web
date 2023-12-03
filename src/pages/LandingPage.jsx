import { Header } from "../components/Header"
import { Navbar } from "../components/Navbar"
import { Landing } from "../components/Landing"
import { CarouselC } from "../components/CarouselC"
import { BestSellers } from "../components/BestSellers"
import { Button, Container, Row } from "react-bootstrap"
import { Footer } from "../components/Footer"
import chatbotimage from "../assets/chatbot-image.png"
import { Link } from "react-router-dom"

export function LandingPage() {
    return (
        <>
            <Header/>
            <Navbar/>
            <Landing/>
            <CarouselC/>
            <BestSellers/>

            <div className="label-chatbot bg-brown p-5 mt-7">
                <Container>
                    <Row className="text-center">
                        <h2 className="bold text-light">¿Por qué elegirnos?</h2>
                        <p className="text-light">Sistema generador de outfits con nuestro chatbot</p>

                        <Link to="/chatbot">
                            <Button variant="outline-light" className="btn-chatbot">Click para descubrir</Button>
                        </Link>
                    </Row>
                </Container>
            </div>

            <div className="mt-7 p-5">
                <Container>
                    <Row className="text-center">
                        <h2 className="bold">Diseña tu outfit</h2>
                        <p className="mt-5">¡Da vida a tu estilo único con nuestra experiencia de diseño personalizado!</p>
                        <p>Con nuestro innovador chatbot de inteligencia artificial, puedes crear tu propio look excepcional. Explora colores, patrones y estilos, y deja que nuestro chatbot transforme tus ideas en prendas personalizadas. Diseñar Nunca ha sido tan fácil, ¡descúbrelo ahora y lleva tu moda a otro nivel!</p>
                        <img src={chatbotimage} alt="" height="400"/>
                    </Row>
                </Container>
            </div>

            <Footer/>
        </>
    )
}