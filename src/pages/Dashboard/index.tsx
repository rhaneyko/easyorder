import React from "react";

import { CardsContainer, ContainerDashboard, Mesas, Pedidos, VendasDoDia } from "./styles";

const Dashboard = () => {
    return (
        <ContainerDashboard>
            <h1>Olá, (NOME DO USUARIO). Bem vindo ao sistema de pedidos. Vamos começar anotar seus pedidos?</h1>
            <CardsContainer>
                <Pedidos></Pedidos>
                <Mesas></Mesas>
                <VendasDoDia></VendasDoDia>
            </CardsContainer>
        </ContainerDashboard>
    )
};

export default Dashboard;