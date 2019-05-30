import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GlobalColors, GlobalSizes } from "../styles/GlobalStyles";

const Footer = () => (
  <FooterContainer>
    <FooterColumn>
      <NavLink to="/">
        <ListHeader>Home</ListHeader>
      </NavLink>
      <NavLink to="/use-cases">
        <ListItem>Use Cases</ListItem>
      </NavLink>
      <NavLink to="/how-it-works">
        <ListItem>Mission</ListItem>
      </NavLink>
      <NavLink to="/contact">
        <ListItem>Contact</ListItem>
      </NavLink>
      <NavLink to="/">
        <ListItem>Join Slack</ListItem>
      </NavLink>
    </FooterColumn>
    <FooterColumn>
      <ListHeader>Services</ListHeader>
      <NavLink to="/contact">
        <ListItem>Support</ListItem>
      </NavLink>
      <NavLink to="/documentation">
        <ListItem>Documentaion</ListItem>
      </NavLink>
    </FooterColumn>
    <FooterColumn>
      <RightsHeader>
        Copyright 2019 Code Learning Project | All Rights Reserved
      </RightsHeader>
      <CreatorContainer>
        <CreatorBody>Designed by</CreatorBody>
        <CreatorLink href="https://www.cortonacreative.com" target="_blank">
          Cortona Creative
        </CreatorLink>
      </CreatorContainer>
    </FooterColumn>
  </FooterContainer>
);

const FooterContainer = styled.div`
  background-color: ${GlobalColors.PrimaryGrey};
  padding: 5rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-top: 3px solid ${GlobalColors.SecondaryGreen};
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    text-align: center;
  }
`;

const ListHeader = styled.h3`
  color: ${GlobalColors.PrimaryGreen} !important;
  margin: 0;
`;

const ListItem = styled.h4`
  margin: 0;
  padding-top: 0.5rem;
  color: white !important;
`;

const RightsHeader = styled.h3`
  color: ${GlobalColors.PrimaryGreen} !important;
  margin: 0;
`;

const CreatorContainer = styled.div`
  padding-top: 0.5rem;
  display: flex;
  justify-content: flex-start;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    justify-content: center;
  }
`;

const CreatorBody = styled.h4`
  color: white !important;
`;

const CreatorLink = styled.a`
  @import url("https://fonts.googleapis.com/css?family=Bungee+Shade");
  font-family: "Bungee Shade", cursive !important;
  color: ${GlobalColors.PrimaryGreen} !important;
  font-size: 1.2rem;
  padding-left: 0.6rem;
  font-weight: 700;
`;

const SupportLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;

export default Footer;
