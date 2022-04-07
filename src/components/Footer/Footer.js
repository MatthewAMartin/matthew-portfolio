import React from "react";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import {
  HeaderContainer,
  NavLinkContainer,
  NavLinkList,
  IconGrid,
} from "./FooterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const Footer = () => {
  const [show, setShow] = useState(false);

  const controlHeader = () => {
    if (window.scrollY > 20) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, []);

  return (
    <HeaderContainer className={`${show && "open"}`}>
      <NavLinkContainer>
        <NavLinkList>
          <IconGrid>
            <a title="GitHub">
              <FontAwesomeIcon icon={brands("github")} className="fa-1x icon" />
            </a>
            <a title="LinkedIn">
              <FontAwesomeIcon
                icon={brands("linkedin")}
                className="fa-1x icon"
              />
            </a>
            <a title="Email">
              <FontAwesomeIcon
                icon={solid("envelope")}
                className="fa-1x icon"
              />
            </a>
          </IconGrid>
        </NavLinkList>
      </NavLinkContainer>
    </HeaderContainer>
  );
};

export default Footer;
