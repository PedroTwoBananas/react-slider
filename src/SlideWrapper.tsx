import React from 'react'
import PrevButton from './PrevButton'
import Slide from './Slide'
import { Wrapper } from './styles'
import NextButton from './NextButton'
import SlideCounter from './SlideCounter'

interface SlideWrapperProps {
   nextSlide: () => void
   prevSlide: () => void
   slides: { img: string; text: string }[]
   currentImage: number
   navs: boolean
   length: number
}

const SlideWrapper = ({
   prevSlide,
   nextSlide,
   slides,
   currentImage,
   navs,
   length,
}: SlideWrapperProps) => {
   return (
      <Wrapper>
         {navs ? <PrevButton prevSlide={prevSlide} /> : null}
         {slides.map((slide, index) => {
            return (
               <Slide
                  key={index}
                  index={index}
                  slide={slide}
                  currentImage={currentImage}
                  length={length}
               />
            )
         })}
         {navs ? <NextButton nextSlide={nextSlide} /> : null}
      </Wrapper>
   )
}

export default SlideWrapper
