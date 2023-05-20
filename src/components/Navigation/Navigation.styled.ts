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

export const NavInner = styled.div<NavProps>`
  width: 100%;
  padding-inline: ${({ isMobile }) => (isMobile ? "0" : "20px")};

  button {
    background-color: transparent;
    color: var(--white);
    border: none;
    cursor: pointer;
    padding-top: 1px;
    padding-left: 10px;
    font-size: 40px;
  }
`;

export const NavList = styled.ul<NavProps>`
  display: flex;
  align-items: center;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  justify-content: ${({ isMobile }) => (isMobile ? "center" : "flex-end")};
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: var(--white);
`;

export const NavContainerMobile = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 100%;
  height: calc(100vh - 56px);
  background-color: var(--ultraViolet);

  display: flex;
  align-items: center;
  justify-content: center;
`;
