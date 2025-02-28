import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    h1{
        margin-bottom: 16px;
        color: #333;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 300px;
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;
    
    &:focus {
        border-color: #333;
    }
`;

export const Button = styled.button`
    padding: 8px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.2s;
    
    &:hover {
        background-color: #444;
    }
`;