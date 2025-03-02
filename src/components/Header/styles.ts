import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;

`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    max-width: 300px;
    width: 100%;
    margin-top: 60px;
    margin-right: 20px;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.danger};
`;

export const LogoutButton = styled.button`
    padding: 10px 30px;
    border: 1px solid #fff;
    border-radius: 10px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.danger};
   
`;