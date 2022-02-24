import React from "react";
import Button from "./Button";
import {PaginationWrapper} from "./styles";

interface PaganSectionProps {
   pags: boolean,
   slides: { img: string, text: string }[],
   changeSlide: (buttonSlide: number) => void
   currentImage: number
}

const PaginationSection = ({pags, slides, changeSlide, currentImage}: PaganSectionProps) => {

   return (
       <PaginationWrapper>
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
       </PaginationWrapper>
   )
}

export default React.memo(PaginationSection);