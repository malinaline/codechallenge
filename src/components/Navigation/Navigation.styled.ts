import { styled } from "styled-components";

import { Link } from "react-router-dom";

interface NavProps {
  isMobile?: boolean;
}

export const NavStyled = styled.nav<NavProps>`
  width: 100%;
  height: 56px;
  background-color: var(--ultraViolet);
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.ul<NavProps>`
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  align-items: center;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: var(--white);
`;

export const ListContainerMobile = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 56px);
  background-color: var(--ultraViolet);
  font-size: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperMobile = styled.div`
  display: flex;
  @media screen and (min-width: 1025px) {
    display: none;
  }
`;

export const WrapperDesktop = styled.div`
  display: none;
  margin-inline-start: auto;
  padding-inline: 10px;
  @media screen and (min-width: 1025px) {
    display: flex;
  }
  a {
    padding-inline: 3px;
  }
`;

export const MenuToggler = styled.button`
  background-color: transparent;
  color: var(--white);
  border: none;
  cursor: pointer;
  padding-top: 1px;
  padding-left: 10px;
  font-size: 40px;
`;
