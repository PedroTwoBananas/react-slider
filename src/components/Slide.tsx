import React from 'react'
import { ImgSlide, SlideStyle, TextSlide } from '../styles/styles'
import SlideCounter from './SlideCounter'

interface SlideProps {
   index: number
   slide: { img: string; text: string }
   currentImage: number
   length: number
}

const Slide = ({ index, slide, currentImage, length }: SlideProps) => {
   return (
      <SlideStyle>
         {index === currentImage && (
            <>
               <SlideCounter length={length} currentImage={currentImage} />
               <ImgSlide src={slide.img} />
               <TextSlide>{slide.text}</TextSlide>
            </>
         )}
      </SlideStyle>
   )
}

export default Slide
