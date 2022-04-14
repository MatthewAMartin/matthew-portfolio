import React from "react";

import {
  PageContainer,
  ContentContainer,
  ProjectCard,
  Img,
  TitleContent,
  HeaderThree,
  CardInfo,
  TagList,
  Tag,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <PageContainer id="projects">
    <ContentContainer>
      {projects.map(
        ({ id, title, description, image, tags, source, visit }) => (
          <ProjectCard key={id}>
            <Img src={image[0]}></Img>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
          </ProjectCard>
        )
      )}
    </ContentContainer>
  </PageContainer>
);

export default Projects;
