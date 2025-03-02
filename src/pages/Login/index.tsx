import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../../api/firebaseConfig";

import {
    Container,
    Form,
    Input,
    Button,
} from "./styles";

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!username || !password) {
            setError("Preencha todos os campos");
            return;
        }
    
        try {
            // Busca o usuário no Firestore pelo username
            const usersRef = collection(db, "users");
            const q = query(usersRef, where("username", "==", username));
            const querySnapshot = await getDocs(q);
    
            if (querySnapshot.empty) {
                setError("Usuário não encontrado");
                return;
            }
    
            // Recupera o primeiro documento encontrado
            const userDoc = querySnapshot.docs[0];
            const userData = userDoc.data();
    
            // Recupera o email fictício do Firestore
            const email = userData.email;
    
            if (!email) {
                setError("Email não encontrado no documento do usuário");
                return;
            }
    
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
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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