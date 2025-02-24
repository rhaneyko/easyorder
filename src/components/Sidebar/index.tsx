import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FcHome, FcCalendar, FcSettings } from "react-icons/fc";

import { SidebarContainer, HamburgerButton, SidebarMenu, NavLinkStyled, LogoutButton } from "./styles";



const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  

  return (
    <SidebarContainer>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)}>
        
      </HamburgerButton>
      <SidebarMenu isOpen={isOpen}>
        <h4 style={{ padding: '20px' }}>Med-Agenda</h4>
        <NavLinkStyled to="/">
           Home
        </NavLinkStyled>
        <NavLinkStyled to="/agendamentos">
         Agendamentos
        </NavLinkStyled>
          <NavLinkStyled to="/configuracoes">
             Configurações
          </NavLinkStyled>
        <LogoutButton>Sair</LogoutButton>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
