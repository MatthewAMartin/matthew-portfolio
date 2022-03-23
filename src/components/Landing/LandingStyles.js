import styled from 'styled-components';

export const LandingContainer = styled.div`
  height:  100vh;
  display: flex;
  align-items: center;
  margin-left: 10%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const TitleContainer = styled.div`

`;

export const Title = styled.h1`
  margin: 0px 0px 10px 0px;
  font-weight: 400;
  font-size: 7rem;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 4.5rem;
  color: ${props => props.theme.colors.secondary};
`;

export const CTAButton = styled.button`
  margin-top: 6rem;
  display: flex;
  position: relative;
  width: 300px;
  height: 80px;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border: none;
  cursor: pointer;
  background: none;

  &::before {
    content:"";
    width: 100%;
    height: 3px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${props => props.theme.colors.accent};

    right: 0;
    top: 0;
    transition-delay: 0s;
  }
  &::after {
    content:"";
    width: 100%;
    height: 3px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${props => props.theme.colors.accent};

    left: 0;
    bottom: 0;
    transition-delay: 0.4s;
  }
  &:hover {
    span {
      color: ${props => props.theme.colors.hover};
    }
    
    &::before {
      width: 50%;

      transition-delay: 0.4s;
    }
    &::after {
      width: 0;

      transition-delay: 0s;
    }
    span {
      &::before {
        height: 0;

        transition-delay: 0.2s;
      }
    }
    .hz-line {
      &::after {
        width: 50%;

        transition-delay: 0s;
      }
    }
    .vt-line {
      &::after {
        height: 380px;

        transition-delay: 0.2s;
      }
    }
  }
`;

export const CTASpan = styled.span`
  display: block;
  color: ${props => props.theme.colors.accent};
  font-weight: 400;
  font-size: 3rem;

  &:hover {
    color: ${props => props.theme.colors.hover};
  }

  &::before {
    content: "";
    width: 3px;
    height: 100%;
    position: absolute;
    transition: all 0.2s linear;
    background: ${props => props.theme.colors.accent};

    transition-delay: 0.2s;
    left: 0;
    top: 0;
  }
  &::after {
    content: "";
    width: 3px;
    height: 100%;
    position: absolute;
    transition: all 0.2s linear;
    background: ${props => props.theme.colors.accent};

    transition-delay: 0.2s;
    right: 0;
    bottom: 0
  }
`;

export const Line = styled.div`
  .hz-line {
    position: absolute;
    background: none;
    top: 100%;
    right: 0px;
  }

  .vt-line {
    position: absolute;
    background: none;
    background: ${props => props.theme.colors.primary}
    top: 100%;
    right: 50%;
  }

  .hz-line&::after {
    content: "";
    width: 0px;
    height: 3px;
    position: absolute;
    transition: all 0.2s linear;
    background: ${props => props.theme.colors.accent};

    top: calc(100% - 3px);
    right: 0;
    transition-delay: 0.4s;
  }

  .vt-line&::after {
    content: "";
    width: 3px;
    height: 0px;
    position: absolute;
    transition: all 0.4s linear;
    background: ${props => props.theme.colors.accent};

    top: calc(100% - 3px);
    right: 50%;
    transition-delay: 0s;

    .vt-line {
      width: 3px;
      height: 0px;
    }
  }
  
`;