import React from 'react';

import { PageContainer, ContentContainer, ContentHeader, TextContent, IconGrid, PhotoContent, Line } from './AboutMeStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const AboutMe = (props) => (
  <PageContainer id='aboutme'>
    <ContentContainer>
      <ContentHeader>
        <h3>About Me</h3>
        <Line className='hz-line'></Line>
        </ContentHeader>
      <TextContent>
        <p>I’m a recent Software Development graduate looking to break into the world of full-stack development. 3 years ago, I decided that Civil Engineering wasn’t for me, and that I wanted to purse a career in software development. Through that time I have ....</p>
        <IconGrid>
          <a title='GitHub'><FontAwesomeIcon icon={brands('github')} className="fa-2x icon"/></a>
          <a title='LinkedIn'><FontAwesomeIcon icon={brands('linkedin')} className="fa-2x icon"/></a>
          <a title='Email'><FontAwesomeIcon icon={solid('envelope')} className="fa-2x icon"/></a>
          <a title='Resume'><FontAwesomeIcon icon={solid('file-text')} className="fa-2x icon"/></a>
        </IconGrid>
      </TextContent>
      <PhotoContent>
        <img src="/images/profile.png" alt="Photo of Matthew Martin"></img>
      </PhotoContent>
    </ContentContainer>
  </PageContainer>
);

export default AboutMe;