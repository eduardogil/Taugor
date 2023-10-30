import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyB5mR5gRbbdwmae5SV6mNUATaqi-_0uvK0",
  authDomain: "reactgf-960c4.firebaseapp.com",
  projectId: "reactgf-960c4",
  storageBucket: "reactgf-960c4.appspot.com",
  messagingSenderId: "898567524684",
  appId: "1:898567524684:web:c7f38b4e0005acf3087fe9",
  measurementId: "G-DT2746P505"
});

export const App = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [funcionarios, setFuncionarios] = useState([]);

    const db = getFirestore(firebaseApp);
    const userCollectionRef = collection(db, "funcionarios");

    useEffect(() => {
      const getFuncionarios = async () => {
        const data = await getDocs(userCollectionRef)
        setFuncionarios(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
      }; 
      getFuncionarios();
    }, []);


  return(
    <div>
      <ul>
        {funcionarios.map( funcionario => {
          return(
            <div key={funcionario.id}>
              <li>{funcionario.nome}</li>
              <li>{funcionario.cargo}</li>
              <li>{funcionario.telefone}</li>
              <li className="fotoPerfil">
                <img src={funcionario.imgurl} alt=""></img>
              </li>
              <li>{funcionario.setor}</li>
              <li>{funcionario.salario}</li>
            </div>
          )
        })}
      </ul>
    </div>
  ) 
}