import React from "react";
import {PaganButton} from "./styles";
interface ButtonProps {
   index: number
   changeSlide: (slide: number) => void
   currentImage: number

}

const Button = ({index, changeSlide, currentImage}: ButtonProps) => {

   const clickButton = () => {
      changeSlide(index);
   }
   return (
       <PaganButton index={index} currentImage={currentImage} onClick={clickButton}></PaganButton>
   )
}

export default Button;