import React, {useState, useEffect} from "react";
import Button from "./Button";
import {
   SectionSlide,
   ImgSlide,
   TextSlide,
   Slide,
   LeftArrow,
   RightArrow,
   SlideCounter,
   PaganSection,
   SlideWrapper,
   Arrow
} from './styles'


interface SliderProps {
   slides: { img: string, text: string }[],
   loop: boolean,
   navs: boolean,
   pags: boolean,
   auto: boolean,
   stopMouseHover: boolean,
   delay: number,
}


const Slider = (props: SliderProps) => {

   const [currentImage, setCurrentImage] = useState<number>(0);
   const length: number = props.slides.length;

   const [mouseEvent, setMouseEvent] = useState<boolean>(false)

   const nextSlide = () => {
      (props.loop)
          ?
          setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
          :
          setCurrentImage(currentImage === length - 1 ? currentImage : currentImage + 1)
   };

   const prevSlide = () => {
      (props.loop)
          ?
          setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
          :
          setCurrentImage(currentImage === 0 ? currentImage : currentImage - 1)
   }

   const changeSlide = (slide) => {
      setCurrentImage(slide);
   }

   useEffect(() => {
      if (!props.auto || mouseEvent) {
         return
      }
      let current = currentImage;
      const timer = setInterval(() => {
         if (current === length - 1) {
            current = 0;
         } else current++;
         setCurrentImage(current);
      }, (props.delay * 1000));
      return () => clearInterval(timer)
   }, [props.auto, mouseEvent])

   if (!Array.isArray(props.slides) || props.slides.length <= 0) {
      return null;
   }


   return (
       <>
          <SlideCounter>{currentImage + 1}/{length}</SlideCounter>
          <SectionSlide onMouseEnter={() => (props.stopMouseHover) ? setMouseEvent(!mouseEvent) : null}
                        onMouseLeave={() => (props.stopMouseHover) ? setMouseEvent(!mouseEvent) : null}>
             <SlideWrapper>
                {(props.navs)
                    ?
                    <><LeftArrow onClick={prevSlide}><Arrow>❮</Arrow></LeftArrow></>
                    :
                    null}

                {props.slides.map((slide, index) => {
                   return (
                       <div key={index}>
                          {index === currentImage &&
                              <Slide>
                                  <ImgSlide src={slide.img}/>
                                  <TextSlide>{slide.text}</TextSlide>
                              </Slide>}
                       </div>
                   )
                })}
                {(props.navs)
                    ?
                    <><RightArrow onClick={nextSlide}><Arrow>❯</Arrow></RightArrow></>
                    :
                    null}
             </SlideWrapper>
             <PaganSection>
                {(props.pags)
                    ?
                    props.slides.map((slide, index) => {
                       return <Button changeSlide={changeSlide} key={index} index={index} currentImage={currentImage}/>
                    })
                    :
                    null}
             </PaganSection>
          </SectionSlide>
       </>
   )
}

export default Slider;