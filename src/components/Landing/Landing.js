import React from 'react';
import { useEffect, useState } from 'react';
import { LandingContainer, TitleContainer, Title, Subtitle, CTAButton, CTASpan, Line, VerticalLine, LineContainer } from './LandingStyles';

const Landing = (props) => {

  const [play, setPlay] = useState(false);  // animation play state
  const [show, setShow] = useState(false);  // vertical line show state

  // If the user has scrolled more than 100px, play the animation
  const controlAnimation = () => {
    if (window.scrollY > 100) {
      setPlay(true)
    } else {
      setPlay(false)
    }
  }

  // If the user has scrolled more than their screen height, show the vertical line
  const controlLine = () => {
    if (window.scrollY > (screen.height)) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  // Add scroll event listeners for controlAnimation and controlLine
  useEffect(() => {
    window.addEventListener("scroll", controlAnimation);
    window.addEventListener("scroll", controlLine);
    return () => {
      window.removeEventListener("scroll", controlAnimation);
      window.removeEventListener("scroll", controlLine);
    };

  },[]);

  return(
    <LandingContainer>
      <TitleContainer>
        <Title>Hi, I'm Matthew Martin</Title>
        <Subtitle>and I'm an aspiring full-stack developer.</Subtitle>
        <CTAButton className={`${play && 'scroll-down'}`}>
          <CTASpan>Learn About Me</CTASpan>
          <Line className='hz-line'></Line>
          <Line className='vt-line'></Line>
          <LineContainer>
            <VerticalLine className={`${show && 'show'}`}></VerticalLine>
          </LineContainer>
        </CTAButton>
      </TitleContainer>
    </LandingContainer>
  )
};

export default Landing;