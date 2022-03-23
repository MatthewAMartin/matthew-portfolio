import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

// Styled Components
import { HeaderContainer, Logo, NavLinkContainer, NavLinkList, LinkListElement, NavLink } from './HeaderStyles';
import { PrimaryButton } from '../../styles/GlobalComponents/Button';

const Header = () =>  (
  <HeaderContainer>
    <Logo>
      <Link href="/">
        <a style={{color: "rgba(184, 0, 97, 1)"}}>
          <DiCssdeck size="3rem"/>
        </a>
      </Link>
    </Logo>
    <NavLinkContainer>
      <NavLinkList>
        <LinkListElement>
          <Link href="#aboutme">
            <NavLink>About Me</NavLink>
          </Link>
        </LinkListElement>
        <LinkListElement>
          <Link href="#workexperience">
            <NavLink>Work Experience</NavLink>
          </Link>
        </LinkListElement>
        <LinkListElement>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </LinkListElement>
        <LinkListElement>
          <Link href="#contactme">
            <NavLink>Contact Me</NavLink>
          </Link>
        </LinkListElement>
        <LinkListElement>
          <Link href="/">
            <NavLink>
              <PrimaryButton type="button">Resume</PrimaryButton>
            </NavLink>
          </Link>
        </LinkListElement>
      </NavLinkList>
    </NavLinkContainer>
  </HeaderContainer>
);

export default Header;
