import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";

import {
    Container,
    Form,
    Input,
    Button,
} from "./styles";

const Login = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userName || !password) {
            setError("Preencha todos os campos");
            return;
        }

        try {
            // Busca o usuário no Firestore pelo userName
            const userDocRef = doc(db, "users", userName); // Aqui, userName deve ser único
            const userDoc = await getDoc(userDocRef);

            if (!userDoc.exists()) {
                setError("Usuário não encontrado");
                return;
            }

            // Recupera o email fictício do Firestore
            const userData = userDoc.data();
            const email = userData.email;

            // Autentica o usuário com o email fictício e a senha
            await signInWithEmailAndPassword(auth, email, password);

            // Redireciona para a página inicial após o login
            navigate("/");
        } catch (error) {
            setError("Erro ao fazer login");
            console.error(error);
        }
    };

    return (
        <Container>
            <h1>Login</h1>
            <Form onSubmit={handleLogin}>
                <Input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
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