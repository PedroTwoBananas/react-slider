import React from "react";
import Button from "./Button";
import {PaganWrapper} from "./styles";

interface PaganSectionProps {
   pags: boolean,
   slides: { img: string, text: string }[],
   changeSlide: (buttonSlide: number) => void
   currentImage: number
}

const PaganSection = ({pags, slides, changeSlide, currentImage}: PaganSectionProps) => {

   return (
       <PaganWrapper>
          {(pags)
              ?
              slides.map((slide, index) => {
                 return <Button
                     key={index}
                     index={index}
                     changeSlide={changeSlide}
                     color={currentImage === index ? 'black' : 'white'}
                 />
              })
              :
              null}
       </PaganWrapper>
   )
}

export default React.memo(PaganSection);