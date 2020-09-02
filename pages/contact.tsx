import React from 'react'
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'
import Map from '../components/Map'
import theme from '../styles/theme'

const ContactStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const mapCenter = {
    lat: 47.0254538,
    lng: -91.6761874
};

const ContactInfoStyle = {
    color: theme.colors.textColor,
    fontFamily: theme.fontFamily.vibes
}

const Contact: React.FC = () => {
    return (
        <Container style={ContactStyle}>
            <PageTitle id="contactTitle" title="Contact" />
            <Map id="mapView" center={mapCenter} zoom={14} ></Map>
            <div>
                <h3 style={ContactInfoStyle}>Come find us! Call to order or sit in our cozy outdoor area!</h3>
                <h4 id="address" style={ContactInfoStyle}>826 7th Avenue</h4>
                <h4 style={ContactInfoStyle}>Two Harbors, MN 55616</h4>
            </div>
        </Container>
    )
}

export default Contact
