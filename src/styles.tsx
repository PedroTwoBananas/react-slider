import React from "react";
import styled, {css} from "styled-components";
import Button from "./Button";

export const SectionSlide = styled.section`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
SectionSlide.displayName = 'SectionSlide'

export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`
SlideWrapper.displayName = "SlideWrapper"

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
Slide.displayName = "Slide"

export const ImgSlide = styled.img`
  width: 330px;
  height: 250px;
  border-radius: 10px;
  border: 2px solid white;
`
ImgSlide.displayName = "ImgSlide"

export const TextSlide = styled.span`
  position: relative;
  bottom: 30px;
  color: white;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, .5);
  padding: 2px;
`
TextSlide.displayName = "TextSlide"

export const ArrowDirection = styled.button`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, .5);
  &:hover {
    background: rgba(0, 0, 0);
  }
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .5);
  cursor: pointer;
`
ArrowDirection.displayName = "ArrowDirection"

export const Arrow = styled.span`
  font-size: 16px;
  color: white;
`
Arrow.displayName = "Arrow"


export const LeftArrow = styled(ArrowDirection)`
  position: relative;
  left: 35px;
  top: 40%;
`
LeftArrow.displayName = "LeftArrow"

export const RightArrow = styled(ArrowDirection)`
  position: relative;
  top: 40%;
  right: 35px;
`
RightArrow.displayName = "RightArrow"

export const SlideCounter = styled.span`
  position: relative;
  top: 70px;
  right: 140px;
  color: white;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, .5);
  padding: 2px;
`
SlideCounter.displayName = `SlideCounter`

export const PaganSection = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
`
PaganSection.displayName = "PaganSection"

export const PaganButton = styled.button(
    ({index, currentImage}: {index: number, currentImage: number}) => css`
      margin: 4px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid black;
      cursor: pointer;
      background-color: ${index === currentImage ? 'black' : 'white'};
    `)
PaganButton.displayName = "PaganButton"
