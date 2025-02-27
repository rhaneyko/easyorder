import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

export const PedidosContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const CardapioContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.cardBackground};
  width: 400px;
  height: 400px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  padding: 10px;
`;

export const CardapioItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
`;

export const PedidoAtual = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.cardBackground};
  width: 400px;
  height: 400px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
  gap: 10px;
`;

export const PedidoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 10px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

export const ButtonRemoveQuantity = styled.button`
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 20px 0 0 20px;
  width: 30px;
  height: 46px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d32f2f;
  }

  @media (max-width: 1024px) {
    width: 25px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 36px;
    font-size: 16px;
  }
`;

export const QuantitySelect = styled.input`
  width: 50px;
  height: 44px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #ddd;
  outline: none;
  padding: 0 0 0 10px;

  @media (max-width: 1024px) {
    width: 45px;
    height: 40px;
    font-size: 15px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 36px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 30px;
    font-size: 12px;
  }
`;

export const ButtonAddQuantity = styled.button`
  width: 30px;
  height: 46px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #4caf50;
  border: 1px solid #4caf50;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #388e3c;
  }

  @media (max-width: 1024px) {
    width: 25px;
    height: 40px;
  }

  @media (max-width: 768px) {
    width: 20px;
    height: 36px;
    font-size: 16px;
  }
`;

export const RemoveButton = styled.button`
  padding: 7px;
  margin-top: -60px;
  margin-right: -20px;
  font-weight: bold;
  color: #fff;
  background-color: #f44336;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d32f2f;
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    font-size: 14px;
  }
`;

export const Price = styled.span`
  font-size: 20px;
  margin: 10px;
  text-align: end;
`;
