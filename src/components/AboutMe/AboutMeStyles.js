import styled from "styled-components";

export const PageContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  margin-top: 25vh;
  z-index: 10;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
  @media ${(props) => props.theme.breakpoints.md} {
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 20px;
`;

export const ContentHeader = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  text-align: left;
  position: relative;

  display: grid;
  grid-template-columns: min-content auto;

  h3 {
    white-space: nowrap;
    font-size: 3rem;
    font-weight: 300;
  }
`;

export const TextContent = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: grid;
  grid-template-rows: auto min-content min-content min-content;

  h4 {
    margin-bottom: 15px;
    font-weight: 100;
  }
  ul {
    margin-bottom: 30px;
  }
  li {
    margin-bottom: 10px;
  }
`;

export const ResumeLink = styled.a`
  transition: 0.4s ease;
  margin-right: 30px;
  &:hover {
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
`;

export const PhotoContent = styled.div`
  grid-column: 2;
  grid-row: 2;
  margin-top: auto;
  margin-bottom: auto;
  img {
    width: 100%;
  }
`;

export const Line = styled.div`
  width: calc(100% - 20px);
  margin-left: 20px;
  margin-bottom: auto;
  margin-top: auto;
  height: 1px;
  background-color: ${(props) => props.theme.colors.primary};
`;
