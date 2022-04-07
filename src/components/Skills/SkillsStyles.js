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
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const ContentHeader = styled.div`
  grid-column: 1 / 4;
  grid-row: 1;
  text-align: left;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  h3 {
    white-space: nowrap;
    font-size: 3rem;
    font-weight: 300;
  }
`;

export const TextContent = styled.div`
  width: 100%;
  display: grid;
  grid-auto-rows: min-content;
  justify-self: center;
  align-items: start;
  text-align: center;
  padding: 40px;
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.25),
    -3px -3px 10px 3px rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: all 0.3s ease;

  img {
    justify-self: center;
    margin-bottom: 20px;
    filter: invert(53%) sepia(34%) saturate(881%) hue-rotate(313deg)
      brightness(100%) contrast(103%);
  }
  h3 {
    font-size: 2.25rem;
    color: ${(props) => props.theme.colors.secondary};
  }
  h4 {
    margin-top: 30px;
    margin-bottom: 10px;
    font-weight: 100;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.primary};
  }
  li {
    font-size: 1.65rem;
    margin-bottom: 5px;
  }

  &:hover {
    transform: scale(1.1, 1.1);
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
