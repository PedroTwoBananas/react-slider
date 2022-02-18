import React from "react";
import styled from "styled-components";

export const SectionSlide = styled.section`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SlideWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ImgSlide = styled.img`
  width: 330px;
  height: 250px;
  border-radius: 10px;
  border: 2px solid white;
`

export const TextSlide = styled.span`
  position: relative;
  bottom: 30px;
  color: white;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, .5);
  padding: 2px;
`

export const LeftArrow = styled.button`
  position: relative;
  left: 35px;
  top: 40%;
  background: rgba(0, 0, 0, .5);

  &:hover {
    background: rgba(0, 0, 0);
  }

  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .5);
  cursor: pointer;
`
export const RightArrow = styled.button`
  position: relative;
  top: 40%;
  right: 35px;
  background: rgba(0, 0, 0, .5);
  &:hover {
    background: rgba(0, 0, 0);
  }
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, .5);
  cursor: pointer;
`
export const SlideCounter = styled.span`
  position: relative;
  top: 70px;
  right: 140px;
  color: white;
  letter-spacing: 2px;
  background: rgba(0, 0, 0, .5);
  padding: 2px;
`
export const PaganSection = styled.div`
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
`

export const PaganButton = styled.button`
  margin: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
`

export const WhiteActivePaganButton = styled(PaganButton)`
  background-color: white;
`

export const BlackActivePaganButton = styled(PaganButton)`
  background-color: black;
`