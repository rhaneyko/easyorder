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
    SelectUserType,
    OptionUserType,
} from "./styles";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name || !userName || !password) {
            setError("Preencha todos os campos");
            return;
        }

        try {
            // Cria um email válido baseado no userName
            const email = `${userName}@easyorder.com`;

            // Cria o usuário no Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Salva os dados do usuário no Firestore
            await setDoc(doc(db, "users", user.uid), {
                name,
                userName,
                userType,
            });

            navigate("/login");
        } catch (error) {
            setError("Erro ao cadastrar usuário");
            console.error(error);
        }
    };

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
                />
                <SelectUserType
                    id="userType"
                    value={userType}
                    onChange={(e) => setUserType(e.target.value)}>
                    <OptionUserType>Selecione o tipo de usuário:</OptionUserType>
                    <OptionUserType value="gerente">Gerente</OptionUserType>
                    <OptionUserType value="garcom">Garçom</OptionUserType>
                </SelectUserType>
                <Button type="submit">Cadastrar</Button>
            </Form>
        </Container>
    );
};

export default Register;