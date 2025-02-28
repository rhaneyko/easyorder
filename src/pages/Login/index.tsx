import React from "react";

import { 
    Container,
    Form,
    Input,
    Button
} from "./styles";

const Login = () => {
    return (
        <Container>
            <h1>Login</h1>
            <Form>
                <Input type="email" placeholder="E-mail" />
                <Input type="password" placeholder="Senha" />
                <Button type="submit">Entrar</Button>
            </Form>
        </Container>
    )
};

export default Login;