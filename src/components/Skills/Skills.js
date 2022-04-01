import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { PageContainer, ContentContainer, ContentHeader, Line, TextContent } from './SkillsStyles';

const Skills = () =>  (
  <PageContainer id='skills'>
    <ContentContainer>
      <ContentHeader>
        <h3>Skills</h3>
        <Line className='hz-line'></Line>
        </ContentHeader>
    </ContentContainer>
  </PageContainer>
);

export default Skills;
