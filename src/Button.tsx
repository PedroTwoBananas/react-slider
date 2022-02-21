import React from "react";
import styled, {css} from "styled-components";

interface ButtonProps {
   index: number
}

const PaganButton = styled.button(
    ({index, currentImage}) => css`
      margin: 4px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid black;
      cursor: pointer;
      background-color: ${index === currentImage ? 'black' : 'white'};
    `)


const Button = ({index, changeSlide, currentImage}: ButtonProps) => {

   const clickButton = () => {
      changeSlide(index);
   }
   return (
       <PaganButton index={index} currentImage={currentImage} onClick={clickButton}></PaganButton>
   )
}

export default Button;