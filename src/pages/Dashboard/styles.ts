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
    padding: 32px 32px;

    background-color: blue;
    
`;

export const Mesas = styled.div`
    display: flex;
    width: 600px;
    height: 400px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    background-color: red;
`;

export const Pedidos = styled.div`
   display: flex;
    width: 600px;
    height: 400px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    background-color: red;
`;

export const PedidosEmAndamento = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 200px;
    justify-content: center;
    margin-top: 20px;
    background-color: blue;

    border-radius: 10px;
`;

export const PedidosEmAndamentoContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    gap: 10px;

    background-color: aliceblue;
`;

export const VendasDoDia = styled.div`
  display: flex;
    width: 600px;
    height: 400px;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
    background-color: red;
`;

