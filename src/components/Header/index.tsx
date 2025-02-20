import React from "react";

import {
    HeaderContainer,
    Logo,
    Nav,
    NavLink,
    UserProfile,
    Avatar
} from "./styles";

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <Logo>EasyOrder Local</Logo>
            <Nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/pedidos">Pedidos</NavLink>
                <NavLink to="/mesas">Mesas</NavLink>
                <NavLink to="/cardapio">Cardápio</NavLink>
            </Nav>
            <UserProfile>
                <Avatar />
                <span>Usuário</span>
            </UserProfile>
        </HeaderContainer>
    );
};

export default Header;