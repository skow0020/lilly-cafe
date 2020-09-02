import React from "react"
import PageTitle from "../components/PageTitle"
import Container from "react-bootstrap/Container"
import theme from "../styles/theme"

const AboutStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const MainImageStyle = {
    maxWidth: "460px",
    width: "100%",
    height: "auto"
}

const AboutInfoStyle = {
    color: theme.colors.textColor,
    fontFamily: theme.fontFamily.vibes
};

const About: React.FC = () => {
    return (
        <Container style={AboutStyle}>
            <PageTitle id="aboutTitle" title="About" />
            <div>
                <img
                    id="aboutImage"
                    src="images/flower.jpg"
                    alt="About Lilly's"
                    style={MainImageStyle}
                />
            </div>
            <div>
                <h3 id="aboutInfo" style={AboutInfoStyle}>Delicious, Fulfilling, Healthy Asian Food</h3>
            </div>
        </Container>
    )
}

export default About
