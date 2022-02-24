import React, {useCallback, useState} from "react";
import {PaganButton} from "./styles";

interface ButtonProps {
   index: number
   changeSlide: (index: number) => void
   color: string
}

const Button = ({index, changeSlide, color }: ButtonProps) => {
   console.log("button")

   const click = useCallback(() => {
      changeSlide(index)
   },[index, changeSlide])

   return (
       <PaganButton color={color} onClick={click}></PaganButton>
   )
}

export default React.memo(Button);