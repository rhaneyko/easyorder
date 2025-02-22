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
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Logo = styled.h1`
  color: white;
  font-size: 1.5rem;
  margin: 0;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
