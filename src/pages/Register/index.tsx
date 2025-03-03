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
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('medico');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!name || !email || !password) {
        setError('Preencha todos os campos');
        return;
      }
  
      try {
        // Cria o usuário no Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        // Salva informações adicionais no Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name,
          email,
          userType,
        });
  
        // Redireciona para a tela de login
        navigate('/login');
      } catch (error) {
        setError('Erro ao registrar usuário. Tente novamente.');
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
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
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