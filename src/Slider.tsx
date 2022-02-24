import React, {useState, useEffect, useCallback} from "react";
import PaganSection from "./PaganSection";
import {SectionSlide,} from './styles'
import SlideCounter from "./SlideCounter";
import SlideWrapper from './SlideWrapper'


interface SliderProps {
   slides: { img: string, text: string }[],
   loop: boolean,
   navs: boolean,
   pags: boolean,
   auto: boolean,
   stopMouseHover: boolean,
   delay: number,
}

const Slider = ({slides, loop, navs, pags, auto, stopMouseHover, delay}: SliderProps) => {

   const [currentImage, setCurrentImage] = useState<number>(0);
   const length: number = slides.length;

   const [mouseEvent, setMouseEvent] = useState<boolean>(false)

   const prevSlide = useCallback(() => {
      (loop)
          ?
          setCurrentImage((currentImage) => currentImage === 0 ? length - 1 : currentImage - 1)
          :
          setCurrentImage((currentImage) => currentImage === 0 ? currentImage : currentImage - 1)
   }, [loop, length])

   const nextSlide = useCallback(() => {
      (loop)
          ?
          setCurrentImage((currentImage) => currentImage === length - 1 ? 0 : currentImage + 1)
          :
          setCurrentImage((currentImage) => currentImage === length - 1 ? currentImage : currentImage + 1)
   }, [loop, length]);

   const changeSlide = useCallback((buttonSlide: number) => {
      setCurrentImage(() => buttonSlide);
   }, [])

   useEffect(() => {
      if (!auto || mouseEvent) {
         return
      }
      let current = currentImage;
      const timer = setInterval(() => {
         if (current === length - 1) {
            current = 0;
         } else current++;
         setCurrentImage(current);
      }, (delay * 1000));
      return () => clearInterval(timer)
   }, [auto, mouseEvent])

   if (!Array.isArray(slides) || slides.length <= 0) {
      return null;
   }

   return (
       <>
          <SlideCounter length={length}
                        currentImage={currentImage}
          />
          <SectionSlide onMouseEnter={() => (stopMouseHover) ? setMouseEvent(!mouseEvent) : null}
                        onMouseLeave={() => (stopMouseHover) ? setMouseEvent(!mouseEvent) : null}
          >
             <SlideWrapper
                 nextSlide={nextSlide}
                 prevSlide={prevSlide}
                 slides={slides}
                 currentImage={currentImage}
                 navs={navs}
             />
             <PaganSection
                 pags={pags}
                 slides={slides}
                 changeSlide={changeSlide}
                 currentImage={currentImage}
             />
          </SectionSlide>
       </>
   )
}

export default React.memo(Slider);