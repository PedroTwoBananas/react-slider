import React from 'react'
import Button from './Button'
import { PaginationWrapper } from './styles'

interface PaganSectionProps {
   slides: { img: string; text: string }[]
   changeSlide: (buttonSlide: number) => void
   currentImage: number
}

const PaginationSection = ({
   slides,
   changeSlide,
   currentImage,
}: PaganSectionProps) => {
   return (
      <PaginationWrapper>
         {slides.map((slide, index) => {
            return (
               <Button
                  key={index}
                  index={index}
                  changeSlide={changeSlide}
                  color={currentImage === index ? 'black' : 'white'}
               />
            )
         })}
      </PaginationWrapper>
   )
}

export default PaginationSection
