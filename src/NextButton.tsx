import React, {useCallback} from "react";
import {Arrow, RightArrow} from "./styles";

interface NextButtonProps {
   nextSlide: () => void
}

const NextButton = ({nextSlide}: NextButtonProps) => {
   console.log('NextButton')
   return (
       <RightArrow onClick={nextSlide}><Arrow>❯</Arrow></RightArrow>
   )

}

export default React.memo(NextButton);