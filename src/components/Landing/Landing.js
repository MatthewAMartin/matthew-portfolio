import React from 'react';
import { useEffect, useState } from 'react';
import { LandingContainer, TitleContainer, Title, Subtitle, CTAButton, CTASpan, Line } from './LandingStyles';

const Landing = (props) => {
  return(
    <LandingContainer>
      <TitleContainer>
        <Title>Hi, I'm Matthew Martin</Title>
        <Subtitle>and I'm an aspiring full-stack developer.</Subtitle>
        <a href="#aboutme">
        <CTAButton>
          <CTASpan>Learn About Me</CTASpan>
          <Line className='hz-line'></Line>
          <Line className='vt-line'></Line>
        </CTAButton>
        </a>
      </TitleContainer>
    </LandingContainer>
  )
};

export default Landing;