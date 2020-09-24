import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import FilterSection from '../components/FilterSection';
import CardSection from '../components/CardSection';
import ProjectSection from '../components/ProjectSection';
import AdsSection from '../components/AdsSection';
import FooterSection from '../components/FooterSection';


function Homepage() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dummyimage.com/1920x665/000/ffffff&text=+TEST+IMG"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dummyimage.com/1920x665/000/ffffff&text=+TEST+IMG"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://dummyimage.com/1920x665/000/ffffff&text=+TEST+IMG"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <FilterSection/>
            <CardSection/>
            <ProjectSection/>
            <AdsSection/>
            <FooterSection/>
        </div>
    )

}

export default Homepage;