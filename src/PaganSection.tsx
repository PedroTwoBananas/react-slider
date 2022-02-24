import React from "react";
import Button from "./Button";
import {PaganWrapper} from "./styles";

interface PaganSectionProps {
   pags: boolean,
   slides: { img: string, text: string }[],
   currentImage: number,
   setCurrentImage:(currentImage: number) => void
}

const PaganSection = ({pags, slides, currentImage, setCurrentImage}: PaganSectionProps) => {

   return (
       <PaganWrapper>
          {(pags)
              ?
              slides.map((slide, index) => {
                 return <Button
                     key={index}
                     index={index}
                     currentImage={currentImage}
                     setCurrentImage={setCurrentImage}
                 />
              })
              :
              null}
       </PaganWrapper>
   )
}

export default React.memo(PaganSection);