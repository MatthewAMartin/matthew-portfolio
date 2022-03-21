import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

// Styled Components
import { Nav, Logo, LinkContainer, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Nav>
    <Logo>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color: "white"}}>
          <DiCssdeck size="3rem"/>
        </a>
      </Link>
    </Logo>
    <LinkContainer>
      <ol>
        <li>
          <Link href="#aboutme">
            <NavLink>About Me</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#workexperience">
            <NavLink>Work Experience</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contactme">
            <NavLink>Contact Me</NavLink>
          </Link>
        </li>
        <li>
          <Link href="/">
            <NavLink>
              <button type="button">Resume</button>
            </NavLink>
          </Link>
        </li>
      </ol>
    </LinkContainer>
  </Nav>
);

export default Header;
