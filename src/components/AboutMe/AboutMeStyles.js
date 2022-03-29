import styled from 'styled-components';

export const PageContainer = styled.div`
  height:  100vh;
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
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
`;

export const ContentHeader = styled.h3`
  grid-column: 1 / 2;
  grid-row: 1;
  font-size: 3rem;
  font-weight: 300;
  text-align: left;
`;

export const TextContent = styled.div`
  grid-column: 1;
  grid-row: 2;
`;

export const PhotoContent = styled.div`
  grid-column: 2;
  grid-row: 2;
  img {
    width: 100%;
  }
`;