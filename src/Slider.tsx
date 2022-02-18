import React, {useState} from "react";
import {SectionSlide, ImgSlide, TextSlide, Slide, LeftArrow, RightArrow, SlideCounter, PaganButton} from './styles'

const Slider = (props) => {

    const [currentImage, setCurrentImage] = useState(0);
    const length = props.slides.length;

    const nextSlide = () => {
        (props.loop === true)
            ?
            setCurrentImage(currentImage === length - 1 ? 0 : currentImage + 1)
            :
            setCurrentImage(currentImage === length - 1 ? currentImage : currentImage + 1)
    };

    const prevSlide = () => {
        (props.loop === true)
            ?
            setCurrentImage(currentImage === 0 ? length - 1 : currentImage - 1)
            :
            setCurrentImage(currentImage === 0 ? currentImage : currentImage - 1)
    }

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    return (
        <SectionSlide>
            <><LeftArrow onClick={prevSlide}>←</LeftArrow><RightArrow onClick={nextSlide}>→</RightArrow></>
            <SlideCounter>{currentImage + 1}/{length}</SlideCounter>
            {props.slides.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === currentImage &&
                            <Slide><ImgSlide src={slide.img}/><TextSlide>{slide.text}</TextSlide>
                            </Slide>}
                    </div>
                )
            })}
        </SectionSlide>

    )
}

export default Slider;