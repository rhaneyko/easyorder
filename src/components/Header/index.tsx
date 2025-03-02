import React, { useState } from "react";
import { useAuth } from "../../context/authContext";

import {
    HeaderContainer,
    Logo,
    Nav,
    NavLink,
    UserProfile,
    Avatar,
    ModalOverlay,
    ModalContent,
    CloseButton,
    LogoutButton
} from "./styles";

const Header: React.FC = () => {
    const { user, logout } = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleUserProfileClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <HeaderContainer>
            <Logo>EasyOrder Local</Logo>
            <Nav>
                <NavLink to="/">Dashboard</NavLink>
                <NavLink to="/pedidos">Pedidos</NavLink>
                <NavLink to="/mesas">Mesas</NavLink>
                <NavLink to="/cardapio">Cardápio</NavLink>
            </Nav>
            <UserProfile onClick={handleUserProfileClick}>
                <Avatar />
                <span>{user ? user.username : "Usuário"}</span>
            </UserProfile>

            {/* Modal */}
            {isModalOpen && (
                <ModalOverlay onClick={handleCloseModal}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={handleCloseModal}>×</CloseButton>
                        <h2>Perfil do Usuário</h2>
                        <p>Usuário: {user?.username}</p>
                        <p>Tipo: {user?.userType}</p>
                        <LogoutButton onClick={logout}>Sair</LogoutButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </HeaderContainer>
    );
};

export default Header;