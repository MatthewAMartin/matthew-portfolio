import React from "react";

import {
  PageContainer,
  ContentContainer,
  ContentHeader,
  TextContent,
  IconGrid,
  PhotoContent,
  Line,
  ResumeLink,
} from "./AboutMeStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const AboutMe = (props) => (
  <PageContainer id="aboutme">
    <ContentContainer>
      <ContentHeader>
        <h3>About Me</h3>
        <Line className="hz-line"></Line>
      </ContentHeader>
      <TextContent>
        <p>
          I’m a recent Software Development graduate looking to break into the
          world of full-stack development. 3 years ago, I decided that Civil
          Engineering wasn’t for me, and that I wanted to purse a career in
          software development. Through that time I have ....
        </p>
        <h4>Education</h4>
        <ul>
          <li>
            Bachelor of Information Technology (Software Development Major)
          </li>
          <li>Bachelor of Civil Engineering (Honors)</li>
        </ul>
        <ResumeLink title="Resume">
          Download My Resume
        </ResumeLink>
      </TextContent>
      <PhotoContent>
        <img src="/images/profile.png" alt="Photo of Matthew Martin"></img>
      </PhotoContent>
    </ContentContainer>
  </PageContainer>
);

export default AboutMe;
