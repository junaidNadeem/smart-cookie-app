import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { FIREBASE_CONFIG } from "../config/index.js";

const firebaseApp = initializeApp(FIREBASE_CONFIG);
const db = getFirestore(firebaseApp);

export default db