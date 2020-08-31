import React from 'react'
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'

const AboutStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const About: React.FC = () => {
    return (
        <Container style={AboutStyle}>
            <PageTitle title="About" />
        </Container>
    )
}

export default About
