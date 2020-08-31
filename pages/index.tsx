import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselImageStyle = {
    maxWidth: "900px"
}

const Home: React.FC = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/bg_1.jpg"
                    alt="First slide"
                    style={CarouselImageStyle}
                />
                <Carousel.Caption>
                    <h3>Lilly&apos;s Asian Cafe</h3>
                    <p>Two Harbors, MN</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/bg_2.jpg"
                    alt="Third slide"
                    style={CarouselImageStyle}
                />

                <Carousel.Caption>
                    <h3>Lilly&apos;s Asian Cafe</h3>
                    <p>Come get your freaking delicious food</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/bg_1.jpg"
                    alt="Third slide"
                    style={CarouselImageStyle}
                />

                <Carousel.Caption>
                    <h3>Lilly&apos;s Asian Cafe</h3>
                    <p>What is taking you so long?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home


