import React from 'react'
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel'

import 'pure-react-carousel/dist/react-carousel.es.css'
import './Carousel.scss'

const Carousel = ({ children }) => {

  return (
    <CarouselProvider className="slider" totalSlides={children.length}>
      <div className="slider__wrapper">
        <Slider>
          {children.map((elem, i) => (
            <Slide
              className="slider__item"
              key={i}
              index={i}
            >
              {elem}
            </Slide>))
          }
        </Slider>
        <ButtonBack className="slider__btn slider__back">
          <div className="arrow arrow_left "/>
        </ButtonBack>
        <ButtonNext className="slider__btn slider__next">
          <div className="arrow arrow_right"/>
        </ButtonNext>
        <DotGroup/>
      </div>
    </CarouselProvider>
  )
}

export default Carousel