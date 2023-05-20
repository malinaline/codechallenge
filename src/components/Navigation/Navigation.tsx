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

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavStyled isMobile={isMobile}>
      {!isMobile ? (
        <NavInner isMobile={isMobile}>
          <NavList isMobile={isMobile}>
            <NavItem>
              <NavLink to="/" onClick={closeMobileMenu}>
                home|
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/search" onClick={closeMobileMenu}>
                search
              </NavLink>
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
                  <NavLink to="/" onClick={closeMobileMenu}>
                    home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/search" onClick={closeMobileMenu}>
                    search
                  </NavLink>
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
