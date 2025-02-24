import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const HamburgerButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: white;
  font-size: 24px;
  padding: 10px;
  border-radius: 50%;
  z-index: 1000;
  cursor: pointer;
`;

export const SidebarMenu = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "250px" : "0")};
  overflow: hidden;
  transition: width 0.3s ease;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding-top: 60px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 15px 20px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`;

export const LogoutButton = styled.button`
  padding: 15px 20px;
  margin-top: auto;
  border: none;
  background-color: ${({ theme }) => theme.colors.danger};
  color: white;
  cursor: pointer;
  width: 100%;
  border-radius: 0;
`;