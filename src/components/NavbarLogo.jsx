import { Navbar as NavbarBootstrap } from "react-bootstrap"
import Container from 'react-bootstrap/Container'



import logo from "../assets/logo.png"
import { Link } from "react-router-dom"

export function NavbarLogo () {
    return (
        <>
            <NavbarBootstrap collapseOnSelect expand="lg" bg="light">
                <Container>
                    <div className="logo-title">
                        <Link to="/landing" className="no-link-style-black">
                            <img src={logo} alt="logo" height="80"/>
                            La Ropa del Vagabundo
                        </Link>
                    </div>
                </Container>
            </NavbarBootstrap>
            
        </>
    )
}