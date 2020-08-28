import React from 'react'
import TopHeader from './TopHeader'
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar'

interface HeaderProps {
    restaurantName: string;
    phoneNumber: string,
    hours: string
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <Container className="header" style={headerStyle}>
            <TopHeader phoneNumber={props.phoneNumber} hours={props.hours} />
            <NavBar/>
        </Container>
    )
}

const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "gray",
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: "14px",
    width: "100%",
    maxWidth: "960px",
    zIndex: 2
} as React.CSSProperties

export default Header