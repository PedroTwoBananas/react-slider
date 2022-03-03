import React, { useCallback } from 'react'
import { PaginationButton } from '../styles/styles'

interface ButtonProps {
   index: number
   changeSlide: (index: number) => void
   color: string
}

const Button = ({ index, changeSlide, color }: ButtonProps) => {
   const click = useCallback(() => {
      changeSlide(index)
   }, [index, changeSlide])

   return <PaginationButton color={color} onClick={click}></PaginationButton>
}

export default React.memo(Button)
