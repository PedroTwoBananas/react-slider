import React from 'react'
import { Arrow, LeftArrow } from '../styles/styles'

interface PrevButtonProps {
   prevSlide: () => void
}

const PrevButton = ({ prevSlide }: PrevButtonProps) => {
   return (
      <LeftArrow onClick={prevSlide}>
         <Arrow>❮</Arrow>
      </LeftArrow>
   )
}

export default React.memo(PrevButton)
