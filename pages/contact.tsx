import React from 'react'
import PageTitle from '../components/PageTitle'
import Container from 'react-bootstrap/Container'
import Map from '../components/Map'

const ContactStyle = {
    textAlign: "center",
    paddingBottom: "100px"
} as React.CSSProperties

const mapCenter = {
    lat: 47.0254538,
    lng: -91.6761874
};

const Contact: React.FC = () => {
    return (
        <Container style={ContactStyle}>
            <PageTitle title="Contact" />
            <Map center={mapCenter} zoom={14} ></Map>
        </Container>
    )
}

export default Contact
