import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../api/firebaseConfig";

interface UserData {
  nome: string;
  username: string;
  email: string;
  senha: string;
  tipoUsuario: string;
}

// Registrar usuário e salvar no Firestore
export const registerUserWithRole = async (userData: UserData) => {
  const { nome, username, email, senha, tipoUsuario } = userData;

  // Criar usuário no Firebase Authentication
  const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
  const user = userCredential.user;

  // Criar documento no Firestore
  await setDoc(doc(db, "users", user.uid), {
    nome,
    username,
    userType: tipoUsuario,
    email, // Certifique-se de que o email está sendo salvo
    createdAt: new Date(),
  });
};