import React from 'react';
import { useEffect, useState } from 'react';
import { LandingContainer, TitleContainer, Title, Subtitle, CTAButton, CTASpan, Line } from './LandingStyles';

const Landing = (props) => {

  const [play, setPlay] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > 20) {
      setPlay(true)
    } else {
      setPlay(false)
    }
  }

  useEffect(() => {
    
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
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
        </CTAButton>
      </TitleContainer>
    </LandingContainer>
  )
};

export default Landing;