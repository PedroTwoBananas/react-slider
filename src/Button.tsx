import React, {useCallback} from "react";
import {PaganButton} from "./styles";

interface ButtonProps {
   index: number
   currentImage: number
   setCurrentImage:(index: number) => void
}

const Button = ({index, currentImage, setCurrentImage}: ButtonProps) => {

   const changeSlide = useCallback(() => {
      setCurrentImage(index);
   }, [index])

   return (
       <PaganButton
           index={index}
           currentImage={currentImage}
           onClick={changeSlide}
       >
       </PaganButton>
   )
}

export default React.memo(Button);