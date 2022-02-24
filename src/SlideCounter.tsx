import React from "react";
import {Counter} from "./styles";

interface SlideCounterProps {
   length: number,
   currentImage: number
}

const SlideCounter = ({currentImage, length}: SlideCounterProps) => {
   // console.log('Counter')
   return(
       <Counter>{currentImage + 1}/{length}</Counter>
   )
}

export default React.memo(SlideCounter);