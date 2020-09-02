import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselImageStyle = {
    maxWidth: "900px"
}

const Home: React.FC = () => {
    return (
        <Carousel id="carousel">
            <Carousel.Item>
                <img
                    className="d-block w-100 item-1"
                    src="images/lillys.jpg"
                    alt="First slide"
                    style={CarouselImageStyle}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 item-2"
                    src="images/bubbletea.jpg"
                    alt="Second slide"
                    style={CarouselImageStyle}
                />
                <Carousel.Caption className="caption-2">
                    <h3>Call to Order!</h3>
                    <p>(218) 834-4373</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 item-3"
                    src="images/bg_2.jpg"
                    alt="Third slide"
                    style={CarouselImageStyle}
                />
                <Carousel.Caption className="caption-3">
                    <h3>Lilly&apos;s Asian Cafe</h3>
                    <p>What is taking you so long?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home


