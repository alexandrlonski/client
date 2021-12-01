import React from "react";
import { H1, Box, Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <H1>Online Cinema</H1>
      <Container>
        <Row>
          <Column>
            <Heading>Poster</Heading>
            <FooterLink href="#">Now in cinema</FooterLink>
            <FooterLink href="#">Soon</FooterLink>
          </Column>
          <Column>
            <Heading>Our cinemas</Heading>
            <FooterLink href="#">VOKA CINEMA by Silver Screen in "Dana Mall"</FooterLink>
            <FooterLink href="#">Silver Screen cinemas in "ArenaCity"</FooterLink>
            <FooterLink href="#">Somewhere else.....</FooterLink>
            <FooterLink href="#">Somewhere else.....</FooterLink>
          </Column>
          <Column>
            <Heading>Info</Heading>
            <FooterLink href="#">Promotions</FooterLink>
            <FooterLink href="#">News</FooterLink>
            <FooterLink href="#">Visiting rules</FooterLink>
            <FooterLink href="#">Advertizement</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>Youtube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
