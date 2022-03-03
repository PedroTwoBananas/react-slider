import React from 'react'
import Slider from './Slider'
import { AppWrapper } from './styles'

const App = () => {
   const slides = [
      {
         img: 'https://allforchildren.ru/why/illustr/misc82-3.jpg',
         text: 'Черепашка кушает клубнику',
      },
      {
         img: 'https://allforchildren.ru/why/illustr/misc82-2.jpg',
         text: 'Черепашка кушает одуванчик',
      },
      {
         img: 'https://99px.ru/sstorage/56/2013/01/image_561201130834563636685.jpg',
         text: 'Черепашка кушает арбуз',
      },
      {
         img: 'https://n1s2.hsmedia.ru/a0/ef/94/a0ef9449321c0717e9c51642a4c032bc/1920x1152_0xac120003_7506615981629806912.jpg',
         text: 'Черепашка скушает тебя',
      },
   ]

   return (
      <AppWrapper>
         <Slider
            loop={true}
            navs={true}
            pags={true}
            auto={true}
            stopMouseHover={true}
            delay={3}
            slides={slides}
         />
      </AppWrapper>
   )
}

export default App
