import React from 'react';
import { Container, ContainerHoje, PedidosHoje, TicketMedio, VendasHoje } from './styles';
import BarChartComponent from "../../components/BarChart/BarChartComponent";


const Dashboard = () => {
  return (
    <Container>
        <h1>Dashboard</h1>
        <ContainerHoje>
            <VendasHoje>
                <h2>Vendas Hoje</h2>
                <p>R$ 1.000,00</p>
            </VendasHoje>
            <PedidosHoje>
                <h2>Pedidos Hoje</h2>
                <p>90</p>
            </PedidosHoje>
            <TicketMedio>
                <h2>Ticket Médio</h2>
                <p>R$ 100,00</p>
            </TicketMedio>
        </ContainerHoje>
        <h2>Vendas da semana</h2>
        <BarChartComponent />
    </Container>

  )
}

export default Dashboard