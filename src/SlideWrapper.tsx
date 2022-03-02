import React from 'react'
import PrevButton from './PrevButton'
import { ImgSlide, Slide, TextSlide, Wrapper } from './styles'
import NextButton from './NextButton'

interface SlideWrapperProps {
   nextSlide: () => void
   prevSlide: () => void
   slides: { img: string; text: string }[]
   currentImage: number
   navs: boolean
}

const SlideWrapper = ({
   prevSlide,
   nextSlide,
   slides,
   currentImage,
   navs,
}: SlideWrapperProps) => {
   return (
      <Wrapper>
         {navs ? <PrevButton prevSlide={prevSlide} /> : null}
         {slides.map((slide, index) => {
            return (
               <Slide key={index}>
                  {index === currentImage && (
                     <>
                        <ImgSlide src={slide.img} />
                        <TextSlide>{slide.text}</TextSlide>
                     </>
                  )}
               </Slide>
            )
         })}
         {navs ? <NextButton nextSlide={nextSlide} /> : null}
      </Wrapper>
   )
}

export default React.memo(SlideWrapper)
