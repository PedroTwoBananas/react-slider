import React, {useState, useEffect} from "react";
import {SectionSlide, ImgSlide, TextSlide, Slide, LeftArrow, RightArrow, SlideCounter, PaganButton} from './styles'

const Slider = (props) => {

    const [currentImage, setCurrentImage] = useState(0);
    const length = props.slides.length;

    const [mouseEvent, setMouseIvent] = useState(false)

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

    useEffect(() => {
        if (!props.auto || mouseEvent) {
            return
        }
        let current = currentImage;
        const timer = setInterval(() => {
            if (current === length - 1) {
                current = 0;
            } else current++;
            setCurrentImage(current);
        }, (props.delay * 1000));
        return () => clearInterval(timer)
    }, [props.auto, mouseEvent])

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null;
    }

    return (
        <SectionSlide>
            {(props.navs === true)
                ?
                <><LeftArrow onClick={prevSlide}>←</LeftArrow><RightArrow onClick={nextSlide}>→</RightArrow></>
                :
                null}
            <SlideCounter>{currentImage + 1}/{length}</SlideCounter>
            {props.slides.map((slide, index) => {
                return (
                    <div key={index}>
                        {index === currentImage &&
                            <Slide><ImgSlide
                                onMouseEnter={() =>(props.stopMouseHover) ? setMouseIvent(!mouseEvent) : null}
                                onMouseLeave={() =>(props.stopMouseHover) ? setMouseIvent(!mouseEvent) : null}
                                src={slide.img}
                            /><TextSlide>{slide.text}</TextSlide>
                            </Slide>}
                    </div>
                )
            })}
            <div>
                {(props.pags === true)
                    ?
                    props.slides.map((slide, index) => {
                        return (<PaganButton onClick={() => setCurrentImage(index)} key={index}></PaganButton>)
                    })
                    :
                    null}
            </div>
        </SectionSlide>

    )
}

export default Slider;