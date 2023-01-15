
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig={
    apiKey: "AIzaSyBgeSEr1FZe_uvo09dFi-MvBGmEESmbQ4c",
    authDomain: "tour-travel-3c4eb.firebaseapp.com",
    projectId: "tour-travel-3c4eb",
    storageBucket: "tour-travel-3c4eb.appspot.com",
    messagingSenderId: "674505015280",
    appId: "1:674505015280:web:ff0278e7d1f13335a82735"
  };
console.log(firebaseConfig,"firebaseConfig")
export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;