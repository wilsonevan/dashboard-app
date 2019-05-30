import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import "./HomeNav.css";
import { Dropdown, Icon } from "semantic-ui-react";
import { GlobalColors, GlobalSizes } from "../styles/GlobalStyles";
// import Logo from "../images/logo_transparent_updated.png";

const Navbar = props => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const url = window.location.pathname;
    switch (url) {
      case "/":
        setActiveItem(0);
        break;
      case "/use-cases":
        setActiveItem(1);
        break;
      case "/documentation":
        setActiveItem(2);
        break;
      default:
        setActiveItem(0);
        break;
    }
  }, []);

  const activateItem = MenuItem => {
    setActiveItem(MenuItem);
  };

  const isActive = MenuItem => {
    return MenuItem === activeItem ? ActiveMenuItem : null;
  };

  const centerNavItems = textColor => {
    return (
      <>
        <CenterMenu>
          <NavLink to="/use-cases">
            <MenuItem as={isActive(1)} onClick={() => activateItem(1)}>
              <Item textColor={textColor}>Use Cases</Item>
            </MenuItem>
          </NavLink>
          <NavLink to="/docs">
            <MenuItem as={isActive(2)} onClick={() => activateItem(2)}>
              <Item textColor={textColor}>Docs</Item>
            </MenuItem>
          </NavLink>
          <NavLink to="/mission">
            <MenuItem as={isActive(3)} onClick={() => activateItem(3)}>
              <Item textColor={textColor}>Our Mission</Item>
            </MenuItem>
          </NavLink>
          <NavLink to="/contact">
            <MenuItem as={isActive(4)} onClick={() => activateItem(4)}>
              <Item textColor={textColor}>Contact</Item>
            </MenuItem>
          </NavLink>
        </CenterMenu>
      </>
    );
  };

  // const rightNavItems = textColor => {
  //   return (
  //     <>
  //       <RightMenu>
  //         <NavLink to="/dashboard" onClick={() => activateItem(1)}>
  //           <MenuItem as={isActive(1)}>
  //             <Item textColor={textColor}>
  //             </Item>
  //           </MenuItem>
  //         </NavLink>
  //         <NavLink to="/login">
  //           <MenuItem>
  //             <Item textColor={textColor}>Logout</Item>
  //           </MenuItem>
  //         </NavLink>
  //       </RightMenu>
  //     </>
  //   );
  // };

  const compactNavMenu = () => {
    return (
      <>
        <CompactNavContainer>
          <Dropdown
            button
            className="icon"
            size="huge"
            direction="left"
            fluid
            icon="bars"
          >
            <Dropdown.Menu>
              <Dropdown.Item>
                <NavLink to="/">
                  <Item textColor={GlobalColors.PrimaryGrey}>Home</Item>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/use-cases">
                  <Item textColor={GlobalColors.PrimaryGrey}>Use Cases</Item>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/docs">
                  <Item textColor={GlobalColors.PrimaryGrey}>Docs</Item>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/mission">
                  <Item textColor={GlobalColors.PrimaryGrey}>Our Mission</Item>
                </NavLink>
              </Dropdown.Item>
              <Dropdown.Item>
                <NavLink to="/contact">
                  <Item textColor={GlobalColors.PrimaryGrey}>Contact</Item>
                </NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </CompactNavContainer>
      </>
    );
  };

  return (
    <NavContainer>
      <NavLink to="/">
        <LogoContainer onClick={() => activateItem(0)}>
          {/* <MyLogo src={Logo} /> */}
          <CompanyName>The Code Learning Project</CompanyName>
        </LogoContainer>
      </NavLink>
      <NavMenu>
        {compactNavMenu()}
        {centerNavItems(props.textColor)}
        {/* {rightNavItems(props.textColor)} */}
      </NavMenu>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  position: absolute;
  top: 0rem;
  width: 100%;
`;

const NavMenu = styled.div`
  list-style-type: none;
  margin-left: 6rem;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
`;

const CompactNavContainer = styled.div`
  display: none;
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 100;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: inline;
  }
`;

const MenuItem = styled.div`
  float: left;
  font-size: 1.25rem;
`;

const ActiveMenuItem = styled.div`
  float: left;
  font-size: 1.25rem;
  border-bottom: ${GlobalColors.PrimaryGreen};
  border-bottom-width: thin;
  border-bottom-style: solid;
`;

const Item = styled.p`
  display: block;
  color: ${props => props.textColor || GlobalColors.PrimaryGrey};
  text-align: center;
  padding: 10px 16px 5px 16px;
  text-decoration: none;
  z-index: 1;
  letter-spacing: 1px !important;
`;

const SupportLink = styled.a`
  :hover {
    cursor: pointer;
  }
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MyLogo = styled.img`
  height: 4rem;
  width: 4rem;
`;

const CompanyName = styled.h1`
  font-size: 1.6rem !important;
  border: none;
  margin: 0;
  padding-left: 1rem;
  letter-spacing: 0.5px !important;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    font-size: 1.2rem !important;
    width: 50%;
  }
`;

const RightMenu = styled.div`
  position: relative;
  text-align: center;
  border-bottom: 5px !important;
  display: flex;
  justify-content: flex-end;
  padding: 2rem 2rem 1rem 0rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: none;
  }
`;

const CenterMenu = styled.div`
  text-align: center;
  border-bottom: 5px !important;
  display: flex;
  justify-content: center;
  padding-top: 2rem;

  @media (max-width: ${GlobalSizes.ScreenWidth}) {
    display: none;
  }
`;

export default Navbar;
