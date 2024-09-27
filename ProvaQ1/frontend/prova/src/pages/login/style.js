import styled from "styled-components";

const Container = styled.div`
    background-color: #631763;
    background-size: 100vw 100vh;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Audiowide", sans-serif;
    color: #000000;
    font-size: 2rem;
`;

const Container2 = styled.div`
    background-color: #f7eded;
    width: 550px;
    height: 550px;
    border-radius: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
`;

const H1 = styled.h1`
    margin-top: 8rem;
    font-size: 32px;

`;



const ButtonRegistrar  = styled.button`
    width: 180px;
    font-size: 1rem;
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    color: #ffffff;
    cursor: pointer;
    &:hover {
        color: #0056b3;
    }
    margin-top:100px ;
    background: none;
    border: none;
    text-decoration: underline;
`;

const InputEmail = styled.input`
border: none;
    border-bottom: 2px solid #000000;
    background: transparent;
    outline: none;
    color: #000000;
    padding: 8px;
    width: 100%; 
    margin-bottom: 16px;
    font-family: "Audiowide", sans-serif;

`;

const InputSenha = styled.input`
border: none;
    border-bottom: 2px solid #000000;
    background: transparent;
    outline: none;
    color: #000000;
    padding: 8px;
    width: 100%;
    margin-bottom: 16px;
    font-family: "Audiowide", sans-serif;

`;

const DivLogin = styled.div`
display: flex;
    flex-direction: column;
    width: 350px;
    margin-top: 50px;
    align-items: start; /* Centraliza os campos de entrada e o botão */
    label {

        font-size: 0.8rem;
        color: #000000;
    }
`;

const Copyright = styled.div`
    position: absolute; 
    bottom: 20px; 
    left: 50%; 
    transform: translateX(-50%);
    font-size: 0.8rem; 
    color: #f7f7f7; 
`;


export { Copyright, Container, Container2, H1 , ButtonRegistrar, InputEmail, InputSenha, DivLogin};