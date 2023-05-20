import { useState } from "react";

import {
  NavContainerMobile,
  NavItem,
  NavInner,
  NavLink,
  NavList,
  NavStyled,
} from "./Navigation.styled";

import { useWindowSize } from "@react-hookz/web";

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const isMobile = width < 1025;

  // Check if width is greater that 1025px
  // if true, render desktop navigation

  return (
    <NavStyled isMobile={isMobile}>
      {!isMobile ? (
        <NavInner isMobile={isMobile}>
          <NavList isMobile={isMobile}>
            <NavItem>
              <NavLink to="/">home|</NavLink> 

            </NavItem>
            <NavItem>
              <NavLink to="/search">search</NavLink>
            </NavItem>
          </NavList>
        </NavInner>
      ) : (
        <NavInner isMobile={isMobile}>
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
          {isOpen && (
            <NavContainerMobile>
              <NavList isMobile={isMobile}>
                <NavItem>
                  <NavLink to="/">home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/search">search</NavLink>
                </NavItem>
              </NavList>
            </NavContainerMobile>
          )}
        </NavInner>
      )}
    </NavStyled>
  );
}

export default Navigation;

/* 

Gör NAV dynamisk. På mobile ska det det finnas en knapp i vänstra hörnet.


*/
