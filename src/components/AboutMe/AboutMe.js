import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { PageContainer, ContentContainer, ContentHeader, TextContent, PhotoContent } from './AboutMeStyles';

const AboutMe = (props) => (
  <PageContainer id='aboutme'>
    <ContentContainer>
      <ContentHeader>About Me</ContentHeader>
      <TextContent>
        <p>I’m a recent Software Development graduate looking to break into the word of full-stack development. 3 years ago, I decided that Civil Engineering wasn’t for me, and that I wanted to purse a career in software development. Through that time I have ....</p>
      </TextContent>
      <PhotoContent>
        <img src="/images/profile.jpg" alt="Photo of Matthew Martin"></img>
      </PhotoContent>
    </ContentContainer>
  </PageContainer>
);

export default AboutMe;