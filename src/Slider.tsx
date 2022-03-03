import React, { useState, useEffect, useCallback } from 'react'
import PaginationSection from './PaginationSection'
import SlideWrapper from './SlideWrapper'
import { SectionSlide } from './styles'

interface SliderProps {
   slides: { img: string; text: string }[]
   loop: boolean
   navs: boolean
   pags: boolean
   auto: boolean
   stopMouseHover: boolean
   delay: number
}

const Slider = ({
   slides,
   loop,
   navs,
   pags,
   auto,
   stopMouseHover,
   delay,
}: SliderProps) => {
   const [currentImage, setCurrentImage] = useState<number>(0)
   const length: number = slides.length

   const [isSlideStopped, setMoveSlide] = useState<boolean>(false)

   const mouseLeave = useCallback(() => {
      if (stopMouseHover) {
         setMoveSlide(!isSlideStopped)
      }
   }, [isSlideStopped])

   const mouseEnter = useCallback(() => {
      if (stopMouseHover) {
         setMoveSlide(!isSlideStopped)
      }
   }, [isSlideStopped])

   const prevSlide = useCallback(() => {
      loop
         ? setCurrentImage((currentImage) =>
              currentImage === 0 ? length - 1 : currentImage - 1
           )
         : setCurrentImage((currentImage) =>
              currentImage === 0 ? currentImage : currentImage - 1
           )
   }, [loop, length])

   const nextSlide = useCallback(() => {
      loop
         ? setCurrentImage((currentImage) =>
              currentImage === length - 1 ? 0 : currentImage + 1
           )
         : setCurrentImage((currentImage) =>
              currentImage === length - 1 ? currentImage : currentImage + 1
           )
   }, [loop, length])

   const changeSlide = useCallback((paginButton: number) => {
      setCurrentImage(paginButton)
   }, [])

   useEffect(() => {
      if (!auto || isSlideStopped) {
         return
      }
      let current = currentImage
      const timer = setInterval(() => {
         current === length - 1 ? (current = 0) : current++
         setCurrentImage(current)
      }, delay * 1000)
      return () => clearInterval(timer)
   }, [auto, isSlideStopped, delay, currentImage, length])

   if (!Array.isArray(slides) || slides.length <= 0) {
      return null
   }

   return (
      <>
         <SectionSlide onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
            <SlideWrapper
               nextSlide={nextSlide}
               prevSlide={prevSlide}
               slides={slides}
               currentImage={currentImage}
               navs={navs}
               length={length}
            />
            {pags ? (
               <PaginationSection
                  slides={slides}
                  changeSlide={changeSlide}
                  currentImage={currentImage}
               />
            ) : null}
         </SectionSlide>
      </>
   )
}

export default React.memo(Slider)
