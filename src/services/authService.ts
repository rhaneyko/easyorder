import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../api/firebaseConfig";

interface UserData {
  nome: string;
  username: string;
  senha: string;
  tipoUsuario: string;
}

// Registrar usuário e salvar no Firestore
export const registerUserWithRole = async (userData: UserData) => {
  const { nome, username, senha, tipoUsuario } = userData;


  // Cria um email válido baseado no userName.
  const email = `${username}@easyorder.com`

  // Criar usuário no Firebase Authentication
  const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
  const user = userCredential.user;

  // Criar documento no Firestore
  await setDoc(doc(db, "users", user.uid), {
    nome,
    username,
    userType: tipoUsuario,
    createdAt: new Date(),
  });
};