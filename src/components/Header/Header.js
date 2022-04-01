import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { DiCssdeck } from 'react-icons/di';

// Styled Components
import { HeaderContainer, Logo, NavLinkContainer, NavLinkList, LinkListElement, NavLink } from './HeaderStyles';
import { PrimaryButton } from '../../styles/GlobalComponents/Button';

const Header = () =>  {
  
  const [show, setShow] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > 20) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };

  },[]);

  return(
    <HeaderContainer className={`${show && 'open'}`}>
      <Logo>
        <Link href="/">
          <a>
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
            <Link href="#skills">
              <NavLink>Skills</NavLink>
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
        </NavLinkList>
      </NavLinkContainer>
    </HeaderContainer>
  ) 
};

export default Header;
