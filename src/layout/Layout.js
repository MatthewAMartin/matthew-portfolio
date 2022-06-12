import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { Container } from "./LayoutStyles";

export const Layout = ({ children, path }) => {
  return (
    <Container>
      <Nav path={path} />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
