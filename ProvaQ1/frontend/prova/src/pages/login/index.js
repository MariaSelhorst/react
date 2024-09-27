import React, { useState } from 'react'
import {ButtonRegistrar, Copyright, Container, Container2,  H1, InputEmail, InputSenha, DivLogin } from "./style";
import {Button} from "../../components/Button"

export default function Login() {
    return (
        <Container>
            <Container2>
                <H1>
                    Livraria FOFA
                </H1>
                <DivLogin>
                    <InputEmail id="email" type="email" placeholder="Digite seu email" />
                    {/* <label htmlFor="email">Email</label> */}
                    <InputSenha id="senha" type="password" placeholder="Digite sua senha" />
                    {/* <label htmlFor="senha">Senha</label> */}
                </DivLogin>
                <Button >Entrar</Button>
                <ButtonRegistrar >Não tenho conta.</ButtonRegistrar>
            </Container2>
            <Copyright>© 2024 Livraria FOFA Company. Todos os direitos reservados.</Copyright>
        </Container>

    );
}
