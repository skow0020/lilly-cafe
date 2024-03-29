import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import theme from "../styles/theme"
import { FaFacebookSquare } from "react-icons/fa"
const BrandStyle = {
    fontFamily: theme.fontFamily.cursive
}

const NavBar: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" style={BrandStyle}>Lilly&apos;s Asian Cafe</Navbar.Brand>
            <Nav.Link id="facebookLink" href="https://www.facebook.com/OfficialLillysCafe"><FaFacebookSquare size={20} /></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" />
                <Nav>
                    <Nav.Link id="aboutLink" href="/about">About</Nav.Link>
                    <Nav.Link id="menuLink" href="/menu">Menu</Nav.Link>
                    <Nav.Link id="contactLink" href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar