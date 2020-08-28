import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Home: React.FC = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/bg_1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Lilly's Asian Cafe</h3>
                    <p>Two Harbors, MN</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/bg_2.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Lilly's Asian Cafe</h3>
                    <p>Come get your freaking delicious food</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/bg_1.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Home


