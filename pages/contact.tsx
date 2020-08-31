import React from 'react'
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'

const ContactStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const Contact: React.FC = () => {
    return (
        <Container style={ContactStyle}>
            <PageTitle title="Contact" />
        </Container>
    )
}

export default Contact
