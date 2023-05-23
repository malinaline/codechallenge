import { useState } from "react";

import {
  ListContainerMobile,
  MenuToggler,
  NavItem,
  NavLink,
  NavList,
  NavStyled,
  WrapperDesktop,
  WrapperMobile,
} from "./Navigation.styled";

//import { useWindowSize } from "@react-hookz/web";

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <NavStyled>
      <WrapperMobile>
        <MenuToggler onClick={handleMenuToggle}>☰</MenuToggler>
      </WrapperMobile>
      <WrapperDesktop>
        <NavList>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">About</NavLink>
          </NavItem>
        </NavList>
      </WrapperDesktop>
      {isOpen && (
        <ListContainerMobile>
          <NavList isMobile>
            <NavItem>
              <NavLink to="/" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" onClick={closeMobileMenu}>
                About
              </NavLink>
            </NavItem>
          </NavList>
        </ListContainerMobile>
      )}
    </NavStyled>
  );
}
export default Navigation;
