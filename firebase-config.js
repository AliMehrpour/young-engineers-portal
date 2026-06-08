import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9Ql9xdzxVYpEwlMt89shfz1C1tj5VPcg",
  authDomain: "young-engineers-c8a13.firebaseapp.com",
  projectId: "young-engineers-c8a13",
  storageBucket: "young-engineers-c8a13.firebasestorage.app",
  messagingSenderId: "767781023870",
  appId: "1:767781023870:web:57ff58253caa0bce90282f",
  measurementId: "G-VT2VRNNP5V"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
