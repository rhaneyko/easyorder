import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
    margin-top: 50px;
`;

export const MesasContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
`;

export const MesaCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    border-radius: 10px;
    background-color:rgb(223, 106, 28);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    span {
        font-size: 1rem;
        font-weight: 700;
        margin-bottom: 10px;
    }
`;

export const MesaCardOcupada = styled(MesaCard)`
    background-color: #ff0000;	    
`;

export const MesaCardLivre = styled(MesaCard)`
    background-color: #00ff00;          
`;

