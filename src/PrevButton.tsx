import React, {useCallback} from "react";
import {Arrow, LeftArrow} from "./styles";

interface PrevButtonProps {
   prevSlide: () => void
}

const PrevButton = ({prevSlide}: PrevButtonProps) => {
   console.log('PrevButton')
   return (
       <LeftArrow onClick={prevSlide}><Arrow>❮</Arrow></LeftArrow>
   )
}

export default React.memo(PrevButton);