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
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 1fr;
  }
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
  align-items: center;
  justify-content: center;

  span {
    display: table;
    margin: 0 auto;
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.accent};
  }
  p {
    margin-top: 15px;
    text-align: center;
  }
`;

export const ResumeLink = styled.button`
  display: flex;
  margin: 0 auto;
  margin-top: 25px;
  align-items: center;
  justify-content: center;
  width: 150px;
  padding: 10px;
  background: none;
  border: 2px solid ${(props) => props.theme.colors.accent};
  transition: 0.4s ease;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.accent};
  &:hover {
    border-color: ${(props) => props.theme.colors.hover};
    color: ${(props) => props.theme.colors.hover};
    cursor: pointer;
  }
`;

export const PhotoContent = styled.div`
  grid-column: 2;
  grid-row: 2;
  img {
    width: 100%;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1;
    grid-row: 3;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    grid-column: 1;
    grid-row: 3;
  }
  @media ${(props) => props.theme.breakpoints.lg} {
    grid-column: 1;
    grid-row: 3;
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
