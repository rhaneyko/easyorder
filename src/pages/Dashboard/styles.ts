import styled from "styled-components";

export const ContainerDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 32px;
  background-color: red;


`;

export const LeftCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

export const RightCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px;
  gap: 20px;
  

`;

export const RightCardsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 20px;
  border-radius: 10px;
`;

export const MesasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 350px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const MesasContent = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 10px;
`;

export const MesaCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px 0 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const PedidosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 350px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const PedidosEmAndamentoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const PedidoCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 5px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px 0 10px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const VendasCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border-radius: 10px;
`;

export const PedidosCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border-radius: 10px;
`;

export const SummaryHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
