import styled, {css} from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  background: #8ebebe;
  margin: auto 100px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
AppWrapper.displayName = 'AppWrapper';

export const SectionSlide = styled.section`
  height: 320px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
SectionSlide.displayName = 'SectionSlide'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`
Wrapper.displayName = "Wrapper"

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

export const Counter = styled.span`
  position: relative;
  top: 40px;
  right: 140px;
  color: white;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, .5);
  padding: 2px;
`
Counter.displayName = `Counter`

export const PaginationWrapper = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
`
PaginationWrapper.displayName = "PaginationWrapper"

export const PaginationButton = styled.button(
    ({color}) => css`
      margin: 4px;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid black;
      cursor: pointer;
      background-color: ${color};
    `)
PaginationButton.displayName = "PaginationButton"
