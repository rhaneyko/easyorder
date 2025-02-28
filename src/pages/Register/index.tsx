import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../api/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

import {
    Container,
    Form,
    Input,
    Button,
} from "./styles";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("garcom");
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("Preencha todos os campos");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                name,
                email,
                userType,
            });

            navigate("/login");
        } catch (error) {
            setError("Erro ao cadastrar usuário");
            console.error(error);
        }
    }

    return (
        <Container>
            <h1>Register</h1>
            <Form onSubmit={handleRegister}>
                <Input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                    required
                />

                <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                    required
                />
                
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                />

                <Button type="submit">Cadastrar</Button>
            </Form>
        </Container>
    )
};

export default Register;