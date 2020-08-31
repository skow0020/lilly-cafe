import React from 'react'
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'

const AboutStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const MainImageStyle = {
    maxWidth: "460px"
}

const AboutInfoStyle = {
    color: "#c8a97e",
    fontFamily: "Great Vibes"
}

const About: React.FC = () => {
    return (
        <Container style={AboutStyle}>
            <PageTitle title="About" />
            <div>
                <img
                    src="images/lillys.jpg"
                    alt="About Lilly's"
                    style={MainImageStyle}
                />
            </div>
            <div>
                <h2 style={AboutInfoStyle}>Delicious, Fulfilling, Healthy Asian Food</h2>
            </div>
        </Container>
    )
}

export default About
