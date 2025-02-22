import React from "react";

import { CardsContainer, ContainerDashboard, Mesas, Pedidos, PedidosEmAndamento, PedidosEmAndamentoContent, VendasDoDia } from "./styles";

const Dashboard = () => {
    return (
        <ContainerDashboard>
            <CardsContainer>
                <Pedidos>
                    <PedidosEmAndamento>
                        <span>Pedidos em andamento</span>
                        <PedidosEmAndamentoContent>
                            <span>Pedido: 34</span>
                            <span>Mesa: 12</span>
                            <span>Cliente: Rhaneyko</span>
                            <span>Garçom: João Victor Bojikian</span>
                        </PedidosEmAndamentoContent>
                    </PedidosEmAndamento>
                </Pedidos>
                <Mesas></Mesas>
                <VendasDoDia></VendasDoDia>
            </CardsContainer>
        </ContainerDashboard>
    )
};

export default Dashboard;