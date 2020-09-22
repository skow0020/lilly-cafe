import React from "react"
import TopHeader from "./TopHeader"
import Container from "react-bootstrap/Container"
import NavBar from "./NavBar"

interface HeaderProps {
    restaurantName: string;
    phoneNumber: string,
    hours: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <Container className="header" style={headerStyle}>
            <TopHeader id="topHeader" phoneNumber={props.phoneNumber} hours={props.hours} />
            <NavBar />
        </Container>
    )
}

const headerStyle = {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "14px",
    width: "100%",
    position: "fixed",
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
} as React.CSSProperties

export default Header