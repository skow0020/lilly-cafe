import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import theme from "../styles/theme"

const BrandStyle = {
    fontFamily: theme.fontFamily.cursive
}

const NavBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#home" style={BrandStyle}>Lilly&apos;s Asian Cafe</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                    <Nav.Link id="homeLink" href="/">Home</Nav.Link>
                    <Nav.Link id="aboutLink" href="/about">About</Nav.Link>
                    <Nav.Link id="menuLink" href="/menu">Menu</Nav.Link>
                    <Nav.Link id="contactLink" href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar