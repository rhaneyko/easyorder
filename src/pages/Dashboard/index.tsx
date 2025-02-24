import React from "react";

import {
    CardsContainer,
    ContainerDashboard,
    LeftCardsContainer,
    MesaCard,
    MesasContainer,
    MesasContent,
    PedidosContainer,
    PedidosEmAndamentoList,
    PedidoCard,
    RightCardsContainer,
    RightCardsContent,
    VendasCard,
    PedidosCard,
    SummaryHeader
} from "./styles";

const Dashboard = () => {
    const pedidosEmAndamento = [
        { pedido: "01", mesa: "01", cliente: "Rhaneyko", garcom: "João Victor Bojikian" },
        { pedido: "02", mesa: "02", cliente: "Rhaneyko", garcom: "João Victor Bojikian" },
        { pedido: "36", mesa: "03", cliente: "Rhaneyko", garcom: "João Victor Bojikian" },
        { pedido: "04", mesa: "04", cliente: "Rhaneyko", garcom: "João Victor Bojikian" },
    ];

    const mesas = [
        { mesa: "01", pedido: "01", garcom: "João Victor Bojikian" },
        { mesa: "02", pedido: "02", garcom: "João Victor Bojikian" },
        { mesa: "03", pedido: "03", garcom: "João Victor Bojikian" },
        { mesa: "04", pedido: "04", garcom: "João Victor Bojikian" },
    ];

    return (
        <ContainerDashboard>
            <CardsContainer>
                <LeftCardsContainer>
                    <PedidosContainer>
                        <h3>Pedidos em andamento</h3>
                        <PedidosEmAndamentoList>
                            {pedidosEmAndamento.map(({ pedido, mesa, cliente, garcom }) => (
                                <PedidoCard key={pedido}>
                                    <span><strong>Pedido:</strong> {pedido}</span>
                                    <span><strong>Mesa:</strong> {mesa}</span>
                                    <span><strong>Cliente:</strong> {cliente}</span>
                                    <span><strong>Garçom:</strong> {garcom}</span>
                                </PedidoCard>
                            ))}
                        </PedidosEmAndamentoList>
                    </PedidosContainer>

                    <MesasContainer>
                        <h3>Mesas</h3>
                        <MesasContent>
                            {mesas.map(({ mesa, pedido, garcom }) => (
                                <MesaCard key={mesa}>
                                    <span><strong>Mesa:</strong> {mesa}</span>
                                    <span><strong>Pedido:</strong> {pedido}</span>
                                    <span><strong>Garçom:</strong> {garcom}</span>
                                </MesaCard>
                            ))}
                        </MesasContent>
                    </MesasContainer>
                </LeftCardsContainer>

                <RightCardsContainer>
                    <SummaryHeader>
                        <h3>Resumo do dia</h3>
                    </SummaryHeader>
                    <RightCardsContent>
                        <VendasCard>
                            <h4>Vendas do dia</h4>
                            <span>Valor total: R$ 1.000,00</span>
                            <span>Quantidade: 100</span>
                        </VendasCard>
                        <PedidosCard>
                            <h4>Total de pedidos</h4>
                            <span>Quantidade: 100</span>
                        </PedidosCard>
                    </RightCardsContent>
                </RightCardsContainer>
            </CardsContainer>
        </ContainerDashboard>
    )
};

export default Dashboard;
