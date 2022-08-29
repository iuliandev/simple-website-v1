import React from 'react'
import { Carousel } from 'react-bootstrap'
import alley from '../assets/img/alley.jpeg'
import osaka from '../assets/img/osaka.jpeg'
import city from '../assets/img/city.jpeg'

export const CarouselBox = () => {
  return (
    <Carousel>
        <Carousel.Item>
            <img 
                src={alley}
                className='d-block w-100'
                alt='slide1'
            />
            <Carousel.Caption>
                <h3>Slide title 1</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                src={osaka}
                className='d-block w-100'
                alt='slide2'
            />
            <Carousel.Caption>
                <h3>Slide title 2</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                src={city}
                className='d-block w-100'
                alt='slide3'
            />
            <Carousel.Caption>
                <h3>Slide title 3</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  )
}
