import Firebase from 'firebase';

let firebaseConfig = {
  //AQUI VAI O JSON COM AS PROPRIEDADES DE CONEXAO
  // Estes dados são copiados do site do Firebase  "Adicionar o Firebase ao seu app da Web" 
  apiKey: "AIzaSyD5XmlvZfVJJ08cfFaKsFTHe9RrXMgNVp8",
  authDomain: "clientesapp-62685.firebaseapp.com",
  databaseURL: "https://clientesapp-62685.firebaseio.com",
  projectId: "clientesapp-62685",
  storageBucket: "clientesapp-62685.appspot.com",
  messagingSenderId: "401231499585",
  appId: "1:401231499585:web:6651e0a1da0e8c22"
};

let fire = Firebase.initializeApp(firebaseConfig);
export const db = fire.database();