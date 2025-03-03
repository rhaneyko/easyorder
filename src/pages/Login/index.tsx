import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

import {
    Container,
    Form,
    Input,
    Button,
} from "./styles";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Usuário autenticado:", userCredential.user);

            // Aguarda o AuthContext atualizar e redireciona
            setTimeout(() => {
                navigate("/");
            }, 1000);
        } catch (error) {
            setError("❌ Erro ao fazer login. Verifique seu email e senha.");
            console.error("Erro no login:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <h1>Login</h1>
            <Form onSubmit={handleLogin}>
                <Input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Usuário"
                    required
                />

                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                    required
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
};

export default Login;